// Certification schema:
// id: string
// name: string
// authority: string
// licenseNumber: string
// website: string
// acquireDate: string
// expireDate: string (YYYY-MM-DD)

module.exports = {
    proxyRoute: '/certifications',
    serviceRoute: '/certification',
    mockConfig: {
        root: 'certifications',
        responses: {
            getAll: true,
            create: true,
            update: true,
            delete: true
        }
    }
};
