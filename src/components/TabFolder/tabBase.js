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
            story : 'this is a very short story for a test'
        }
    }
    render() {
        return (
            <div className='tab-base-stack-container'>
                <TabBanner />
                <DropTab type='Story' order='1' isExpanded={false} content={<StoryContent story={this.state.story}/>}/>
                <DropTab type='Images' order='2' isExpanded={false} content={<ImageGallery />} />
                <DropTab type='Comments' order='3' isExpanded={false} content={<CommentContent />} />
                
            </div>
        )
    }
}

export default TabBase;