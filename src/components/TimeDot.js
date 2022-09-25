import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import TabBase from './TabFolder/tabBase';

function TimeDot(props) {

    const [timelineState, setTimelinestate] = useState({userId: 2, viewerId: '2'});

    useEffect(() => {
        props.setPostDetails();
    }, [])

    return (
        <div className='line'>
                <div className='line__line'></div>
                <div className='time-line'>
                    {props.posts.map((post) => (
                        <div className='test'>
                            <TabBase userImage={post.user_image} 
                                postTitle={post.title} 
                                viewer_id={timelineState.viewerId}
                                user_id={post.user_id}
                                userName={post.username} 
                                postDate={post.post_date} 
                                shipTag={post.ship_tag_id} 
                                locationTag={post.location_tag_id}
                                activityTag={post.activity_tag_id}
                                typeTag={post.type_tag_id}
                                story={post.story}
                                images1={post.image1}
                                images2={post.image2}
                                images3={post.image3}
                                key={post.id}
                                postId={post.id}/>
                        </div>
                        ))}
                </div>
        </div>
    )
}

function mapStateToProps(state) {
    const { posts, setPostDetails } = state.postReducer;
    return {
        posts,
        setPostDetails
    }
  }
  
TimeDot = connect(mapStateToProps, actions)(TimeDot);

export default TimeDot;