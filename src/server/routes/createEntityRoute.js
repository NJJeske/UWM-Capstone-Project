const express = require('express');
const axios = require('axios');
const uuid = require('uuid');
const _ = require('lodash');
const defaults = require('./entities/defaults');

module.exports = entityConfig => {
    // Merge and destructure config
    const {
        serviceUrl,
        serviceRoute,
        transform,
        useMock, // TODO find a better way to handle mock
        mockConfig
    } = _.defaultsDeep(entityConfig, defaults);

    const serviceURI = `${serviceUrl}${serviceRoute}`;
    let mock = useMock ? require('../mock')[mockConfig.root] : null;
    const router = express.Router();

    // Get all entities of this type
    router.get('/', (req, res, next) => {
        /* istanbul ignore next */
        if (useMock) {
            if (mockConfig.responses.getAll) {
                return res.status(200).send(mock);
            } else {
                return res.status(401).send({ error: new Error("Uhhhh you're not authorized to fetch.") });
            }
        } else {
            // TODO - Wire this up to make calls to real Spring backend
            return axios.get(serviceURI)
                .then(response => res.send(transform.springToClient.getAll(response.data)))
                .catch(err => next(err));
        }
    });

    // Create a new entity
    router.post('/', (req, res, next) => {
        const { userID, entityData } = req.body;
        /* istanbul ignore next */
        if (useMock) {
            if (mockConfig.responses.create) {
                const createdEntity = { id: uuid.v4(), ...entityData };
                mock = [...mock, createdEntity];
                return res.status(200).send(createdEntity);
            } else {
                return res.status(401).send({ error: new Error("Uhhhh you're not authorized to fetch.") });
            }
        } else {
            // TODO - Wire this up to make calls to real Spring backend
            return axios.post(serviceURI, transform.clientToSpring.create({ entityData: { userID, ...entityData } }))
                .then(response => res.send(transform.springToClient.create(response.data)))
                .catch(err => next(err));
        }
    });

    // Update an entity
    router.put('/:entityID', (req, res, next) => {
        const { entityID } = req.params;
        const { userID, entityData } = req.body;

        /* istanbul ignore next */
        if (useMock) {
            if (mockConfig.responses.update) {
                mock = mock.map(entity => entity.id === entityID ? entityData : entity);
                return res.status(200).send();
            } else {
                return res.status(401).send({ error: new Error("Uhhhh you're not authorized to update.") });
            }
        } else {
            // TODO - Wire this up to make calls to real Spring backend
            return axios.put(`${serviceURI}/${entityID}`, transform.clientToSpring.update({ entityData: { userID, ...entityData } }))
                .then(response => res.send(transform.springToClient.update(response.data)))
                .catch(err => next(err));
        }
    });

    // Delete an entity
    router.delete('/:entityID', (req, res, next) => {
        const { entityID } = req.params;

        /* istanbul ignore next */
        if (useMock) {
            if (mockConfig.responses.delete) {
                mock = mock.filter(entity => entity.id !== entityID);
                return res.status(200).send();
            } else {
                return res.status(401).send({ error: new Error("Uhhhh you're not authorized to delete.") });
            }
        } else {
            // TODO - Wire this up to make calls to real Spring backend
            return axios.delete(`${serviceURI}/${entityID}`)
                .then(response => res.send(transform.springToClient.delete(response.data)))
                .catch(err => next(err));
        }
    });

    return router;
};
