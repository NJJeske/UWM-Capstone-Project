
// Education schema:
// id: string
// name: string
// degree: string
// fieldOfStudy: string
// startDate: string (YYYY-MM-DD)
// endDate: string (YYYY-MM-DD)
// TODO: address data

function mapSpringToClient(springData) {
    return { id: springData.id || springData.ID,
        userID: springData.userID || springData.USER_ID,
        name: springData.schoolName || springData.SCHOOL_NAME,
        degree: springData.degree || springData.DEGREE,
        fieldOfStudy: springData.fieldOfStudy || springData.FIELD_OF_STUDY,
        startDate: springData.startDate || springData.START_DATE,
        endDate: springData.endDate || springData.END_DATE
    };
}

function mapClientToSpring(clientData) {
    return { id: clientData.id,
        userID: clientData.userID,
        schoolName: clientData.name,
        degree: clientData.degree,
        fieldOfStudy: clientData.fieldOfStudy,
        startDate: clientData.startDate,
        endDate: clientData.endDate
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
    proxyRoute: '/education',
    serviceRoute: '/education',
    transform,
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
