const faker = require('faker');
const { randomDateRange } = require('../helpers');
const randomInt = require('random-int');

module.exports = () => {
    const [startDate, endDate] = randomDateRange();
    return {
        id: faker.random.uuid(),
        name: faker.company.companyName(),
        degree: Math.random() < 0.5 ? '' : faker.lorem.words(randomInt(1, 4)),
        fieldOfStudy: Math.random() < 0.5 ? '' : faker.lorem.words(randomInt(1, 4)),
        startDate,
        endDate
    };
};
