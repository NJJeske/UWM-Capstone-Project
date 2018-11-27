import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Entity, ReferenceSelector } from '../';
import './styles.scss';

export const PositionForm = props => {
    const { changeField, entityData, disabled } = props;
    const disabledClass = disabled ? 'disabled' : '';
    const {
        companyId,
        title,
        startPay,
        endPay,
        payPeriod,
        startDate,
        endDate
    } = entityData;

    return (
        <Form>
            <Row form={true}>
                <Col xs='2' className='formLabel'>
                    <Label>Company</Label>
                </Col>
                <Col xs='10'>
                    <ReferenceSelector
                        entityType='companies'
                        name='companyId'
                        selectedId={companyId}
                        disabled={disabled}
                        className={disabledClass}
                        onChange={changeField}
                    />
                </Col>
            </Row>
            <Row form={true}>
                <Col xs='12'>
                    <FormGroup >
                        <Input
                            type='text'
                            name='title'
                            placeholder='Position'
                            disabled={disabled}
                            className={disabledClass}
                            value={title || ''}
                            onChange={changeField}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row form={true}>
                <Col xs='4'>
                    <FormGroup >
                        <Input
                            type='select'
                            name='payPeriod'
                            placeholder='Pay Period'
                            disabled={disabled}
                            className={disabledClass}
                            value={payPeriod || 'Hourly'}
                            onChange={changeField}
                        >
                            <option value='Hourly'>Hourly</option>
                            <option value='Salary'>Salary</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col xs='4'>
                    <FormGroup >
                        <Input
                            type='text'
                            name='startPay'
                            placeholder='Start Pay'
                            disabled={disabled}
                            className={disabledClass}
                            value={startPay || ''}
                            onChange={changeField}
                        />
                    </FormGroup>
                </Col>
                <Col xs='4'>
                    <FormGroup >
                        <Input
                            type='text'
                            name='endPay'
                            placeholder='End Pay'
                            disabled={disabled}
                            className={disabledClass}
                            value={endPay || ''}
                            onChange={changeField}
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
                                    value={startDate || ''}
                                    onChange={changeField}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </Col>
                <Col lg='6'>
                    <Row form={true}>
                        <Col xs='2' className='formLabel'>
                            <Label>End</Label>
                        </Col>
                        <Col xs='10'>
                            <FormGroup>
                                <Input
                                    type="date"
                                    name="endDate"
                                    disabled={disabled}
                                    className={disabledClass}
                                    value={endDate || ''}
                                    onChange={changeField}
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
    <Entity entityType='positions' entityData={props}>
        <PositionForm />
    </Entity>
);
