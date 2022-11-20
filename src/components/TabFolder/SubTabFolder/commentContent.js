import axios from 'axios';
import React, { useState } from 'react';

function CommentContent(props) {

    const [clicked, setClicked] = useState(false);

    const [commentData, setCommentData] = useState({
        post_id: props.postID,
        user_id: props.user_id,
        user_image: props.user_image,
        username: props.user_name,
        comment_date: 'replaceme',
        comment: ''
    });

    const addCommentOnClick = () => {
        console.log('add comment');
        if (clicked) {
            setClicked(false);
        } else {
            setClicked(true);
        }
    }

    const buildJSON = () => {
        const commentJSON = {
            "post_id": commentData.post_id ? commentData.post_id : null,
            "user_id": commentData.user_id ? commentData.user_id : null,
            "user_image": commentData.user_image ? commentData.user_image : null,
            "username": commentData.username ? commentData.username : null,
            "comment_date": commentData.comment_date ? commentData.comment_date : null,
            "comment": commentData.comment ? commentData.comment : null
        }
        return JSON.stringify(commentJSON);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        const finalCommentJSON = buildJSON();
        console.log(finalCommentJSON);
        axios({
            method: "post",
            url: "https://scjournalapiv2.herokuapp.com/makeacomment",
            data: finalCommentJSON,
            headers: { "Content-Type": "application/json" },
        })
            .then(function (response) {
                console.log(response);
                if (clicked) {
                    setClicked(false);
                } else {
                    setClicked(true);
                }
            })
            .catch(function (error) {
                console.log(error);
                alert('There was an error submitting your comment. Please try again.');
            });
    }

    return(
        <div className='comments'>
            {clicked !== true ? <div className='comment-batch'>
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
                <div className='add-comment-btn' onClick={addCommentOnClick}>Add Comment</div>
            </div> :
            <div className='comment-batch'>
                <form className='comment-form'>
                    <div className='comment-form-wrapper'>
                        <div className='comment-form-comment-title'>Comment</div>
                        <input 
                            className='comment-form-comment'
                            type='text' name='comment'
                            placeholder='Add a comment...'
                            value={commentData.comment}
                            onChange={(e) => setCommentData({...commentData, comment: e.target.value})}
                        />
                    </div>
                    <div className='add-comment-btn' onClick={handleSubmit} type='submit'>Submit Comment</div>
                </form>
            </div>}
        </div>
    )
}
export default CommentContent;