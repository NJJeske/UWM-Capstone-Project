
function mapSpringToClient(springData) {
    return { id: springData.ID,
        userID: springData.USER_ID,
        companyId: springData.COMPANY_ID,
        firstName: springData.FIRST_NAME,
        lastName: springData.LAST_NAME,
        position: springData.POSITION,
        email: springData.EMAIL,
        phone: springData.PHONE_NUMBER,
        notes: springData.NOTES
    };
}

function mapClientToSpring(clientData) {
    return { id: clientData.id,
        userID: clientData.userID,
        companyID: clientData.companyId,
        firstName: clientData.firstName,
        lastName: clientData.lastName,
        position: clientData.position,
        email: clientData.email,
        phoneNumber: clientData.phone,
        notes: clientData.notes
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
    proxyRoute: '/contacts',
    serviceRoute: '/contact',
    transform,
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
