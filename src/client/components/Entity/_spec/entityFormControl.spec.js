import React from 'react';
import { shallow } from 'enzyme';
import { Entity } from '..';

// Sample form to test that correct props are flowing to child
// export const AppleForm = props => {
//     const { changeField, entityData, disabled } = props;
//     const { rating } = entityData;
//     return (
//         <div />
//     );
// };

const Child = () => <div />;

export const props = {
    entityType: 'apples',
    entityData: { rating: '6' },
    children: <Child />,
    createEntity: jest.fn(),
    updateEntity: jest.fn(),
    deleteEntity: jest.fn(),
    clearErrorEntity: jest.fn(),
};

describe('Entity', () => {
    let entity;
    beforeEach(() => {
        entity = shallow(<Entity {...props} />);
    });

    describe('defaults', () => {
        it('should be in VIEW mode', () => {
            expect(entity.state('mode')).toEqual('VIEW');
        });
        it('should pass changeField to child', () => {
            expect(entity.find('Child').prop('changeField')).toBeTruthy();
        });
        it('should pass disabled=true to child', () => {
            expect(entity.find('Child').prop('disabled')).toBeTruthy();
        });
        it('should pass props entityData to child', () => {
            expect(entity.find('Child').prop('entityData')).toEqual(props.entityData);
        });
        it('should only have edit button in action bar', () => {
            const actionBar = entity.find('Row.actionBar');
            expect(actionBar.find('Button')).toHaveLength(1);
            expect(actionBar.find('Button').hasClass('edit')).toBeTruthy();
        });
    });

    describe('click edit', () => {
        beforeEach(() => {
            entity.find('Row.actionBar').find('Button.edit').simulate('click');
        });
        it('should be in EDIT mode', () => {
            expect(entity.state('mode')).toEqual('EDIT');
        });
        it('should pass disabled=false to child', () => {
            expect(entity.find('Child').prop('disabled')).toBeFalsy();
        });
        it('should pass state.entityData to child', () => {
            entity.setState({ entityData: { rating: '-1' } });
            expect(entity.find('Child').prop('entityData')).toEqual({ rating: '-1' });
        });
        it('should update state when changeField is invoked', () => {
            entity.instance().changeField({ target: { name: 'rating', value: '0' } });
            expect(entity.state('entityData')).toEqual({ rating: '0' });
        });
        it('should put the save, cancel, and delete buttons in action bar', () => {
            const actionBar = entity.find('Row.actionBar');
            expect(actionBar.find('Button')).toHaveLength(3);
            expect(actionBar.find('Button.save')).toHaveLength(1);
            expect(actionBar.find('Button.cancel')).toHaveLength(1);
            expect(actionBar.find('Button.delete')).toHaveLength(1);
        });
    });

    describe('click edit -> click cancel', () => {
        beforeEach(() => {
            entity.find('Row.actionBar').find('Button.edit').simulate('click');
            entity.find('Row.actionBar').find('Button.cancel').simulate('click');
        });
        it('should be in VIEW mode', () => {
            expect(entity.state('mode')).toEqual('VIEW');
        });
        it('should pass disabled=true to child', () => {
            expect(entity.find('Child').prop('disabled')).toBeTruthy();
        });
        it('should pass props entityData to child', () => {
            expect(entity.find('Child').prop('entityData')).toEqual(props.entityData);
        });
        it('should only have edit button in action bar', () => {
            const actionBar = entity.find('Row.actionBar');
            expect(actionBar.find('Button')).toHaveLength(1);
            expect(actionBar.find('Button').hasClass('edit')).toBeTruthy();
        });
    });

    describe('click edit -> click save', () => {
        beforeEach(() => {
            entity.find('Row.actionBar').find('Button.edit').simulate('click');
            entity.find('Row.actionBar').find('Button.save').simulate('click');
        });
        it('should be in SAVING mode', () => {
            expect(entity.state('mode')).toEqual('SAVING');
        });
        it('should disable the form fields', () => {
            expect(entity.find('Child').prop('disabled')).toBeTruthy();
        });
        it('should show an overlay', () => {
            expect(entity.find('div.overlay')).toHaveLength(1);
        });
        it('should call save action creator with state data', () => {
            expect(props.updateEntity).toBeCalledWith(props.entityType, props.entityData);
        });

        // describe('success', () => {

        // });
        // it('should enter view mode when state entityData matches props entityData', () => {
        //     expect(entity.find('div.overlay')).toHaveLength(1);
        // });
    });

    // it('should enable form fields and load form data into local state when edit button is clicked', () => {
    //     component.find('#edit').first().simulate('click');
    //     expect(component.state('entityData')).toEqual(defaultProps.entityData);
    //     expect(component.find('input').prop('disabled')).toBeFalsy();
    // });

    // it('should enable the button if a value is entered', () => {
    //     component.find('#value').simulate('change', { target: { value: 'test' } });
    //     expect(component.find('button').prop('disabled')).toBeFalsy();
    // });

    // it('should call the action when submitting', () => {
    //     const val = 'test';
    //     component.setState({val});
    //     component.find('button').simulate('click');
    //     expect(props.checkPalindrome).toBeCalledWith(val);
    // });
});

// describe('Concatenation', () => {
//     const props = { createConcatenation: jest.fn() };
//     const component = shallow(< Concatenation {...props} />);

//     it('should render the component without crashing', () => {
//         expect(component.find('h3').text()).toEqual('Concatenation:');
//     });

//     it('should by default disable the submit button', () => {
//         expect(component.find('button').prop('disabled')).toBeTruthy();
//     });

//     describe('Changing the state', () => {
//         const component = shallow(< Concatenation {...props} />);

//         it('should enable the button if a value is entered', () => {
//             component.find('#value1').simulate('change', { target: { value: 'test1' } });
//             component.find('#value2').simulate('change', { target: { value: 'test2' } });
//             expect(component.find('button').prop('disabled')).toBeFalsy();
//         });

//         // value1 and value2 are set in the test above. this is a dependency!
//         it('should call the action when submitting', () => {
//             component.find('button').simulate('click');
//             expect(props.createConcatenation).toBeCalledWith('test1', 'test2');
//         });
//     });
// });
