import React from 'react';
import { Navbar } from 'reactstrap';
import './styles.scss';

export default props => {
    return (
        <header>
            <Navbar fixed='top'>
                <h1>{props.title}</h1>
            </Navbar>
        </header>
    );
};
