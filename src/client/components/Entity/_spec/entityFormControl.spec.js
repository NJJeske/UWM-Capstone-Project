import React from 'react';
import { mount } from 'enzyme';
import { Entity } from '..';

// Sample form to test that correct props are flowing to child
export const AppleForm = props => {
    const { changeField, entityData, disabled } = props;
    const { rating } = entityData;
    return (
        <form>
            <input
                type='text'
                name='rating'
                disabled={disabled}
                onChange={changeField}
                value={rating}
            />
        </form>
    );
};
export const defaultProps = {
    entityType: 'apples',
    entityData: { rating: '6' },
    children: <AppleForm />,
    createEntity: jest.fn(),
    updateEntity: jest.fn(),
    deleteEntity: jest.fn(),
    clearErrorEntity: jest.fn(),
};

describe('Entity', () => {
    let component;
    beforeEach(() => {
        component = mount(<Entity {...defaultProps} />);
    });

    describe('defaults', () => {
        it('should be in VIEW mode', () => {
            expect(component.state('mode')).toEqual('VIEW');
        });
        it('should disable the form fields', () => {
            expect(component.find('input').prop('disabled')).toBeTruthy();
        });
        it('should populate the form fields from props', () => {
            expect(component.find('input').prop('value')).toEqual('6');
        });
        it('should only have edit button in action bar', () => {
            expect(component.find('button')).toHaveLength(1);
            expect(component.find('button').hasClass('edit')).toBeTruthy();
        });
    });

    const simulateInput = value => {
        component.find('input').simulate('change', { target: { name: 'rating', value } });
    };

    describe('click edit', () => {
        beforeEach(() => {
            component.find('button.edit').simulate('click');
            simulateInput('0');
        });
        it('should be in EDIT mode', () => {
            expect(component.state('mode')).toEqual('EDIT');
        });
        it('should enable the form fields', () => {
            expect(component.find('input').prop('disabled')).toBeFalsy();
        });
        it('should populate the form fields from state', () => {
            expect(component.find('input').prop('value')).toEqual('0');
        });
        it('should put the save, cancel, and delete buttons in action bar', () => {
            expect(component.find('button')).toHaveLength(3);
            expect(component.find('button.save')).toHaveLength(1);
            expect(component.find('button.cancel')).toHaveLength(1);
            expect(component.find('button.delete')).toHaveLength(1);
        });
    });

    describe('click edit -> click cancel', () => {
        beforeEach(() => {
            component.find('button.edit').simulate('click');
            simulateInput('4');
            component.find('button.cancel').simulate('click');
        });
        it('should be in VIEW mode', () => {
            expect(component.state('mode')).toEqual('VIEW');
        });
        it('should disable the form fields', () => {
            expect(component.find('input').prop('disabled')).toBeTruthy();
        });
        it('should populate the form fields from props', () => {
            expect(component.find('input').prop('value')).toEqual('6');
        });
        it('should only have edit button in action bar', () => {
            expect(component.find('button')).toHaveLength(1);
            expect(component.find('button').hasClass('edit')).toBeTruthy();
        });
    });

    describe('click edit -> click save', () => {
        beforeEach(() => {
            component.find('button.edit').simulate('click');
            simulateInput('5');
            component.find('button.save').simulate('click');
        });
        it('should be in SAVING mode', () => {
            expect(component.state('mode')).toEqual('SAVING');
        });
        it('should disable the form fields', () => {
            expect(component.find('input').prop('disabled')).toBeTruthy();
        });
        it('should show an overlay', () => {
            expect(component.find('div.overlay')).toHaveLength(1);
        });
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
