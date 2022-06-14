import React from 'react';
import NavBar from './navBar';
import TimeLine from '../timeLine';

function PageDefault(props) {

    return (
        <div className='PageDefault'>
            <NavBar/>
            <TimeLine/>
        </div>
    )
}

export default PageDefault;