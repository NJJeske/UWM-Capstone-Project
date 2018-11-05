
// Address schema:
// id: string
// street1: string
// street2: string
// city: string
// state: string
// zipCode: string

module.exports = {
    proxyRoute: '/addresses',
    serviceRoute: '/addresses',
    mockConfig: {
        root: 'addresses',
        responses: {
            getAll: true,
            create: true,
            update: true,
            delete: true
        }
    }
};
