import React from 'react';
import { Row, Col, Form, FormGroup, Input } from 'reactstrap';
import TextArea from 'react-textarea-autosize';
import { Entity } from '../';
import './styles.scss';

export const ContactForm = props => {
    const { changeField, entityData, disabled } = props;
    const disabledClass = disabled ? 'disabled' : '';
    const {
        firstName,
        lastName,
        position,
        phone,
        email,
        notes,
    } = entityData;

    return (
        <Form>
            <Row form={true}>
                <Col xs='6'>
                    <FormGroup >
                        <Input
                            type='text'
                            name='firstName'
                            placeholder='First Name'
                            disabled={disabled}
                            className={disabledClass}
                            value={firstName || ''}
                            onChange={changeField}
                        />
                    </FormGroup>
                </Col>
                <Col xs='6'>
                    <FormGroup >
                        <Input
                            type='text'
                            name='lastName'
                            placeholder='Last Name'
                            disabled={disabled}
                            className={disabledClass}
                            value={lastName || ''}
                            onChange={changeField}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row form={true}>
                <Col>
                    <FormGroup >
                        <Input
                            type='text'
                            name='position'
                            placeholder='Position'
                            disabled={disabled}
                            className={disabledClass}
                            value={position || ''}
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
                            name='email'
                            placeholder='Email'
                            disabled={disabled}
                            className={disabledClass}
                            value={email || ''}
                            onChange={changeField}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row form={true}>
                <Col xs='12'>
                    <FormGroup disabled={disabled} >
                        <Input
                            tag={TextArea}
                            name='notes'
                            placeholder='Notes'
                            disabled={disabled}
                            className={disabledClass}
                            value={notes || ''}
                            onChange={changeField}
                        />
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    );
};

export default props => (
    <Entity entityType='contacts' entityData={props}>
        <ContactForm />
    </Entity>
);
