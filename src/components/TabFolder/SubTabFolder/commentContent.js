import React from 'react';

class CommentContent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className='comment-content'>
                {this.props.comments}
            </div>
        )
    }
}
export default CommentContent;