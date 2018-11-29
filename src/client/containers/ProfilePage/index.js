import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

class ProfilePage extends Component {
    render() {
        return <Container fluid={true} id='PROFILE_PAGE' />;
    }
}

export default connect()(ProfilePage);
