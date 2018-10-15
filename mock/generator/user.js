const faker = require('faker');

module.exports = () => ({
    id: faker.random.uuid(),
    name: {
        title: Math.random() < 0.5 ? '' : faker.name.prefix(),
        first: faker.name.firstName(),
        middle: faker.name.firstName(),
        last: faker.name.lastName(),
    },
    phone: {
        mobile: Math.random() < 0.5 ? '' : faker.phone.phoneNumber('###-###-####'),
        home: Math.random() < 0.5 ? '' : faker.phone.phoneNumber('###-###-####'),
    },
    email: Math.random() < 0.5 ? '' : faker.internet.email(),
    website: Math.random() < 0.5 ? '' : faker.internet.url()
});
