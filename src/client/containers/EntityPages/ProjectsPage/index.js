import React from 'react';
import EntityPage from '../';
import { Project } from '../../../components';

const ProjectsPage = props => (
    <EntityPage
        title='Projects'
        entityType='projects'
        Component={Project}
    />
);

export default ProjectsPage;
