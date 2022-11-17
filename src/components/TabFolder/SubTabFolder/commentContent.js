import React, { useState } from 'react';

function CommentContent(props) {

    const [clicked, setClicked] = useState(false);

    const addCommentOnClick = () => {
        console.log('add comment');
        if (clicked) {
            setClicked(false);
        } else {
            setClicked(true);
        }
    }

    return(
        <div className='comments'>
            <div className='comment-batch'>
                {props.comments.length != 0 ? <div className='comments-container'>
                    {props.comments.map((comments) => 
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
                </div> :
                <div className='comments-container-empty'>No comments Here Yet!</div>}
                <div className='add-comment-btn' onClick={addCommentOnClick}>{clicked ? 'Submit Comment' : 'Add Comment' }</div>
            </div>
        </div>
    )
}
export default CommentContent;