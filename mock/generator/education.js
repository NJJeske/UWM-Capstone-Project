const { randomDateRange } = require('../helpers');

module.exports = (faker, rand) => {
    const [startDate, endDate] = randomDateRange(faker, rand);
    return {
        id: faker.random.uuid(),
        name: faker.company.companyName(),
        degree: faker.lorem.words(rand.intBetween(1, 4)),
        fieldOfStudy: rand.maybe(faker.lorem.words(rand.intBetween(1, 4), 0.3)),
        startDate,
        endDate
    };
};
