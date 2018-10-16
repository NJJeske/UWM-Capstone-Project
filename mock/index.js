const faker = require('faker');
const rand = require('random-seed').create();
const config = require('config');
const { generateArray } = require('./helpers');
const generator = require('./generator');

// Seed faker and RNG and pass to generators
const seed = config.get('seed');
if (seed) {
    faker.seed(seed);
    rand.seed(seed);
}
rand.maybe = (value, likelihood = 0.5, defaultValue = '') => rand.random() < likelihood ? defaultValue : value;
const generate = generateArray.bind(null, faker, rand);

// To be imported as initial state of their respective reducers
const mockData = {
    addresses: generate(generator.address, 5, 8),
    certifications: generate(generator.certification, 0, 3),
    companies: generate(generator.company, 1, 6),
    contacts: generate(generator.contact, 3, 8),
    education: generate(generator.education, 1, 3),
    positions: generate(generator.position, 1, 6),
    projects: generate(generator.project, 0, 4),
    user: generate(generator.user, 1, 1)[0]
};

// TODO - link together generated data with IDs
// console.log(JSON.stringify(mockData, null, 2));

module.exports = mockData;
