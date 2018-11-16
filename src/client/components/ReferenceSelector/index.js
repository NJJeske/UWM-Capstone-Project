import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { FormGroup, Input } from 'reactstrap';

/*
 *   Selector component to choose between options that exist for an entity-type in the store.
 *   For example, can be created with props: { entityType: 'companies' } to create select input
 *   to choose between companies in the store. If provided, selectedId will set the default selection.
 */
export const ReferenceSelector = props => {
    const {
        entityType,
        name,
        className,
        onChange,
        selectedId,
        disabled,
        ...entities
    } = props;

    // Each entity type has different properties used to identify it
    const makeOptionText = entity => {
        switch (entityType) {
            case 'contacts': return `${entity.name.first} ${entity.name.last}`;
            case 'projects':
            case 'positions': return entity.title;
            default: return entity.name;
        }
    };

    const options = (entities[entityType].list || []).map(entity => (
        <option key={entity.id} value={entity.id}>
            {makeOptionText(entity)}
        </option>
    ));

    return (
        <FormGroup>
            <Input
                type='select'
                name={name}
                className={className}
                onChange={onChange}
                value={selectedId || ''}
                disabled={disabled}
            >
                {options}
            </Input>
        </FormGroup>
    );
};

// Subscribe to only the following sections of the store
const mapStateToProps = state => pick(state.data, ['companies', 'contacts', 'education', 'positions']);

export default connect(mapStateToProps)(ReferenceSelector);
