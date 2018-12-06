import React from 'react';
import { withRouter } from 'react-router';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

/*
 * Container for callback page that appears after a user logs in
 * and their profile is being loaded.
 */
export const CallbackPage = props => {
    props.auth.handleAuthentication().then(() => {
        props.history.push('/home');
    });

    return (
        <Container fluid={true} id='CALLBACK_PAGE'>
            <main>
                <FontAwesomeIcon icon='spinner' /> Loading user profile...
            </main>
        </Container>
    );
};

export default withRouter(CallbackPage);
