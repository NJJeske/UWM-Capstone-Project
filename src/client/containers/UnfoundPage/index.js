import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../sass/_unfoundpage.scss';

/*
 * Container for page that is displayed when user tries to navigate
 * to a page/link that does not exist.
 */
export const UnfoundPage = props => {
    return (
        <div className="unfoundPageDiv" >
            <span className="error-icon">
                <FontAwesomeIcon icon="exclamation-circle" />
            </span>
            <span className="fourofour-text"> 404 Not Found.</span>
            <br />
            <span className="notfound-text">
                The requested URL was not found on this server.
            </span>
        </div >
    );
};

export default UnfoundPage;
