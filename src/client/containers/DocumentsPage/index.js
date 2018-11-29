import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

class DocumentsPage extends Component {
    render() {
        return <Container fluid={true} id='DOCUMENTS_PAGE' />;
    }
}

export default connect()(DocumentsPage);
