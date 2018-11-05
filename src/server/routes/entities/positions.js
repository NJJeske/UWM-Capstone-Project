
// Position schema:
// id: string
// title: string
// description: string
// startDate: string (YYYY-MM-DD)
// endDate: string (YYYY-MM-DD)

module.exports = {
    proxyRoute: '/positions',
    serviceRoute: '/positions',
    mockConfig: {
        root: 'positions',
        responses: {
            getAll: true,
            create: true,
            update: true,
            delete: true
        }
    }
};
