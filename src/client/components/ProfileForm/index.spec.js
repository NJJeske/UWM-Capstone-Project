import React from 'react';
import { shallow } from 'enzyme';
import { ProfileForm } from '.';

var form = shallow(<ProfileForm />);
it('should render the component without crashing', () => {
    expect(form).toHaveLength(1);
});

it('should render an inner form component', () => {
    expect(form.find('form'));
});

it('should render 8 inner form groups', () => {
    expect(
        form
            .find('form')
            .find('FormGroup')
    ).toHaveLength(8);
});

it('should render an update button', () => {
    expect(form
        .find('Button')
        .dive()
        .text()
    ).toEqual('Update');
});

it('should render a first form group that contains a label that says First Name', () => {
    expect(form
        .find('form')
        .find('FormGroup')
        .at(0)
        .find('Label')
        .dive()
        .text()
    ).toEqual('First Name');
});

it('should render a second form group that contains a label that says Middle Name', () => {
    expect(form
        .find('form')
        .find('FormGroup')
        .at(1)
        .find('Label')
        .dive()
        .text()
    ).toEqual('Middle Name');
});

it('should render a third form group that contains a label that says Last Name', () => {
    expect(form
        .find('form')
        .find('FormGroup')
        .at(2)
        .find('Label')
        .dive()
        .text()
    ).toEqual('Last Name');
});

it('should render a fourth form group that contains a label that says Title', () => {
    expect(form
        .find('form')
        .find('FormGroup')
        .at(3)
        .find('Label')
        .dive()
        .text()
    ).toEqual('Title');
});

it('should render a fifth form group that contains a label that says Email Address', () => {
    expect(form
        .find('form')
        .find('FormGroup')
        .at(4)
        .find('Label')
        .dive()
        .text()
    ).toEqual('Email Address');
});

it('should render a sixth form group that contains a label that says Home Phone Number', () => {
    expect(form
        .find('form')
        .find('FormGroup')
        .at(5)
        .find('Label')
        .dive()
        .text()
    ).toEqual('Home Phone Number');
});

it('should render a seventh form group that contains a label that says Mobile Phone Number', () => {
    expect(form
        .find('form')
        .find('FormGroup')
        .at(6)
        .find('Label')
        .dive()
        .text()
    ).toEqual('Mobile Phone Number');
});

it('should render an eigth form group that contains a label that says website', () => {
    expect(form
        .find('form')
        .find('FormGroup')
        .at(7)
        .find('Label')
        .dive()
        .text()
    ).toEqual('Website');
});

it('should render a first form group that contains a Col with an Input field', () => {
    expect(form
        .find('form')
        .find('FormGroup')
        .at(0)
        .find('Col')
        .find('Input')
    ).toHaveLength(1);
});

it('should render a second form group that contains a Col with an Input field', () => {
    expect(form
        .find('form')
        .find('FormGroup')
        .at(1)
        .find('Col')
        .find('Input')
    ).toHaveLength(1);
});

it('should render a third form group that contains a Col with an Input field', () => {
    expect(form
        .find('form')
        .find('FormGroup')
        .at(2)
        .find('Col')
        .find('Input')
    ).toHaveLength(1);
});

it('should render a fourth form group that contains a Col with an Input field', () => {
    expect(form
        .find('form')
        .find('FormGroup')
        .at(3)
        .find('Col')
        .find('Input')
    ).toHaveLength(1);
});

it('should render a fifth form group that contains a Col with an Input field', () => {
    expect(form
        .find('form')
        .find('FormGroup')
        .at(4)
        .find('Col')
        .find('Input')
    ).toHaveLength(1);
});

it('should render a sixth form group that contains a Col with an Input field', () => {
    expect(form
        .find('form')
        .find('FormGroup')
        .at(5)
        .find('Col')
        .find('Input')
    ).toHaveLength(1);
});

it('should render a seventh form group that contains a Col with an Input field', () => {
    expect(form
        .find('form')
        .find('FormGroup')
        .at(6)
        .find('Col')
        .find('Input')
    ).toHaveLength(1);
});

it('should render an eigth form group that contains a Col with an Input field', () => {
    expect(form
        .find('form')
        .find('FormGroup')
        .at(7)
        .find('Col')
        .find('Input')
    ).toHaveLength(1);
});
