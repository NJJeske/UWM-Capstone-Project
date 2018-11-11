const express = require('express');
const uuid = require('uuid');
let { projects } = require('../../mock');
const router = express.Router();

const results = {
    getAll: true,
    get: true,
    create: true,
    update: true,
    delete: true
};

// id: 'abcdefghijklmnop',
// title: faker.commerce.productName(),
// description: faker.lorem.paragraphs(rand.intBetween(1, 5), '\n'),
// startDate,
// endDate

// Get all projects
router.get('/', (req, res) => {
    if (results.getAll) {
        res.status(200).send(projects);
    } else {
        res.status(400).send({ error: new Error("Uhhhh you're not authenticated to fetch.") });
    }
});

// Create a project
router.post('/', (req, res) => {
    const { newProject } = req.body;
    if (results.create) {
        // Make create call to DB
        // Depending on results from that return success/error
        res.status(200).send({ id: uuid.v4(), ...newProject });
    } else {
        res.status(400).send({ error: new Error("Uhhhh you're not authenticated to create.") });
    }
});

// Update a project
router.put('/:projectID', (req, res) => {
    const { projectID } = req.params;
    const { updatedProject } = req.body;
    console.log(projects);
    if (results.update) {
        Object.assign(projects.find(project => project.id === projectID), updatedProject);
        res.status(200).send();
    } else {
        res.status(400).send({ error: new Error("Uhhhh you're not authenticated to update.") });
    }
});

// Delete a project
router.delete('/:projectID', (req, res) => {
    const { projectID } = req.params;
    if (results.delete) {
        projects = projects.filter(project => project.id !== projectID);
        res.status(200).send();
    } else {
        res.status(400).send({ error: new Error("Uhhhh you're not authenticated to delete.") });
    }
});

module.exports = router;
