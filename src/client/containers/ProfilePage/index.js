import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProfileForm, Sidebar, Header } from '../../components';
import '../../sass/_profilepage.scss';

class ProfilePage extends Component {
    render() {
        return (
            <div className='profileBody'>
                <Header title={'Profile Settings'} />
                <Sidebar />
                <ProfileForm />
            </div>
        );
    }
}

export default connect()(ProfilePage);
