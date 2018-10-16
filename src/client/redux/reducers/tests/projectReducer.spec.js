import projectReducer from '../projectReducer';
import { actions } from '../../actions/projectActions';

describe('Project Reducer', () => {
    it('should return the initial state', () => {
        expect(projectReducer(undefined, {})).toEqual({});
    });

    it('should return the concatenated value', () => {
        const testProject = {
            userId: 'test',
            title: 'Test Project',
            description: 'This is my test project',
            startDate: new Date('12/12/2010'),
            endDate: null // Ongoing project
        };
        const projects = [
            { ...testProject },
            { ...testProject },
        ];

        expect(projectReducer({ projects }, {
            type: actions.CREATE_PROJECT,
            newProject: testProject
        })).toEqual({
            projects: projects.concat(testProject)
        });
    });
});
