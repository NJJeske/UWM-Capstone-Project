import React from 'react';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../sass/_callbackpage.scss';

/*
 * Container for callback page that appears after a user logs in
 * and their profile is being loaded.
 */
export const CallbackPage = props => {
    props.auth.handleAuthentication().then(() => {
        props.history.push('/home');
    });

    return (
        <div className='callbackPageDiv'>
            <FontAwesomeIcon icon='spinner' /> Loading user profile...
        </div>
    );
};

export default withRouter(CallbackPage);
