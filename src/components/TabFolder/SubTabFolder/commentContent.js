import React from 'react';

class CommentContent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className='comment-content'>
                <a className='comment-content__text'>{this.props.comments}</a>
            </div>
        )
    }
}
export default CommentContent;