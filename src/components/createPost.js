import React from 'react';
import CreateStoryTab from './TabFolder/createStroryTab';

class CreatePost extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='create-post-page'>
                <CreateStoryTab />                
            </div>
        )
    }
}

export default CreatePost;