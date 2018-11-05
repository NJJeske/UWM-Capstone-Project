'use strict';

const express = require('express');
const createEntityRoute = require('./routes/createEntityRoute');
const router = new express.Router();

// Entity routes
['addresses', 'certifications', 'companies', 'contacts', 'education', 'positions', 'projects'].forEach(entityType => {
    const { proxyRoute, ...entityRouteConfig } = require(`./routes/entities/${entityType}`);
    router.use(proxyRoute, createEntityRoute(entityRouteConfig));
});

// TODO: Auth/User routes

module.exports = router;
