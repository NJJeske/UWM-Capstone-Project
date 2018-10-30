import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEntity } from '../../redux/actions/entityActions';
import { pick } from 'lodash';
import { Container, Row, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

// Local States
const [VIEW, EDIT, SAVING, ERROR] = ['VIEW', 'EDIT', 'SAVING', 'ERROR'];

class Entity extends Component {
    constructor(props) {
        super(props);
        this.changeField = this.changeField.bind(this);
        this.state = { mode: VIEW };
    }

    edit() {
        // Load form data from props into local state
        const formData = pick(this.props, this.props.formFields);
        this.setState({ mode: EDIT, formData });
    }

    save() {
        this.setState({ mode: SAVING });
    }

    cancel() {
        // Clear form data from local state
        this.setState({ mode: VIEW, formData: null });
    }

    delete() {
        this.setState({ mode: SAVING });
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
        const { entityType } = this.props;
        const { formData } = mode === VIEW ? this.props : this.state;

        // Set up overlay for SAVING/ERROR modes
        let overlay = null;
        if (mode === SAVING) {
            overlay = (
                <div className={`overlay saving ${entityType}`}>
                    <h3>Saving...</h3>
                </div>
            );
        } else if (mode === ERROR) {
            overlay = (
                <div className={`overlay error ${entityType}`}>
                    <h3>Error</h3>
                    <p>{this.props.error.message}</p>
                    <Button onClick={this.switchMode.bind(this, VIEW)}>Ok</Button>
                </div>
            );
        }

        // Set up action bar based on mode
        const actionBar = mode === 'VIEW' ? (
            <React.Fragment>
                <Button onClick={this.edit.bind(this)} >
                    <FontAwesomeIcon icon='edit' />
                </Button>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <Button onClick={this.delete.bind(this)}>
                    <FontAwesomeIcon icon='trash-alt' />
                </Button>
                <Button onClick={this.cancel.bind(this)}>
                    <FontAwesomeIcon icon='ban' />
                </Button>
                <Button onClick={this.save.bind(this)}>
                    <FontAwesomeIcon icon='check' />
                </Button>
            </React.Fragment>
        );

        // Clone form child (passed through props) to pass props to it
        const form = React.cloneElement(this.props.children, {
            changeField: this.changeField,
            formData,
            disabled: mode !== EDIT,
        });

        return (
            <Container className={`card entity ${entityType}`}>
                {overlay}
                <Row className='actionBar'>
                    {actionBar}
                </Row>
                {form}
            </Container>
        );
    }
}

const mapDispatchToProps = {
    createEntity
};

export default connect(null, mapDispatchToProps)(Entity);;
