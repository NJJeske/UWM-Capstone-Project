import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProfileForm, Sidebar } from '../../components';

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <ProfileForm />
            </div>
        );
    }
}

export default connect()(ProfilePage);
