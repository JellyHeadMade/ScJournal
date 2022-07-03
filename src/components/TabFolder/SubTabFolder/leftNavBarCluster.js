import React, {useState} from 'react';

function LeftNavBarCluster(props) {

    const [hideShow, setHideShow] = useState({show: false})
    const [homeState, setHomeState] = useState({activeState: 'notActive', hiddenState: 'Hidden'})
    const [contactState, setContactState] = useState({activeState: 'notActive', hiddenState: 'Hidden'})
    const [createState, setCreateState] = useState({activeState: 'notActive', hiddenState: 'Hidden'})

    // const onClickArrow = (e) => {
    //     if ()
    // }

    return (
        <div className='left-nav-cluster-container'>
            <div className='logo-tab'>
                <img src='https://via.placeholder.com/40/ffffff.png'/>
            </div>
            <div className={`home-tab__${homeState.hiddenState}__${homeState.activeState}`}>Home</div>
            <div className='contact-tab'>About/Contact</div>
            <div className='create-post-tab'>Create Post</div>
            <div className='arrow-tab'>Arrow</div>
        </div>
    )
}

export default LeftNavBarCluster;