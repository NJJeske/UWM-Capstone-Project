const { generateArray } = require('./helpers');
const generator = require('./generator');

const mockData = {
    addresses: generateArray(generator.address, 5, 8),
    certifications: generateArray(generator.certification, 0, 3),
    companies: generateArray(generator.company, 1, 6),
    contacts: generateArray(generator.contact, 3, 8),
    education: generateArray(generator.education, 1, 3),
    positions: generateArray(generator.position, 1, 6),
    projects: generateArray(generator.project, 0, 4),
    user: generator.user(),
};

console.log(JSON.stringify(mockData, null, 2));

// TODO - generate mock data using generators
// TODO - link together generated data with IDs
