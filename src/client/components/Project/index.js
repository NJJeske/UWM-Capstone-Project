import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { createProject } from '../../redux/actions/projectActions';
import { ReferenceSelector } from '../';
import { Card, Button, Form, FormGroup, Input, Alert } from 'reactstrap';

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
        const {
            positionId,
            educationId,
            title,
            description,
            // TODO:
            // startDate,
            // endDate
        } = (this.state.mode === VIEW) ? this.props : this.state.formData;
        const disabled = (this.state.mode !== EDIT);

        // Create mask for SAVING/ERROR modes
        let mask = null;
        if (this.state.mode === SAVING) {
            mask = (
                <div className='entityMask'>
                    <Alert color='info'>
                        <h4>Saving...</h4>
                    </Alert>
                </div>
            );
        } else if (this.state.mode === ERROR) {
            mask = (
                <div className='entityMask'>
                    <Alert color='danger'>
                        <h4>Error</h4>
                        <p>{this.props.error.message}</p>
                        <Button onClick={() => this.switchMode(VIEW)}>Ok</Button>
                    </Alert>
                </div>
            );
        }

        return (
            <Card className='project'>
                {mask}
                <Form>
                    <FormGroup disabled={disabled} >
                        <Input
                            type='text'
                            name='title'
                            placeholder='Title'
                            value={title}
                            onChange={this.changeField}
                        />
                    </FormGroup>
                    <FormGroup disabled={disabled} >
                        <Input
                            type='textArea'
                            name='description'
                            placeholder='Description'
                            value={description}
                            onChange={this.changeField}
                        />
                    </FormGroup>
                    <ReferenceSelector
                        disabled={disabled}
                        onChange={this.changeField}
                        entityType='positions'
                        selectedId={positionId}
                    />
                    <ReferenceSelector
                        disabled={disabled}
                        onChange={this.changeField}
                        entityType='education'
                        selectedId={educationId}
                    />
                </Form>
            </Card>
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
