import React from 'react';
import EntityPage from '../';
import { Position } from '../../../components';

const ExperiencePage = props => (
    <EntityPage
        title='Experience'
        entityType='positions'
        Component={Position}
    />
);

export default ExperiencePage;
