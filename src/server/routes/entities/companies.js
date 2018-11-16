
// Company schema:
// id: string
// name: string
// phone: string
// website: string

module.exports = {
    proxyRoute: '/companies',
    serviceRoute: '/companies',
    mockConfig: {
        root: 'companies',
        responses: {
            getAll: true,
            create: true,
            update: true,
            delete: true
        }
    }
};
