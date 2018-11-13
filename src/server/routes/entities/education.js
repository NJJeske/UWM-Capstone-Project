
// Education schema:
// id: string
// name: string
// degree: string
// fieldOfStudy: string
// startDate: string (YYYY-MM-DD)
// endDate: string (YYYY-MM-DD)

module.exports = {
    proxyRoute: '/education',
    serviceRoute: '/education',
    mockConfig: {
        root: 'education',
        responses: {
            getAll: true,
            create: true,
            update: true,
            delete: true
        }
    }
};
