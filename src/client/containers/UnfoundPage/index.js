import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

/*
 * Container for page that is displayed when user tries to navigate
 * to a page/link that does not exist.
 */
export class UnfoundPage extends Component {
    render() {
        return (
            <Container fluid={true} id="UNFOUND_PAGE">
                <span className="error-icon">
                    <FontAwesomeIcon icon="exclamation-circle" />
                </span>
                <span className="fourofour-text"> 404 Not Found.</span>
                <br />
                <span className="notfound-text">
          The requested URL was not found on this server.
                </span>
            </Container>
        );
    }
}

export default UnfoundPage;
