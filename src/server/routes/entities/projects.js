
//
// Project schema:
//
// id: 'abcdefghijklmnop',
// title: faker.commerce.productName(),
// description: faker.lorem.paragraphs(rand.intBetween(1, 5), '\n'),
// startDate,
// endDate
//

function projectMapSpringToClient(springProject) {
    return { id: springProject.id, positionId: springProject.positionID, educationId: springProject.educationID, title: springProject.title, description: springProject.description, startDate: springProject.startDate, endDate: springProject.endDate };
}

function projectMapClientToSpring(clientProject) {
    return { id: clientProject.id, userID: clientProject.userID, positionID: clientProject.positionId, educationID: clientProject.educationId, title: clientProject.title, description: clientProject.description, startDate: clientProject.startDate, endDate: clientProject.endDate };
}

const transform = {
    springToClient: {
        getAll: springData => springData.map(x => projectMapSpringToClient(x)),
        create: x => projectMapSpringToClient(x),
        update: x => projectMapSpringToClient(x),
        delete: x => projectMapSpringToClient(x)
    },
    clientToSpring: {
        getAll: clientData => clientData.map(x => projectMapClientToSpring(x)),
        create: x => projectMapClientToSpring(x),
        update: x => projectMapClientToSpring(x),
        delete: x => projectMapClientToSpring(x)
    }
};

module.exports = {
    proxyRoute: '/projects',
    serviceRoute: '/project',
    transform,
    mockConfig: {
        root: 'project',
        responses: {
            getAll: true,
            create: true,
            update: true,
            delete: false
        }
    }
};
