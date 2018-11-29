import React from 'react';
import { HomeScreen } from '.';
import { shallow } from 'enzyme';

var wrapper = shallow(<HomeScreen />);

it('should render an outer main', () => {
    expect(wrapper.exists('main'));
});

it('should render an h1 that says MyPortfolio', () => {
    expect(wrapper.find('h1').text()).toEqual('MyPortfolio');
});

it('should render a HomepageButtonCluster component', () => {
    expect(wrapper.exists('HomepageButtonCluster'));
});

it('should render a ProfileButton component', () => {
    expect(wrapper.exists('ProfileButton'));
});
