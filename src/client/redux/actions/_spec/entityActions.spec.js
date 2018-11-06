import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
    actions,
    createEntity,
    updateEntity,
    deleteEntity,
    clearErrorEntity
} from '../entityActions';

describe('Entity Action Creators', () => {
    const mock = new MockAdapter(axios);
    const mockStore = configureMockStore([thunk]);
    let store;
    beforeEach(() => {
        mock.reset();
        store = mockStore();
    });

    describe('createEntity', () => {
        it('should handle success', async () => {
            const newApple = { rating: 8 };
            const mockReply = { id: 2, rating: 8 };
            mock.onPost('/apples', newApple).reply(200, mockReply);

            const expectedActions = [
                {
                    type: actions.ENTITY_CREATE,
                    entityType: 'apples',
                    newEntity: { id: 2, rating: 8 }
                }
            ];
            await store.dispatch(createEntity('apples', newApple));
            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should handle failure', async () => {
            const newApple = { id: 2, rating: 8 };
            mock.onPost('/apples', newApple).reply(400, new Error());

            const expectedActions = [
                {
                    type: actions.ENTITY_ERROR,
                    entityType: 'apples',
                    entityId: 2,
                    error: new Error("Error creating entity in 'apples' through API")
                }
            ];
            await store.dispatch(createEntity('apples', newApple));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('updateEntity', () => {
        it('should handle success', async () => {
            const updatedApple = { id: 2, rating: 8 };
            mock.onPut('/apples/2', updatedApple).reply(200);

            const expectedActions = [
                {
                    type: actions.ENTITY_UPDATE,
                    entityType: 'apples',
                    updatedEntity: { id: 2, rating: 8 }
                }
            ];
            await store.dispatch(updateEntity('apples', updatedApple));
            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should handle failure', async () => {
            const updatedApple = { id: 2, rating: 8 };
            mock.onPost('/apples/2', updatedApple).reply(400, new Error());

            const expectedActions = [
                {
                    type: actions.ENTITY_ERROR,
                    entityType: 'apples',
                    entityId: 2,
                    error: new Error("Error updating entity in 'apples' through API")
                }
            ];
            await store.dispatch(updateEntity('apples', updatedApple));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('deleteEntity', () => {
        it('should handle success', async () => {
            mock.onDelete('/apples/3').reply(200);

            const expectedActions = [
                {
                    type: actions.ENTITY_DELETE,
                    entityType: 'apples',
                    entityId: 3
                }
            ];
            await store.dispatch(deleteEntity('apples', 3));
            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should handle failure', async () => {
            mock.onDelete('/apples/3').reply(400, new Error());
            const expectedActions = [
                {
                    type: actions.ENTITY_ERROR,
                    entityType: 'apples',
                    entityId: 3,
                    error: new Error("Error deleting entity in 'apples' through API")
                }
            ];
            await store.dispatch(deleteEntity('apples', 3));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('clearErrorEntity', () => {
        it('should dispatch correct action', async () => {
            const expectedActions = [
                {
                    type: actions.ENTITY_ERROR,
                    entityType: 'cats',
                    entityId: 5
                }
            ];
            await store.dispatch(clearErrorEntity('cats', 5));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
