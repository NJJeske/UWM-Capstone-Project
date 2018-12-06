import React from 'react';
import { ProfileButton } from '..';
import './styles.scss';

export default props => {
    return (
        <header>
            <ProfileButton auth={props.auth} />
            <h1>{props.title}</h1>
        </header>
    );
};
