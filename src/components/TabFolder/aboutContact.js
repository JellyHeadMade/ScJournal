import React from 'react';
import BasicPage from './SubTabFolder/basicPage';
import AboutText from './SubTabFolder/aboutText';

function AboutContact(props) {
    return (
        <div className='about-contact-page-container'>
            <BasicPage title='About / Contact' content={<AboutText/>}/>
        </div>
    );
}

export default AboutContact;