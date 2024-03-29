import axios from 'axios';
import React, { useState, useEffect } from 'react';

function CommentContent(props) {

    const [postComments, setPostComments] = useState([]);

    const [clicked, setClicked] = useState(false);

    const [commentData, setCommentData] = useState({
        post_id: props.postID,
        user_id: props.user_id,
        user_image: props.user_image,
        username: props.user_name,
        comment_date: 'replaceme',
        comment: ''
    });

    const setComments = () => {
        axios.get(`https://scjournalapiv2.herokuapp.com/getpostcomments/${props.postID}`)
                .then((response) => {
                    const data = response.data;
                    console.log(data);
                    setPostComments(data);
                }).catch((error) => {
                    console.log(error);
                });
    }

    useEffect(() => {
        if (props.postID) {
            console.log('useeffect was hit');
            setComments();
        }
    }, [])

    const addCommentOnClick = () => {
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
                setComments();
                if (clicked) {
                    setClicked(false);
                } else {
                    setClicked(true);
                }
                setCommentData({...commentData, comment: ''});
            })
            .catch(function (error) {
                console.log(error);
                alert('There was an error submitting your comment. Please try again.');
            });
    }

    const deleteComment = (commentID) => {
        axios({
            method: "delete",
            url: `https://scjournalapiv2.herokuapp.com/deletecomment/${commentID}`,
        })
            .then(function (response) {
                setComments();
                console.log(response);
                console.log('comment deleted');
            })
            .catch(function (error) {
                console.log(error);
                alert('There was an error deleting your comment. Please try again.');
            });
    }

    return(
        <div className='comments'>
            {clicked !== true ? <div className='comment-batch'>
                {postComments.length !== 0 ? <div className='comments-container'>
                    {postComments.map((comment) => 
                        <div className='comment-wrapper'>
                            {props.viewer_id == comment.user_id ? <div className='comment-delete-btn' onClick={() => deleteComment(comment.id)}>X</div> : null}
                            <div className='comment-userimage'>
                                <img className='comment-userimage__img' src={comment.user_image}></img>
                            </div>
                            <div className='comment-username'>
                                <a className='comment-username__name'>{comment.username}</a>
                            </div>
                            <div className='comment-post-comment'>
                                <a className='comment-post-comment__text'>{comment.comment}</a>
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
                        <div className='comment-exit-btn' onClick={addCommentOnClick}>Close</div>
                        <input 
                            className='comment-form-comment'
                            type='text' name='comment'
                            placeholder='Add a comment...'
                            maxLength={240}
                            value={commentData.comment}
                            onChange={(e) => setCommentData({...commentData, comment: e.target.value})}
                        />
                        <div className='comment-character-count'>{`${commentData.comment.length}/240`}</div>
                    </div>
                </form>
                <div className='add-comment-btn' onClick={handleSubmit}>Submit Comment</div>
            </div>}
        </div>
    )
}
export default React.memo(CommentContent);