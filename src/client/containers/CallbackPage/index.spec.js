import React from 'react';
import { CallbackPage } from '.';
import { shallow } from 'enzyme';
import Auth from '../../Auth/Auth';

const auth = new Auth();
var wrapper = shallow(<CallbackPage auth={auth} />);

it('should render an outer div', () => {
    expect(wrapper.exists('div'));
});

it('should render an div that contains an icon and says Loading user profile', () => {
    expect(wrapper.find('div').text()).toEqual(
        '<FontAwesomeIcon /> Loading user profile...'
    );
});
