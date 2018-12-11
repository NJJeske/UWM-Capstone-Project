import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Entity, Address } from '../';
import { alwaysTrue } from '../validators';

export const EducationForm = props => {
    const { changeField, entityData, disabled } = props;
    const disabledClass = disabled ? 'disabled' : '';
    const {
        name,
        degree,
        fieldOfStudy,
        startDate,
        endDate,
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
                            name='degree'
                            placeholder='Degree'
                            disabled={disabled}
                            className={disabledClass}
                            value={degree || ''}
                            onChange={changeField.bind(null, alwaysTrue)}
                        />
                    </FormGroup>
                </Col>
                <Col sm='6'>
                    <FormGroup >
                        <Input
                            type='text'
                            name='fieldOfStudy'
                            placeholder='Field of Study'
                            disabled={disabled}
                            className={disabledClass}
                            value={fieldOfStudy || ''}
                            onChange={changeField.bind(null, alwaysTrue)}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Address disabled={disabled} address={address} changeField={changeField} />
            <Row form={true}>
                <Col lg='6'>
                    <Row form={true}>
                        <Col xs='2'className='formLabel'>
                            <Label>Began</Label>
                        </Col>
                        <Col xs='10'>
                            <FormGroup>
                                <Input
                                    type="date"
                                    name="startDate"
                                    disabled={disabled}
                                    className={disabledClass}
                                    value={startDate || ''}
                                    onChange={changeField.bind(null, alwaysTrue)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </Col>
                <Col lg='6'>
                    <Row form={true}>
                        <Col xs='2' className='formLabel'>
                            <Label>Ended</Label>
                        </Col>
                        <Col xs='10'>
                            <FormGroup>
                                <Input
                                    type="date"
                                    name="endDate"
                                    disabled={disabled}
                                    className={disabledClass}
                                    value={endDate || ''}
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

export default props => (
    <Entity entityType='education' entityData={props}>
        <EducationForm />
    </Entity>
);
