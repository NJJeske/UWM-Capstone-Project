const faker = require('faker');
const rand = require('random-seed').create();
const config = require('config');
const { generateArray } = require('./helpers');
const generator = require('./generator');

let initialState = {};
if (config.get('useMock')) {
    // Seed faker and extend RNG, pass to generators
    const seed = config.get('seed') || faker.random.uuid();
    if (seed) {
        faker.seed(seed);
        rand.seed(seed);
    }
    rand.maybe = (value, likelihood = 0.5, defaultValue = '') => rand.random() < likelihood ? defaultValue : value;
    const generate = generateArray.bind(null, faker, rand);

    // To be imported as initial state of their respective reducers after linkage
    initialState = {
        addresses: generate(generator.address, 5, 8),
        certifications: generate(generator.certification, 0, 3),
        companies: generate(generator.company, 1, 6),
        contacts: generate(generator.contact, 3, 8),
        education: generate(generator.education, 1, 3),
        positions: generate(generator.position, 1, 6),
        projects: generate(generator.project, 0, 4),
        user: generate(generator.user, 1, 1)[0]
    };

    // Now we link together the various IDs
    const randomElement = (type, allowUndefined = true) => {
        if (!allowUndefined || rand.maybe(true)) {
            const index = rand.intBetween(0, initialState[type].length - 1);
            return initialState[type][index].id;
        }
    };

    // Companies must have an address
    initialState.companies.forEach(company => {
        company.addressId = randomElement('addresses', false);
    });

    // Contacts may have companies
    initialState.contacts.forEach(contact => {
        contact.companyId = randomElement('companies');
    });

    // Education must have an address
    initialState.education.forEach(education => {
        education.addressId = randomElement('addresses', false);
    });

    // Positions must have a company
    initialState.positions.forEach(position => {
        position.companyId = randomElement('companies', false);
    });

    // Projects may have education and positions
    initialState.projects.forEach(project => {
        project.educationId = randomElement('education');
        project.positionId = randomElement('positions');
    });
}

module.exports = initialState;
