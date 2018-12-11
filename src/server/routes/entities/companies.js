
// Company schema:
// id: string
// name: string
// phone: string
// website: string

function mapSpringToClient(springData) {
    return { id: springData.ID,
        userID: springData.USER_ID,
        name: springData.NAME,
        phone: springData.PHONE_NUMBER,
        website: springData.WEBSITE
    };
}

function mapClientToSpring(clientData) {
    return { id: clientData.id,
        userID: clientData.userID,
        name: clientData.name,
        phoneNumber: clientData.phone,
        website: clientData.website
    };
}

const transform = {
    springToClient: {
        getAll: springData => springData.map(x => mapSpringToClient(x)),
        create: x => mapSpringToClient(x),
        update: x => mapSpringToClient(x),
        delete: x => mapSpringToClient(x)
    },
    clientToSpring: {
        create: x => mapClientToSpring(x),
        update: x => mapClientToSpring(x),
        delete: x => mapClientToSpring(x)
    }
};

module.exports = {
    proxyRoute: '/companies',
    serviceRoute: '/company',
    transform,
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
