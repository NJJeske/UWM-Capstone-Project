import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import TextArea from 'react-textarea-autosize';
import { createProject } from '../../redux/actions/projectActions';
import { EntityActionBar, ReferenceSelector } from '../';

import './index.scss';

// Local States
const [VIEW, EDIT, SAVING, ERROR] = ['VIEW', 'EDIT', 'SAVING', 'ERROR'];

class Project extends Component {
    constructor(props) {
        super(props);
        this.switchMode = this.switchMode.bind(this);
        this.changeField = this.changeField.bind(this);
        this.state = {
            mode: VIEW,
        };
    }

    switchMode(mode) {
        switch (mode) {
            case VIEW: {
                // Clear form data from local state
                this.setState({ mode, formData: null });
                break;
            }
            case EDIT: {
                // Load form data from props into local state
                const formData = pick(this.props, ['positionId', 'educationId', 'title', 'description', 'startDate', 'endDate']);
                this.setState({ mode, formData });
                break;
            }
            default: {
                this.setState({ mode });
            }
        }
    }

    changeField(event) {
        const { name, value } = event.target;
        const newFormData = {
            ...this.state.formData,
            [name]: value,
        };
        this.setState({ formData: newFormData });
    }

    render() {
        const { mode } = this.state;
        const {
            positionId,
            educationId,
            title,
            description,
            // TODO:
            // startDate,
            // endDate
        } = (mode === VIEW) ? this.props : this.state.formData;
        const disabled = (mode !== EDIT);
        const disabledClass = disabled ? 'disabled' : '';

        // Create mask for SAVING/ERROR modes
        let overlay = null;
        if (mode === SAVING) {
            overlay = (
                <div className='entityOverlay saving'>
                    <h3>Saving...</h3>
                </div>
            );
        } else if (mode === ERROR) {
            overlay = (
                <div className='entityOverlay error'>
                    <h3>Error</h3>
                    <p>{this.props.error.message}</p>
                    <Button onClick={() => this.switchMode(VIEW)}>Ok</Button>
                </div>
            );
        }

        // Set up button handlers for entity mode bar
        const entityActionHandlers = {
            editButton: this.switchMode.bind(this, EDIT),
            saveButton: this.switchMode.bind(this, SAVING),
            cancelButton: this.switchMode.bind(this, VIEW),
            deleteButton: this.switchMode.bind(this, SAVING)
        };

        return (
            <Container className='project card'>
                {overlay}
                <EntityActionBar mode={mode} handlers={entityActionHandlers} />
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
                                    value={title}
                                    onChange={this.changeField}
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
                                    value={description}
                                    onChange={this.changeField}
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
                                        selectedId={positionId}
                                        disabled={disabled}
                                        className={disabledClass}
                                        onChange={this.changeField}
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
                                        selectedId={educationId}
                                        disabled={disabled}
                                        className={disabledClass}
                                        onChange={this.changeField}
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
                                            placeholder="None"
                                            disabled={disabled}
                                            className={disabledClass}
                                            onChange={this.changeField}
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
                                            placeholder="iohastroihast"
                                            disabled={disabled}
                                            className={disabledClass}
                                            onChange={this.changeField}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    projects: state.projects,
});

const mapDispatchToProps = {
    createProject
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
