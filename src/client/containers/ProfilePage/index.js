import React from 'react';
import { ProfileForm, Sidebar, Header } from '../../components';
import '../../sass/_profilepage.scss';

export const ProfilePage = props => {
    return (
        <div className='profileBody'>
            <Header title={'Profile Settings'} />
            <Sidebar />
            <ProfileForm email={props.email} />
        </div>
    );
};

export default ProfilePage;
