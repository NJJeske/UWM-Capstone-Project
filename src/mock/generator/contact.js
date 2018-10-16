module.exports = (faker, rand) => ({
    id: faker.random.uuid(),
    position: rand.maybe(faker.name.jobTitle(), 0.4),
    name: {
        first: faker.name.firstName(),
        last: faker.name.lastName(),
    },
    phone: {
        mobile: rand.maybe(faker.phone.phoneNumber('###-###-####'), 0.4),
        home: rand.maybe(faker.phone.phoneNumber('###-###-####'), 0.4),
    },
    email: faker.internet.email(),
    notes: faker.lorem.paragraph(rand.intBetween(0, 7)),
});
