const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');

const serviceUrl = config.get('serviceUrl');

router.get('/:palindrome', (req, res, next) => {
    return axios.get(`${serviceUrl}/${req.param.palindrome}`).catch(err => next(err));
});

module.exports = router;
