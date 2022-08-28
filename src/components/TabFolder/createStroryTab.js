import React, { useEffect, useState } from 'react';
import CreateStoryV2 from './SubTabFolder/createStoryV2';
import BasicPage from './SubTabFolder/basicPage';

import { connect } from 'react-redux';
import * as actions from '../../actions';

function CreateStoryTab(props) {
    const [userinfo, setUserinfo] = useState({tabTitle: 'Create a Post', pulledUserInfo: [], createbool: true})

    useEffect(() => {
        props.setUserInfo();
    }, [])

    return(
        <div className='create-post-tab-group'>
            <div className='tab-group-drop-container'>
                <div className='drop-container'>
                    {props.usersStuff.map((info) => {
                        return (<BasicPage title={userinfo.tabTitle} content={<CreateStoryV2 key={info.savedUserId+1} userImage={info.savedUserImage} userName={info.savedUserName} userId={info.savedUserId} />}/>)
                    })}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    const { usersStuff, setUserInfo } = state.userReducer;
    return {
        usersStuff,
        setUserInfo
    }
}

CreateStoryTab = connect(mapStateToProps, actions)(CreateStoryTab);

export default CreateStoryTab;