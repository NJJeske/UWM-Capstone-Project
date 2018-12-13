import React from 'react';
import { Row, Col, Form, FormGroup, Input } from 'reactstrap';
import { Entity, Address } from '../';
import { alwaysTrue } from '../validators';

export const CompanyForm = props => {
    const { changeField, entityData, disabled } = props;
    const disabledClass = disabled ? 'disabled' : '';
    const {
        name = '',
        phone = '',
        website = '',
        ...address
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
            <Address disabled={disabled} address={address} changeField={changeField} />
        </Form>
    );
};

export const CompanyView = ({ entityData }) => {
    return (
        <div className='companyView'>
            <p>{JSON.stringify(entityData, null, 2)}</p>
        </div>
    );
};

export default props => (
    <Entity entityType='companies' entityData={props}>
        <CompanyForm />
    </Entity>
);
