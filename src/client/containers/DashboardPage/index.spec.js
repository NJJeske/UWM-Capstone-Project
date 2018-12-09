import React from 'react';
import DashboardPage from '.';
import { shallow } from 'enzyme';

var wrapper = shallow(<DashboardPage />);

describe('Dashboard Page', () => {
    it('should render without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });
});
