import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Entity } from '../';
import { alwaysTrue, notEmpty } from '../validators';

const validate = {
    name: notEmpty.bind(null), // title should not be empty
    degree: notEmpty.bind(null), // degree should not be empty
    fieldOfStudy: notEmpty.bind(null)
};

export const EducationForm = props => {
    const { changeField, entityData, disabled, isLocal } = props;
    let { invalidFields } = props;
    const disabledClass = disabled ? 'disabled' : '';
    const {
        name = '',
        degree = '',
        fieldOfStudy = '',
        startDate = '',
        endDate = '',
        street1 = '',
        street2 = '',
        city = '',
        state = '',
        zip = ''
    } = entityData;

    if (isLocal) {
        invalidFields.name = !validate.name(name);
        invalidFields.degree = !validate.degree(degree);
        invalidFields.fieldOfStudy = !validate.fieldOfStudy(fieldOfStudy);
    }

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
                            valid={!invalidFields.name}
                            invalid={invalidFields.name}
                            onChange={changeField.bind(null, validate.name)}
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
                            value={degree}
                            valid={!invalidFields.degree}
                            invalid={invalidFields.degree}
                            onChange={changeField.bind(null, validate.degree)}
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
                            value={fieldOfStudy}
                            valid={!invalidFields.fieldOfStudy}
                            invalid={invalidFields.fieldOfStudy}
                            onChange={changeField.bind(null, validate.fieldOfStudy)}
                        />
                    </FormGroup>
                </Col>
            </Row>
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
                                    value={startDate}
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
                                    value={endDate}
                                    onChange={changeField.bind(null, alwaysTrue)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
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
    <Entity entityType='education' entityData={props}>
        <EducationForm />
    </Entity>
);
