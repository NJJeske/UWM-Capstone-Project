import React from 'react';
import { shallow } from 'enzyme';
import { Entity } from '..';
import { defaultProps } from './entityFormControl.spec';

describe('Entity', () => {
    let component;

    // resetting the component here, to make sure that we always have a fresh state.
    // see the concatenation for a different way to do this.
    beforeEach(() => {
        component = shallow(<Entity {...defaultProps} />);
    });

    it('should render the component without crashing', () => {
        expect(component).toHaveLength(1);
    });

    it('should have default state of VIEW', () => {
        expect(component.state()).toEqual({ mode: 'VIEW' });
    });

    // it('should by default disable the submit button', () => {
    //     expect(component.find('button').props().disabled).toBeTruthy();
    // });

    // it('should enable the button if a value is entered', () => {
    //     component.find('#value').simulate('change', { target: { value: 'test' } });
    //     expect(component.find('button').props().disabled).toBeFalsy();
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
//         expect(component.find('button').props().disabled).toBeTruthy();
//     });

//     describe('Changing the state', () => {
//         const component = shallow(< Concatenation {...props} />);

//         it('should enable the button if a value is entered', () => {
//             component.find('#value1').simulate('change', { target: { value: 'test1' } });
//             component.find('#value2').simulate('change', { target: { value: 'test2' } });
//             expect(component.find('button').props().disabled).toBeFalsy();
//         });

//         // value1 and value2 are set in the test above. this is a dependency!
//         it('should call the action when submitting', () => {
//             component.find('button').simulate('click');
//             expect(props.createConcatenation).toBeCalledWith('test1', 'test2');
//         });
//     });
// });
