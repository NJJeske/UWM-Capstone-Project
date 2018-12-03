import React, { Component } from 'react';
import { ProfileForm, Sidebar, Header } from '../../components';
import '../../sass/_profilepage.scss';

export class ProfilePage extends Component {
    render() {
        return (
            <div className='profileBody'>
                <Header title={'Profile Settings'} />
                <Sidebar />
                <ProfileForm email={this.props.email} />
            </div>
        );
    }
}

export default ProfilePage;
