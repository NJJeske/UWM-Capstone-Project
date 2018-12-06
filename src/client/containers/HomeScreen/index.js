import React from 'react';
import HomepageButtonCluster from '../../components/HomepageButtonCluster';
import ProfileButton from '../../components/ProfileButton';
import '../../sass/_homescreen.scss';

export const HomeScreen = props => {
    return (
        <main className='homescreen-main'>
            <div className='profileButton'>
                <ProfileButton auth={props.auth} />
            </div>
            <h1 className='title'>MyPortfolio</h1>
            <div className='buttonCluster'>
                <HomepageButtonCluster />
            </div>
        </main>
    );
};

export default HomeScreen;
