import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { createEntity, updateEntity, deleteEntity, clearErrorEntity } from '../../redux/actions/entityActions';
import { Container, Row, Button } from 'reactstrap';

import './styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faCheck, faBan, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faEdit, faCheck, faBan, faTrashAlt);

// Local States
const [VIEW, EDIT, SAVING, ERROR] = ['VIEW', 'EDIT', 'SAVING', 'ERROR'];

/**
 * This is a wrapper class for the forms of each entity type (contacts, projects, companies, etc).
 * It is created and configured by a parent entity component (e.g. Project), and serves primarily as a controller.
 * It will call Entity action creators in response to its action bar, and pass along the entity type
 * and form data as needed.
 *
 * @class Entity
 * @extends Component
 */
export class Entity extends Component {
    constructor(props) {
        super(props);
        this.changeField = this.changeField.bind(this);
        this.state = { mode: VIEW };
    }

    edit() {
        // Load entity data from props into local state
        const { entityData } = this.props;
        this.setState({ mode: EDIT, entityData });
    }

    cancel() {
        // Clear form data from local state
        this.setState({ mode: VIEW, entityData: null });
    }

    save() {
        const { updateEntity, entityType, entityData } = this.props;
        const updatedEntityData = this.state.entityData;
        // Only make update call if something changed.
        if (!isEqual(entityData, updatedEntityData)) {
            this.setState({ mode: SAVING });
            updateEntity(entityType, updatedEntityData);
        } else {
            this.cancel();
        }
    }

    remove() {
        const { deleteEntity, entityType } = this.props;
        const entityId = this.state.entityData.id;
        this.setState({ mode: SAVING });
        deleteEntity(entityType, entityId);
    }

    acknowledgeError() {
        const { clearErrorEntity, entityType } = this.props;
        const entityId = this.state.entityData.id;
        this.setState({ mode: VIEW, entityData: null, error: null });
        clearErrorEntity(entityType, entityId);
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        // If an error exists in store but not locally then it's new -> enter error state
        if (nextProps.error && !nextState.error) {
            return { mode: ERROR, error: nextProps.error };
        }
        // If SAVING and store matches local entity data then save has completed or nothing changed anyway -> enter view state
        if (nextState.mode === SAVING && isEqual(nextProps.entityData, nextState.entityData)) {
            return { mode: VIEW, entityData: null };
        }
        return null;
    }

    changeField(event) {
        const { name, value } = event.target;
        const newEntityData = {
            ...this.state.entityData,
            [name]: value,
        };
        this.setState({ entityData: newEntityData });
    }

    render() {
        const { mode, error } = this.state;
        const { entityType } = this.props;
        const { entityData } = mode === VIEW ? this.props : this.state;

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
                    <p>{error.message}</p>
                    <Button onClick={this.acknowledgeError.bind(this)}>Ok</Button>
                </div>
            );
        }

        // Set up action bar based on mode
        const actionBar = mode === 'VIEW' ? (
            <React.Fragment>
                <Button className='edit' onClick={this.edit.bind(this)} >
                    <FontAwesomeIcon icon='edit' />
                </Button>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <Button className='delete' onClick={this.remove.bind(this)}>
                    <FontAwesomeIcon icon='trash-alt' />
                </Button>
                <Button className='cancel' onClick={this.cancel.bind(this)}>
                    <FontAwesomeIcon icon='ban' />
                </Button>
                <Button className='save' onClick={this.save.bind(this)}>
                    <FontAwesomeIcon icon='check' />
                </Button>
            </React.Fragment>
        );

        // Clone form child (passed through props) to pass additional props to it
        const form = React.cloneElement(this.props.children, {
            changeField: this.changeField, // It can update entity's state when a field changes
            entityData, // Its fields hold these values
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

Entity.propTypes = {
    entityType: PropTypes.string.isRequired, // Type of entity
    entityData: PropTypes.object.isRequired, // Entity data according to Redux store
    children: PropTypes.object.isRequired, // Should be single child: the entity's form

    // Redux Action Creators
    createEntity: PropTypes.func.isRequired,
    updateEntity: PropTypes.func.isRequired,
    deleteEntity: PropTypes.func.isRequired,
    clearErrorEntity: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    createEntity,
    updateEntity,
    deleteEntity,
    clearErrorEntity
};

export default connect(null, mapDispatchToProps)(Entity);;
