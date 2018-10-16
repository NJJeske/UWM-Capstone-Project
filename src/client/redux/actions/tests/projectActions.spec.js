import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { API_PATH, actions, createProject } from '../projectActions';

describe('Project actions', () => {
    const mock = new MockAdapter(axios);
    const mockStore = configureMockStore([thunk]);

    let store;
    beforeEach(() => {
        mock.reset();
        store = mockStore();
    });

    describe('createProject', () => {
        it('should handle success', async () => {
            const testProject = {
                userId: 'test',
                title: 'Test Project',
                description: 'This is my test project',
                startDate: new Date('12/12/2010'),
                endDate: null // Ongoing project
            };
            const expectedReply = {
                ...testProject,
                projectId: '1',
            };
            mock.onPost(`${API_PATH}`, testProject).reply(200, expectedReply);

            const expectedActions = [{ type: actions.CREATE_PROJECT, expectedReply }];
            await store.dispatch(createProject(testProject));
            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should handle success with data associations', async () => {
            const testProject = {
                userId: 'test',
                title: 'Test Project',
                description: 'This is my test project',
                positionId: '1',
                educationId: '1',
                startDate: new Date('12/12/2010'),
                endDate: Date.now()
            };
            const expectedReply = {
                ...testProject,
                projectId: '1',
            };
            mock.onPost(`${API_PATH}`, testProject).reply(200, expectedReply);

            const expectedActions = [{ type: actions.CREATE_PROJECT, expectedReply }];
            await store.dispatch(createProject(testProject));
            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should handle errors', async () => {
            const testProject = {
                userId: 'wrongPerson',
                title: 'Test Project',
                description: 'This is my test project',
                startDate: new Date('12/12/2010'),
                endDate: null // Ongoing project
            };
            const expectedReply = {
                message: 'Unauthorized to create project for this user.',
                request: testProject
            };
            mock.onPost(`${API_PATH}`, testProject).reply(401, expectedReply);

            const expectedActions = [{ type: actions.ERROR_PROJECT, expectedReply }];
            await store.dispatch(createProject(testProject));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
