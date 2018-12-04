import React from 'react';
import { ProfilePage } from '.';
import { shallow } from 'enzyme';

var wrapper = shallow(<ProfilePage />);

it('should render an outer div', () => {
    expect(wrapper.exists('div'));
});

it('should render a header component that says ProfileSettings', () => {
    expect(wrapper.exists('Header'));
});

it('should render a Sidebar component', () => {
    expect(wrapper.exists('Sidebar'));
});

it('should render a ProfileButton component', () => {
    expect(wrapper.exists('ProfileForm'));
});
