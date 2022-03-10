import React from 'react';
import TabBannerTitle from './tabBannerTitle';
import DropTab from './dropTab';
import CreateStory from './SubTabFolder/createStory';
import AddImages from './SubTabFolder/addImages';
import TabButton from './SubTabFolder/tabButton';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class CreateStoryTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabTitle : 'Create a Post',
            pulledUserInfo : [],
            createbool : true
        }
    }

    componentDidMount() {
        this.props.setUserInfo();
    }

    render() {
        return(
            <div className='create-post-tab-group'>
                <TabBannerTitle title={this.state.tabTitle}/>
                <div className='tab-group-drop-container'>
                    <div className='drop-container'>
                        {this.props.usersStuff.map((info) => {
                            return (<DropTab create={this.state.createbool} type='Story' content={<CreateStory key={info.savedUserId+1} userImage={info.savedUserImage} userName={info.savedUserName} userId={info.savedUserId} />}/>)
                        })}
                    </div>
                </div>
            </div>
        )
    }
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