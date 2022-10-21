import React from 'react';
import BasicPage from './SubTabFolder/basicPage';
import AboutContactContent from './aboutContactContent';

function AboutContact(props) {
    return (
        <div className='about-contact-page-container'>
            <BasicPage title='About / Contact' content={<AboutContactContent/>}/>
        </div>
    );
}

export default AboutContact;