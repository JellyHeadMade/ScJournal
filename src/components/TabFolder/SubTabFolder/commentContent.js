import React from 'react';

class CommentContent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className='comments'>
                <div className='comments-container'>
                    {this.props.comments.map((comments) => 
                        <div className='comment-wrapper'>
                            <div className='comment-userimage'>
                                <img className='comment-userimage__img' src={comments.userImage}></img>
                            </div>
                            <div className='comment-username'>
                                <a className='comment-username__name'>{comments.username}</a>
                            </div>
                            <div className='comment-post-comment'>
                                <a className='comment-post-comment__text'>{comments.comment}</a>
                            </div>
                        </div>
                    )}  
                </div>
            </div>
        )
    }
}
export default CommentContent;