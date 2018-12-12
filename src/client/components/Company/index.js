import React from 'react';
import { Row, Col, Form, FormGroup, Input } from 'reactstrap';
import { Entity, Address } from '../';

// id: faker.random.uuid(),
//     name: faker.company.companyName(),
//     phone: faker.phone.phoneNumber('###-###-####'),
//     website: rand.maybe(faker.internet.url(), 0.4),
//     address: addressGenerator(faker, rand)

export const CompanyForm = props => {
    console.log(props);
    const { changeField, entityData, disabled } = props;
    const disabledClass = disabled ? 'disabled' : '';
    const {
        name,
        phone,
        website,
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
                            value={name || ''}
                            onChange={changeField}
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
                            value={phone || ''}
                            onChange={changeField}
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
                            value={website || ''}
                            onChange={changeField}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Address disabled={disabled} address={address} changeField={changeField} />
        </Form>
    );
};

export default props => {
    console.log(props);
    return (
    <Entity entityType='companies' entityData={props}>
        <CompanyForm />
    </Entity>
)};
