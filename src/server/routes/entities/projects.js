
//
// Project schema:
//
// id: 'abcdefghijklmnop',
// title: faker.commerce.productName(),
// description: faker.lorem.paragraphs(rand.intBetween(1, 5), '\n'),
// startDate,
// endDate
//

module.exports = {
    proxyRoute: '/projects',
    serviceRoute: '/projects',
    mockConfig: {
        root: 'projects',
        responses: {
            getAll: true,
            create: true,
            update: true,
            delete: true
        }
    }
};
