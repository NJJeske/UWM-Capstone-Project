const express = require('express');
const axios = require('axios');
const uuid = require('uuid');
const defaults = require('./entities/defaults');

module.exports = entityConfig => {
    // Merge and destructure config
    const {
        serviceUrl,
        serviceRoute,
        transform,
        useMock, // TODO find a better way to handle mock
        mockConfig
    } = {
        ...defaults,
        ...entityConfig
    };
    const serviceURI = `${serviceUrl}${serviceRoute}`;
    let mock = useMock ? require('../mock')[mockConfig.root] : null;
    const router = express.Router();

    // Get all entities of this type
    router.get('/', (req, res, next) => {
        if (useMock) {
            if (mockConfig.responses.getAll) {
                return res.status(200).send(mock);
            } else {
                return res.status(401).send({ error: new Error("Uhhhh you're not authenticated to fetch.") });
            }
        } else {
            // TODO - wire this up correctly
            return axios.get(serviceURI)
                .then(response => res.send(transform.springToClient.getAll(response.data)))
                .catch(err => next(err));
        }
    });

    // Create a new entity
    router.post('/', (req, res, next) => {
        const { newEntity } = req.body;
        if (useMock) {
            if (mockConfig.responses.create) {
                const createdEntity = { id: uuid.v4(), ...newEntity };
                mock.push(createdEntity);
                return res.status(200).send(createdEntity);
            } else {
                return res.status(401).send({ error: new Error("Uhhhh you're not authenticated to fetch.") });
            }
        } else {
            // TODO - wire this up correctly
            return axios.post(serviceURI, transform.clientToSpring.create(newEntity))
                .then(response => res.send(transform.springToClient.create(response.data)))
                .catch(err => next(err));
        }
    });

    // Update an entity
    router.put('/:entityID', (req, res, next) => {
        const { entityID } = req.params;
        const { updatedEntity } = req.body;

        if (useMock) {
            if (mockConfig.responses.update) {
                Object.assign(mock.find(entity => entity.id === entityID), updatedEntity);
                return res.status(200).send();
            } else {
                return res.status(401).send({ error: new Error("Uhhhh you're not authenticated to update.") });
            }
        } else {
            // TODO - wire this up correctly
            return axios.put(`${serviceURI}/${entityID}`, transform.clientToSpring.update(updatedEntity))
                .then(response => res.send(transform.springToClient.update(response.data)))
                .catch(err => next(err));
        }
    });

    // Delete an entity
    router.delete('/:entityID', (req, res, next) => {
        const { entityID } = req.params;

        if (useMock) {
            if (mockConfig.responses.delete) {
                mock = mock.filter(entity => entity.id !== entityID);
                return res.status(200).send();
            } else {
                return res.status(401).send({ error: new Error("Uhhhh you're not authenticated to delete.") });
            }
        } else {
            // TODO - wire this up correctly
            return axios.delete(`${serviceURI}/${entityID}`)
                .then(response => res.send(transform.springToClient.delete(response.data)))
                .catch(err => next(err));
        }
    });
    
    return router;
};
