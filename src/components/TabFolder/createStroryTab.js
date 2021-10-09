import React from 'react';
import TabBannerTitle from './tabBannerTitle';
import DropTab from './dropTab';
import CreateStory from './SubTabFolder/createStory';
import AddImages from './SubTabFolder/addImages';
import TabButton from './SubTabFolder/tabButton';

class CreateStoryTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabTitle : 'Create a Post'
        }


    }

    render() {
        return(
            <div className='create-post-tab-group'>
                <TabBannerTitle title={this.state.tabTitle}/>
                <div className='tab-group-drop-container'>
                    <div className='drop-container'>
                        <DropTab type='Story' content={<CreateStory />}/>
                        <DropTab type='Images' content={<AddImages />}/>
                        <div className='drop-container-spacer1'></div>
                        <TabButton title='Create Story'/>
                        <div className='drop-container-spacer2'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateStoryTab;