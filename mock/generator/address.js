const faker = require('faker');

module.exports = () => {
    return {
        id: faker.random.uuid(),
        street1: faker.address.streetAddress(),
        street2: Math.random() < 0.5 ? '' : faker.address.secondaryAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode()
    };
};
