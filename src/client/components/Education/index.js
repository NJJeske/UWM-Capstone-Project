import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Entity, Address } from '../';
import './styles.scss';

export const EducationForm = props => {
    const { changeField, entityData, disabled } = props;
    const disabledClass = disabled ? 'disabled' : '';
    const {
        name,
        degree,
        fieldOfStudy,
        startDate,
        endDate,
        address,
    } = entityData;

    return (
        <Form>
            <Row form={true}>
                <Col xs='12' lg='9'>
                    <FormGroup >
                        <Input
                            type='text'
                            name='title'
                            placeholder='Title'
                            disabled={disabled}
                            className={disabledClass}
                            value={title || ''}
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
                            name='description'
                            placeholder='Description'
                            disabled={disabled}
                            className={disabledClass}
                            value={description || ''}
                            onChange={changeField}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row form={true}>
                <Col lg='6'>
                    <Row form={true}>
                        <Col sm='2'>
                            <Label>Position</Label>
                        </Col>
                        <Col sm='10'>
                            <ReferenceSelector
                                entityType='positions'
                                name='positionId'
                                selectedId={positionId}
                                disabled={disabled}
                                className={disabledClass}
                                onChange={changeField}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col lg='6'>
                    <Row form={true}>
                        <Col sm='2'>
                            <Label>Education</Label>
                        </Col>
                        <Col sm='10'>
                            <ReferenceSelector
                                entityType='education'
                                name='educationId'
                                selectedId={educationId}
                                disabled={disabled}
                                className={disabledClass}
                                onChange={changeField}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row form={true}>
                <Col lg='6'>
                    <Row form={true}>
                        <Col sm='2'>
                            <Label>Start Date</Label>
                        </Col>
                        <Col sm='10'>
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
                        <Col sm='2'>
                            <Label>End Date</Label>
                        </Col>
                        <Col sm='10'>
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
    <Entity entityType='education' entityData={props}>
        <EducationForm />
    </Entity>
);
