import React from 'react';
import { shallow } from 'enzyme';
import { Concatenation } from './';

describe('Concatenation', () => {
    const component = shallow(< Concatenation />);
    it('should render the component without crashing', () => {
        expect(component.find('h3').text()).toEqual('Concatenation');
    });
});
