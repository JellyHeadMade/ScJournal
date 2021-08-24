import React from 'react';

import TabBanner from './tabBanner';
import DropTab from './dropTab';
import StoryContent from './SubTabFolder/storyContent';

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
                <DropTab type='Story' order='1' isExpanded={true} content={<StoryContent story={this.state.story}/>}/>
                
            </div>
        )
    }
}

export default TabBase;