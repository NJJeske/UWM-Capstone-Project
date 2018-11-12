import entityReducer, { initialState } from '../entityReducer';
import { actions } from '../../actions/entityActions';

describe('Entity Reducer', () => {
    describe('default', () => {
        it('should return the initial state', () => {
            expect(entityReducer(undefined, {})).toEqual(initialState);
        });
    });
    describe('create', () => {
        it('should append the entity to the array of its type', () => {
            const state = {
                apples: [{ id: 1 }],
                oranges: [{ id: 1 }]
            };
            const action = {
                type: actions.ENTITY_CREATE,
                entityType: 'apples',
                newEntity: { id: 3 }
            };
            const nextState = {
                apples: [{ id: 1 }, { id: 3 }],
                oranges: [{ id: 1 }]
            };
            expect(entityReducer(state, action)).toEqual(nextState);
        });
        it('should create an array of entityType if it doesnt exist', () => {
            const state = {
                oranges: [{ id: 2 }]
            };
            const action = {
                type: actions.ENTITY_CREATE,
                entityType: 'apples',
                newEntity: { id: 1 }
            };
            const nextState = {
                apples: [{ id: 1 }],
                oranges: [{ id: 2 }]
            };
            expect(entityReducer(state, action)).toEqual(nextState);
        });
    });
    describe('update', () => {
        it('should replace the entity based on its type and id', () => {
            const state = {
                people: [{ id: 1 }, { id: 2 }, { id: 3 }],
                robots: [{ id: 1 }, { id: 2 }, { id: 3 }],
            };
            const action = {
                type: actions.ENTITY_UPDATE,
                entityType: 'people',
                updatedEntity: { id: 2, name: 'Carl' }
            };
            const nextState = {
                people: [{ id: 1 }, { id: 2, name: 'Carl' }, { id: 3 }],
                robots: [{ id: 1 }, { id: 2 }, { id: 3 }],
            };
            expect(entityReducer(state, action)).toEqual(nextState);
        });
    });
    describe('delete', () => {
        it('should delete the entity based on its type and id', () => {
            const state = {
                apples: [{ id: 1 }, { id: 2 }],
                oranges: [{ id: 1 }, { id: 2 }, { id: 3 }]
            };
            const action = {
                type: actions.ENTITY_DELETE,
                entityType: 'oranges',
                entityId: 2
            };
            const nextState = {
                apples: [{ id: 1 }, { id: 2 }],
                oranges: [{ id: 1 }, { id: 3 }],
            };
            expect(entityReducer(state, action)).toEqual(nextState);
        });
    });
    describe('error', () => {
        it('should bind an error to entity based on type and id', () => {
            const error = new Error('everything broke');
            const state = {
                apples: [{ id: 1 }, { id: 2 }],
                oranges: [{ id: 1 }, { id: 2 }]
            };
            const action = {
                type: actions.ENTITY_ERROR,
                entityType: 'oranges',
                entityId: 1,
                error
            };
            const nextState = {
                apples: [{ id: 1 }, { id: 2 }],
                oranges: [{ id: 1, error }, { id: 2 }],
            };
            expect(entityReducer(state, action)).toEqual(nextState);
        });
        it('should clear an error from entity based on type and id', () => {
            const error = new Error('everything broke');
            const state = {
                apples: [{ id: 1 }, { id: 2, error }],
                oranges: [{ id: 1 }, { id: 2 }]
            };
            const action = {
                type: actions.ENTITY_ERROR,
                entityType: 'apples',
                entityId: 2,
            };
            const nextState = {
                apples: [{ id: 1 }, { id: 2 }],
                oranges: [{ id: 1 }, { id: 2 }],
            };
            expect(entityReducer(state, action)).toEqual(nextState);
        });
    });
});
