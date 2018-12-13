import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Entity } from '../';
import { alwaysTrue } from '../validators';

export const CertificationForm = props => {
    const { changeField, entityData, disabled } = props;
    const disabledClass = disabled ? 'disabled' : '';
    const {
        name = '',
        authority = '',
        licenseNumber = '',
        website = '',
        acquireDate = '',
        expireDate = '',
    } = entityData;

    return (
        <Form>
            <Row form={true}>
                <Col xs='12' lg='9'>
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
                <Col xs='12' lg='9'>
                    <FormGroup >
                        <Input
                            type='text'
                            name='authority'
                            placeholder='Authority'
                            disabled={disabled}
                            className={disabledClass}
                            value={authority}
                            onChange={changeField.bind(null, alwaysTrue)}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row form={true}>
                <Col xs='12' lg='9'>
                    <FormGroup >
                        <Input
                            type='text'
                            name='licenseNumber'
                            placeholder='License #'
                            disabled={disabled}
                            className={disabledClass}
                            value={licenseNumber}
                            onChange={changeField.bind(null, alwaysTrue)}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row form={true}>
                <Col xs='12' lg='9'>
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
                <Col lg='6'>
                    <Row form={true}>
                        <Col xs='2' className='formLabel'>
                            <Label>Since</Label>
                        </Col>
                        <Col xs='10'>
                            <FormGroup>
                                <Input
                                    type="date"
                                    name="acquireDate"
                                    disabled={disabled}
                                    className={disabledClass}
                                    value={acquireDate}
                                    onChange={changeField.bind(null, alwaysTrue)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </Col>
                <Col lg='6'>
                    <Row form={true}>
                        <Col xs='2' className='formLabel'>
                            <Label>Expire</Label>
                        </Col>
                        <Col xs='10'>
                            <FormGroup>
                                <Input
                                    type="date"
                                    name="expireDate"
                                    disabled={disabled}
                                    className={disabledClass}
                                    value={expireDate}
                                    onChange={changeField.bind(null, alwaysTrue)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>
    );
};

export const CertificationView = ({ entityData }) => {
    const {
        name = '',
        authority = '',
        licenseNumber = '',
        website = '',
        acquireDate = '',
        expireDate = '',
    } = entityData;
    return (
        <div className='certificationView'>
            <h1>Certification{name}</h1>
            <h2>Authority: </h2>
            <p></p>
        </div>
    );
};

export default props => (
    <Entity entityType='certifications' entityData={props}>
        <CertificationForm />
    </Entity>
);
