const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');

const serviceUrl = config.get('serviceUrl');

router.get('/:value1/:value2', (req, res, next) => {
    return axios.get(`${serviceUrl}/${req.param.value1}/${req.param.value2}`).catch(err => next(err));
});

module.exports = router;
