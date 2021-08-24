import React from 'react';

class StoryContent extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className='sub-tab-story-content'>
                {this.props.story}
            </div>
        )
    }
}

export default StoryContent;