import React from 'react';
import { HomepageButtonCluster } from '.';
import { shallow } from 'enzyme';

var wrapper = shallow(<HomepageButtonCluster />);

it('should render two rows of buttons', () => {
    expect(wrapper.find('Row')).toHaveLength(2);
});

it('should render a first row with 3 child elements', () => {
    expect(
        wrapper
            .find('Row')
            .at(0)
            .children()
    ).toHaveLength(3);
});

it('should render a second row with 4 child elements', () => {
    expect(
        wrapper
            .find('Row')
            .at(1)
            .children()
    ).toHaveLength(4);
});

it('should render a Col element as the first child element in the first row', () => {
    expect(
        wrapper
            .find('Row')
            .at(0)
            .childAt(0)
            .hasClass('Col')
    );
});

it('should render a Col element as the second child element in the first row', () => {
    expect(
        wrapper
            .find('Row')
            .at(0)
            .childAt(1)
            .hasClass('Col')
    );
});

it('should render a Col as the third child element in the first row', () => {
    expect(
        wrapper
            .find('Row')
            .at(0)
            .childAt(2)
            .hasClass('Col')
    );
});

it('should render a Col as the first child element in the second row', () => {
    expect(
        wrapper
            .find('Row')
            .at(1)
            .childAt(0)
            .hasClass('Col')
    );
});

it('should render a Col as the second child element in the second row', () => {
    expect(
        wrapper
            .find('Row')
            .at(1)
            .childAt(1)
            .hasClass('Col')
    );
});

it('should render a Col as the third child element in the second row', () => {
    expect(
        wrapper
            .find('Row')
            .at(1)
            .childAt(2)
            .hasClass('Col')
    );
});

it('should render a button in the first child element of the first row', () => {
    expect(
        wrapper
            .find('Row')
            .at(0)
            .childAt(0)
            .childAt(0)
            .hasClass('Button')
    );
});

it('should render a button in the second child element in the first row', () => {
    expect(
        wrapper
            .find('Row')
            .at(0)
            .childAt(1)
            .childAt(0)
            .hasClass('Button')
    );
});

it('should render a butoon in the third child element of the first row', () => {
    expect(
        wrapper
            .find('Row')
            .at(0)
            .childAt(2)
            .childAt(0)
            .hasClass('Button')
    );
});

it('should render a button in the first child element of the second row', () => {
    expect(
        wrapper
            .find('Row')
            .at(1)
            .childAt(0)
            .childAt(0)
            .hasClass('Button')
    );
});

it('should render a button in the second child element of the second row', () => {
    expect(
        wrapper
            .find('Row')
            .at(1)
            .childAt(1)
            .childAt(0)
            .hasClass('Button')
    );
});

it('should render a button in the third child element of the second row', () => {
    expect(
        wrapper
            .find('Row')
            .at(1)
            .childAt(2)
            .childAt(0)
            .hasClass('Button')
    );
});

it('should render a button in the fourth child element of the second row', () => {
    expect(
        wrapper
            .find('Row')
            .at(1)
            .childAt(3)
            .childAt(0)
            .hasClass('Button')
    );
});

it('should render a button for certifications in the first child element of the first row', () => {
    expect(
        wrapper
            .find('Row')
            .at(0)
            .children()
            .at(0)
            .childAt(0)
            .dive()
            .text()
    ).toEqual('<FontAwesomeIcon />Documents');
});

it('should render a button for experience in the second child element of the first row', () => {
    expect(
        wrapper
            .find('Row')
            .at(0)
            .children()
            .at(1)
            .childAt(0)
            .dive()
            .text()
    ).toEqual('<FontAwesomeIcon />Experience');
});

it('should render a button for education in the third child element of the first row', () => {
    expect(
        wrapper
            .find('Row')
            .at(0)
            .children()
            .at(2)
            .childAt(0)
            .dive()
            .text()
    ).toEqual('<FontAwesomeIcon />Education');
});

it('should render a button for projects in the first child element of the second row', () => {
    expect(
        wrapper
            .find('Row')
            .at(1)
            .children()
            .at(0)
            .childAt(0)
            .dive()
            .text()
    ).toEqual('<FontAwesomeIcon />Projects');
});

it('should render a button for contacts in the second child element of the second row', () => {
    expect(
        wrapper
            .find('Row')
            .at(1)
            .children()
            .at(1)
            .childAt(0)
            .dive()
            .text()
    ).toEqual('<FontAwesomeIcon />Contacts');
});

it('should render a button for timeline in the 3rd child element of the second row', () => {
    expect(
        wrapper
            .find('Row')
            .at(1)
            .children()
            .at(2)
            .childAt(0)
            .dive()
            .text()
    ).toEqual('<FontAwesomeIcon />Timeline');
});

it('should render a button for documents in the 4th child element of the second row', () => {
    expect(
        wrapper
            .find('Row')
            .at(1)
            .children()
            .at(3)
            .childAt(0)
            .dive()
            .text()
    ).toEqual('<FontAwesomeIcon />Certifications');
});
