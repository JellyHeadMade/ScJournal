import React from 'react';
import BasicPage from './SubTabFolder/basicPage';

let aboutPageContent = 'This is a fan project that has no official support \
of cloud imperium games. The stories on this site also do not reflect actual \
lore of the game. This site is here to allow fans of the projects to have a \
common place to share their stories and experiences.';

function AboutContact(props) {
    return (
        <div className='about-contact-page-container'>
            <BasicPage title='About / Contact' content={aboutPageContent}/>
        </div>
    );
}

export default AboutContact;