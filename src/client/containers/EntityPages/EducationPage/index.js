import React from 'react';
import EntityPage from '../';
import { Education } from '../../../components';

const EducationPage = props => (
    <EntityPage
        title='Education'
        entityType='education'
        Component={Education}
    />
);

export default EducationPage;
