const faker = require('faker');
const { randomDateRange } = require('../helpers');
const randomInt = require('random-int');

let ct = 0;
module.exports = () => {
    const [startDate, endDate] = randomDateRange();
    return {
        projectId: ct++,
        title: faker.commerce.productName(),
        description: faker.lorem.paragraphs(randomInt(1, 5), '\n'),
        startDate,
        endDate
    };
};
