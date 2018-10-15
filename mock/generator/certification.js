const faker = require('faker');
const { randomDateRange } = require('../helpers');

module.exports = () => {
    const [acquireDate, expireDate] = randomDateRange(false);
    return {
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        authority: faker.company.companyName(),
        licenseNumber: faker.finance.bitcoinAddress(),
        website: Math.random() < 0.5 ? '' : faker.internet.url(),
        acquireDate,
        expireDate
    };
};
