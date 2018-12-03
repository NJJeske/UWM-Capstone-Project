import React from 'react';
import EntityPage from '../';
import { Contact } from '../../../components';

const ContactsPage = props => (
    <EntityPage
        title='Contacts'
        entityType='contacts'
        Component={Contact}
    />
);

export default ContactsPage;
