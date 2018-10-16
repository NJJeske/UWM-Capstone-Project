module.exports = (faker, rand) => {
    return {
        id: faker.random.uuid(),
        street1: faker.address.streetAddress(),
        street2: rand.maybe(faker.address.secondaryAddress(), 0.2),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode()
    };
};
