import React from 'react';

function StoryContent(props) {
    return(
        <div className='sub-tab-story-content'>
            <p className='sub-tab-story-content__text'>{props.story}</p>
        </div>
    )
}


export default StoryContent;