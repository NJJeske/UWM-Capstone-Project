const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const config = require('config');
const createEntityRoute = require('./createEntityRoute');
const serviceUrl = config.get('serviceUrl');

describe('Entity Routes', () => {
    const app = express();
    app.use(bodyParser.json());
    app.use('/apples', createEntityRoute({ serviceRoute: '/applesBackend' }));
    app.use('/oranges', createEntityRoute({
        serviceRoute: '/orangesBackend',
        transform: {
            clientToSpring: {
                create: entityData => ({ ...entityData, mappedForSpring: true }),
                update: entityData => ({ ...entityData, mappedForSpring: true }),
            },
            springToClient: {
                getAll: entities => entities.map(e => e + 1),
                create: entityData => ({ ...entityData, mappedForClient: true }),
                update: entityData => ({ ...entityData, mappedForClient: true }),
                delete: entityData => ({ ...entityData, mappedForClient: true }),
            }
        }
    }));

    const mock = new MockAdapter(axios);
    beforeEach(() => {
        mock.reset();
    });

    describe('get all', () => {
        it('should return backend response', () => {
            mock.onGet(`${serviceUrl}/applesBackend`).reply(200, [1, 2, 3]);
            return request(app)
                .get('/apples')
                .expect(200)
                .then(response => expect(response.body).toEqual([1, 2, 3]));
        });

        it('should forward errors as 500', () => {
            mock.onGet(`${serviceUrl}/applesBackend`).reply(404);
            return request(app)
                .get('/apples')
                .expect(500);
        });

        it('should map for frontend/backend if needed', () => {
            mock.onGet(`${serviceUrl}/orangesBackend`).reply(200, [1, 2, 3]);
            return request(app)
                .get('/oranges')
                .expect(200)
                .then(response => expect(response.body).toEqual([2, 3, 4]));
        });
    });

    describe('create', () => {
        it('should return backend response', () => {
            const entityData = { rating: 5 };
            mock.onPost(`${serviceUrl}/applesBackend`, entityData).reply(200, { id: 1, ...entityData });
            return request(app)
                .post('/apples')
                .send({ entityData })
                .expect(200)
                .then(response => expect(response.body).toEqual({ id: 1, ...entityData }));
        });

        it('should forward errors as 500', () => {
            const entityData = { rating: 5 };
            mock.onPost(`${serviceUrl}/applesBackend`, entityData).reply(401);
            return request(app)
                .post('/apples')
                .send({ entityData })
                .expect(500);
        });

        it('should map for frontend/backend if needed', () => {
            const entityData = { rating: 5 };
            mock.onPost(`${serviceUrl}/orangesBackend`, { ...entityData, mappedForSpring: true })
                .reply(200, { id: 1, ...entityData });
            return request(app)
                .post('/oranges')
                .send({ entityData })
                .expect(200)
                .then(response => expect(response.body).toEqual({ id: 1, ...entityData, mappedForClient: true }));
        });
    });

    describe('update', () => {
        const entityData = { id: 1, rating: 5 };

        it('should return backend response', () => {
            mock.onPut(`${serviceUrl}/applesBackend/1`, entityData).reply(200, entityData);
            return request(app)
                .put('/apples/1')
                .send({ entityData })
                .expect(200)
                .then(response => expect(response.body).toEqual(entityData));
        });

        it('should forward errors as 500', () => {
            mock.onPut(`${serviceUrl}/applesBackend/1`, entityData).reply(401);
            return request(app)
                .put('/apples/1')
                .send({ entityData })
                .expect(500);
        });

        it('should map for frontend/backend if needed', () => {
            mock.onPut(`${serviceUrl}/orangesBackend/1`, { ...entityData, mappedForSpring: true }).reply(200, entityData);
            return request(app)
                .put('/oranges/1')
                .send({ entityData })
                .expect(200)
                .then(response => expect(response.body).toEqual({ ...entityData, mappedForClient: true }));
        });
    });

    describe('delete', () => {
        const entityData = { id: 1, rating: 5 };
        const mockResponse = { message: 'deleted' };

        it('should return backend response', () => {
            mock.onDelete(`${serviceUrl}/applesBackend/1`, entityData).reply(200, mockResponse);
            return request(app)
                .delete('/apples/1')
                .expect(200)
                .then(response => expect(response.body).toEqual(mockResponse));
        });

        it('should forward errors as 500', () => {
            mock.onDelete(`${serviceUrl}/applesBackend/1`, entityData).reply(401);
            return request(app)
                .delete('/apples/1')
                .expect(500);
        });

        it('should map for frontend/backend if needed', () => {
            mock.onDelete(`${serviceUrl}/orangesBackend/1`, { ...entityData, mappedForSpring: true }).reply(200, mockResponse);
            return request(app)
                .delete('/oranges/1')
                .expect(200)
                .then(response => expect(response.body).toEqual({ ...mockResponse, mappedForClient: true }));
        });
    });
});
