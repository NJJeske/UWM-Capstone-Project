import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { createEntity, updateEntity, deleteEntity, deleteLocalEntity, clearErrorEntity } from '../../redux/actions/entityActions';
import { Container, Row, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

// Local States
const [VIEW, EDIT, CREATING, SAVING, DELETING, ERROR] = ['VIEW', 'EDIT', 'CREATING', 'SAVING', 'DELETING', 'ERROR'];

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
        if (props.entityData._local) {
            this.state = { mode: CREATING, entityData: props.entityData };
        } else {
            this.state = { mode: VIEW };
        }
    }

    edit() {
        // Load entity data from props into local state
        const { entityData } = this.props;
        this.setState({ mode: EDIT, entityData });
    }

    cancel() {
        if (this.state.mode === CREATING) {
            const { deleteLocalEntity, entityType, entityData } = this.props;
            deleteLocalEntity(entityType, entityData.id);
            this.setState({ mode: DELETING, entityData: null });
        } else {
            // Clear form data from local state
            this.setState({ mode: VIEW, entityData: null });
        }
    }

    save() {
        const { createEntity, updateEntity, entityType, entityData } = this.props;
        const newEntityData = this.state.entityData;
        if (this.state.mode === CREATING) {
            this.setState({ mode: SAVING });
            createEntity(entityType, newEntityData);
        } else if (!isEqual(entityData, newEntityData)) {
            // Don't make save call if nothing changed
            this.setState({ mode: SAVING });
            updateEntity(entityType, newEntityData);
        } else {
            this.cancel();
        }
    }

    remove() {
        const { deleteEntity, entityType } = this.props;
        const entityId = this.state.entityData.id;
        this.setState({ mode: DELETING });
        deleteEntity(entityType, entityId);
    }

    acknowledgeError() {
        const { clearErrorEntity, entityType } = this.props;
        const entityId = this.state.entityData.id;
        this.setState({ mode: VIEW, entityData: null, error: null });
        clearErrorEntity(entityType, entityId);
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        if (nextState.mode === SAVING || nextState.mode === DELETING) {
            // If an error exists in store but not locally then it's new -> enter error state
            if (nextProps.entityData.error && !nextState.error) {
                return { mode: ERROR, error: nextProps.entityData.error };
            }
            // If SAVING and store matches local entity data then save has completed or nothing changed anyway -> enter view state
            if (nextState.mode === SAVING && isEqual(nextProps.entityData, nextState.entityData)) {
                return { mode: VIEW, entityData: null };
            }
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
        if (mode === SAVING || mode === DELETING) {
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
                {
                    // Only show delete button in EDIT mode
                    mode === 'EDIT' ? (
                        <Button className='delete' onClick={this.remove.bind(this)}>
                            <FontAwesomeIcon icon='trash-alt' />
                        </Button>
                    ) : null
                }
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
            disabled: ![CREATING, EDIT].includes(mode),
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
    deleteLocalEntity: PropTypes.func.isRequired,
    clearErrorEntity: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    createEntity,
    updateEntity,
    deleteEntity,
    deleteLocalEntity,
    clearErrorEntity
};

export default connect(null, mapDispatchToProps)(Entity);;
