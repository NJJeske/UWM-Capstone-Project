const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');
const serviceUrl = config.get('serviceUrl');

// Get a user by their email address
router.get('/:email', (req, res, next) => {
    return axios.get(`${serviceUrl}/user/${req.params.email}`).then(response => res.status(200).send(response.data))
        .catch(err => next(err));
});

// Create a new user
router.post('/', function (req, res, next) {
    return axios.post(`${serviceUrl}/user`, req.body).then(response => res.status(200).send(response.data))
        .catch(err => next(err));
});

// Update a user
router.put('/', function (req, res, next) {
    return axios.put(`${serviceUrl}/user`, req.body).then(response => res.status(200).send(response.data))
        .catch(err => next(err));
});

// Delete a user
router.delete('/', function (req, res, next) {
    return axios.delete(`${serviceUrl}/user`, req.body).then(response => res.status(200).send(response.data))
        .catch(err => next(err));
});

module.exports = router;
