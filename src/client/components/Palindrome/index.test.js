import React from 'react';
import { shallow } from 'enzyme';
import { Palindrome } from './';

describe('Palindrome', () => {
    const component = shallow(< Palindrome />);
    it('should render the component without crashing', () => {
        expect(component.find('h3').text()).toEqual('Palindrome');
    });
});
