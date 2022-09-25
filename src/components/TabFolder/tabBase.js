import React, { useEffect, useState } from 'react';

import TabBanner from './tabBanner';
import DropTab from './dropTab';
import StoryContent from './SubTabFolder/storyContent';
import ImageGallery from './SubTabFolder/imageGallery';
import CommentContent from './SubTabFolder/commentContent';
import axios from 'axios';

function TabBase(props) {

    const [postComments, setPostComments] = useState([]);

    useEffect(() => {
        if (props.postId) {
            axios.get(`https://scjournalapiv2.herokuapp.com/getpostcomments/${props.postId}`)
                .then((response) => {
                    const data = response.data;
                    console.log(data);
                    setPostComments(data);
                }).catch((error) => {
                    console.log(error);
                });
        }
    }, [])

    return (
        <div className='tab-group-container'>
            <TabBanner postId={props.postId} postTitle={props.postTitle} viewer_id={props.viewer_id} user_id={props.user_id} userName={props.userName} postDate={props.postDate} userImage={props.userImage} shipTag={props.shipTag} locationTag={props.locationTag} activityTag={props.activityTag} typeTag={props.typeTag}/>
            <div className='tab-group-drop-container'>
                <div className='drop-container'>
                    <DropTab type='Story' order='1' content={<StoryContent story={props.story} />}/>
                    <DropTab type='Images' order='2' content={<ImageGallery image1={props.images1} image2={props.images2} image3={props.images3}/>} />
                    <div className='drop-container-spacer1'></div>
                    <DropTab type='Comments' order='3' content={<CommentContent comments={postComments}/>} />
                    <div className='drop-container-spacer2'></div>
                </div>
            </div>
        
        </div> 
    )
}

export default TabBase;