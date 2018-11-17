import React from 'react';
import { UnfoundPage } from '.';
import { shallow } from 'enzyme';

var wrapper = shallow(<UnfoundPage />);

it('should render an outer div', () => {
  expect(wrapper.exists('div'));
});

it('should render a first span that contains a fontawesome icon', () => {
  expect(
    wrapper
      .find('span')
      .at(0)
      .text()
  ).toEqual('<FontAwesomeIcon />');
});

it('should render a second span that says: 404 Not Found.', () => {
  expect(
    wrapper
      .find('span')
      .at(1)
      .text()
  ).toEqual(' 404 Not Found.');
});

it('should render a third span that says: The requested URL was not found on this server.', () => {
  expect(
    wrapper
      .find('span')
      .at(2)
      .text()
  ).toEqual('The requested URL was not found on this server.');
});
