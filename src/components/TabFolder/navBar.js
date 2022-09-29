import React, { useEffect } from 'react';
import LeftNavBarCluster from './SubTabFolder/leftNavBarCluster';
import RightNavBarCluster from './SubTabFolder/rightNavBarCluster';

function NavBar(props){
    return(
        <div className='main-navbar-container'>
            <div className='left-navbar-container'>
                <LeftNavBarCluster/>
            </div>
            <div className='right-navbar-container'>
                <RightNavBarCluster/>
            </div>
        </div>
    )
}

export default NavBar;