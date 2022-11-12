import React from 'react';

function CommentContent(props) {

    return(
        <div className='comments'>
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
        </div>
    )
}
export default CommentContent;