const faker = require('faker');
const randomInt = require('random-int');

module.exports = () => ({
    id: faker.random.uuid(),
    position: Math.random() < 0.5 ? '' : faker.name.jobTitle(),
    name: {
        first: faker.name.firstName(),
        last: faker.name.lastName(),
    },
    phone: {
        mobile: Math.random() < 0.5 ? '' : faker.phone.phoneNumber('###-###-####'),
        home: Math.random() < 0.5 ? '' : faker.phone.phoneNumber('###-###-####'),
    },
    email: Math.random() < 0.5 ? '' : faker.internet.email(),
    notes: Math.random() < 0.8 ? '' : faker.lorem.paragraph(randomInt(1, 7)),
});
