import React from 'react';
import EntityPage from '../';
import { Certification } from '../../../components';

const CertificationsPage = props => (
    <EntityPage
        title='Certifications'
        entityType='certifications'
        Component={Certification}
    />
);

export default CertificationsPage;
