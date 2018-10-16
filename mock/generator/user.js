module.exports = (faker, rand) => ({
    id: faker.random.uuid(),
    name: {
        title: rand.maybe(faker.name.prefix()),
        first: faker.name.firstName(),
        middle: rand.maybe(faker.name.firstName()),
        last: faker.name.lastName(),
    },
    phone: {
        mobile: faker.phone.phoneNumber('###-###-####'),
        home: rand.maybe(faker.phone.phoneNumber('###-###-####')),
    },
    email: faker.internet.email(),
    website: rand.maybe(faker.internet.url)
});
