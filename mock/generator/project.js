const faker = require('faker');
const { randomDateRange } = require('../helpers');
const randomInt = require('random-int');

module.exports = () => {
    const [startDate, endDate] = randomDateRange();
    return {
        id: faker.random.uuid(),
        title: faker.commerce.productName(),
        description: faker.lorem.paragraphs(randomInt(1, 5), '\n'),
        startDate,
        endDate
    };
};
