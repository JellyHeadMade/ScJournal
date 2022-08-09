import React, { useEffect, useState } from 'react';
import TabBannerTitle from './tabBannerTitle';
import DropTab from './dropTab';
import CreateStory from './SubTabFolder/createStory';
// import AddImages from './SubTabFolder/addImages';
// import TabButton from './SubTabFolder/tabButton';

import { connect } from 'react-redux';
import * as actions from '../../actions';

function CreateStoryTab(props) {
    const [userinfo, setUserinfo] = useState({tabTitle: 'Create a Post', pulledUserInfo: [], createbool: true})

    useEffect(() => {
        props.setUserInfo();
    }, [])

    return(
        <div className='create-post-tab-group'>
            <TabBannerTitle title={userinfo.tabTitle}/>
            <div className='tab-group-drop-container'>
                <div className='drop-container'>
                    {props.usersStuff.map((info) => {
                        return (<DropTab create={userinfo.createbool} type='Story' content={<CreateStory key={info.savedUserId+1} userImage={info.savedUserImage} userName={info.savedUserName} userId={info.savedUserId} />}/>)
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