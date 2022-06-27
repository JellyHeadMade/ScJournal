import React from 'react';

function LeftNavBarCluster(props) {

    return (
        <div className='left-nav-cluster-container'>
            <div className='logo-tab'>
                <img src='https://via.placeholder.com/40/ffffff.png'/>
            </div>
            <div className='home-tab'>Home</div>
            <div className='contact-tab'>About/Contact</div>
            <div className='create-post-tab'>Create Post</div>
            <div className='arrow-tab'>Arrow</div>
        </div>
    )
}

export default LeftNavBarCluster;