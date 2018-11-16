
// Contact schema:
// id: string
// position: string
// name: {
//     first: string
//     last: string
// },
// phone: {
//     mobile: string
//     home: string
// },
// email: string
// notes: string

module.exports = {
    proxyRoute: '/contacts',
    serviceRoute: '/contacts',
    mockConfig: {
        root: 'contacts',
        responses: {
            getAll: true,
            create: true,
            update: true,
            delete: true
        }
    }
};
