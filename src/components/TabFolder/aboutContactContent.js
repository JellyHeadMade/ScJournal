import React from 'react';
import AboutText from './SubTabFolder/aboutText';
import AboutContactForm from './SubTabFolder/aboutContactForm';

function AboutContactContent(props) {

    return (
        <div className='about-contact-content-container'>
            <AboutText/>
            <AboutContactForm/>
        </div>
    )
}

export default AboutContactContent;