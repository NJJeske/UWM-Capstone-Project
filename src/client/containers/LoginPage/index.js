import React from 'react';
import LoginButton from '../../components/LoginButton';
import '../../sass/_loginpage.scss';

export const LoginPage = props => {
    return (
        <main className='login-main'>
            <h1>Organize Your Job Hunt - Forever.</h1>
            <div className='loginButton'>
                <LoginButton auth={props.auth} />
            </div>
        </main>
    );
};

export default LoginPage;
