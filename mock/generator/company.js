const faker = require('faker');

module.exports = () => ({
    id: faker.random.uuid(),
    name: faker.company.companyName(),
    phone: faker.phone.phoneNumber('###-###-####'),
    website: Math.random() < 0.5 ? '' : faker.internet.url()
});
