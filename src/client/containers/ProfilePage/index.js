import React from 'react';
import { Container } from 'reactstrap';
import { ProfileForm, Sidebar, Header } from '../../components';
import './styles.scss';

export const ProfilePage = props => {
    return (
        <Container fluid={true} id='PROFILE_PAGE'>
            <Header title={'Profile Settings'} />
            <Sidebar />
            <ProfileForm email={props.email} />
        </Container>
    );
};

export default ProfilePage;
