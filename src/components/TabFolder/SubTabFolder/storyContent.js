import React from 'react';

class StoryContent extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className='sub-tab-story-content'>
                <a className='sub-tab-story-content__text'>{this.props.story}</a>
            </div>
        )
    }
}

export default StoryContent;