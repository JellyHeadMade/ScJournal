import React from 'react';

import TabBanner from './tabBanner';
import DropTab from './dropTab';
import StoryContent from './SubTabFolder/storyContent';
import ImageGallery from './SubTabFolder/imageGallery';
import CommentContent from './SubTabFolder/commentContent';

class TabBase extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            story : 'this is a very short story for a test',
            isExpanded : false
        }
    }

    render() {
        return (
            <div className='tab-base-stack-container'>
                <TabBanner />
                <DropTab type='Story' order='1' content={<StoryContent story={this.state.story} onClick={this.onClick}/>}/>
                <DropTab type='Images' order='2' content={<ImageGallery onClick={this.onClick}/>} />
                <DropTab type='Comments' order='3' content={<CommentContent onClick={this.onClick}/>} />
                
            </div>
        )
    }
}

export default TabBase;