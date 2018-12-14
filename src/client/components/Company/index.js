import React from 'react';
import { Row, Col, Form, FormGroup, Input } from 'reactstrap';
import { Entity } from '../';
import { alwaysTrue } from '../validators';

export const CompanyForm = props => {
    const { changeField, entityData, disabled } = props;
    const disabledClass = disabled ? 'disabled' : '';
    const {
        name = '',
        phone = '',
        website = '',
        street1 = '',
        street2 = '',
        city = '',
        state = '',
        zip = ''
    } = entityData;

    return (
        <Form>
            <Row form={true}>
                <Col xs='12'>
                    <FormGroup >
                        <Input
                            type='text'
                            name='name'
                            placeholder='Name'
                            disabled={disabled}
                            className={disabledClass}
                            value={name}
                            onChange={changeField.bind(null, alwaysTrue)}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row form={true}>
                <Col sm='6'>
                    <FormGroup >
                        <Input
                            type='text'
                            name='phone'
                            placeholder='Phone'
                            disabled={disabled}
                            className={disabledClass}
                            value={phone}
                            onChange={changeField.bind(null, alwaysTrue)}
                        />
                    </FormGroup>
                </Col>
                <Col sm='6'>
                    <FormGroup >
                        <Input
                            type='text'
                            name='website'
                            placeholder='Website'
                            disabled={disabled}
                            className={disabledClass}
                            value={website}
                            onChange={changeField.bind(null, alwaysTrue)}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row form={true}>
                <Col xs='12'>
                    <FormGroup >
                        <Input
                            type='text'
                            name='street1'
                            placeholder='Street 1'
                            disabled={disabled}
                            className={disabledClass}
                            value={street1}
                            onChange={changeField.bind(null, alwaysTrue)}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row form={true}>
                <Col xs='12'>
                    <FormGroup disabled={disabled} >
                        <Input
                            type='text'
                            name='street2'
                            placeholder='Street 2'
                            disabled={disabled}
                            className={disabledClass}
                            value={street2}
                            onChange={changeField.bind(null, alwaysTrue)}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row form={true}>
                <Col sm='6'>
                    <FormGroup disabled={disabled} >
                        <Input
                            type='text'
                            name='city'
                            placeholder='City'
                            disabled={disabled}
                            className={disabledClass}
                            value={city}
                            onChange={changeField.bind(null, alwaysTrue)}
                        />
                    </FormGroup>
                </Col>
                <Col xs='3' sm='2'>
                    <FormGroup disabled={disabled} >
                        <Input
                            type='text'
                            name='state'
                            placeholder='State'
                            disabled={disabled}
                            className={disabledClass}
                            value={state}
                            onChange={changeField.bind(null, alwaysTrue)}
                        />
                    </FormGroup>
                </Col>
                <Col xs='9' sm='4'>
                    <FormGroup disabled={disabled} >
                        <Input
                            type='text'
                            name='zip'
                            placeholder='Zip'
                            disabled={disabled}
                            className={disabledClass}
                            value={zip}
                            onChange={changeField.bind(null, alwaysTrue)}
                        />
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    );
};

export default props => (
    <Entity entityType='companies' entityData={props}>
        <CompanyForm />
    </Entity>
);
