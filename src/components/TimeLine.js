import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import TabBase from './TabFolder/tabBase';

class TimeLine extends React.Component {
    constructor(props){
        super(props);


    }

    componentDidMount() {
        this.props.setPostDetails();
        this.props.testPostDetails();
        console.log(this.props.testPostDetails().payload);
    }

    render() {
        return(
            <div className='time-line'>
                {this.props.posts.map((post) => (
                    <div className='test'>
                        {/* {console.log(i.postDate)} */}
                        <TabBase userImage={post.userImage} 
                            postTitle={post.postTitle} 
                            userName={post.userName} 
                            postDate={post.postDate} 
                            shipTag={post.shipTag} 
                            locationTag={post.locationTag}
                            activityTag={post.activityTag}
                            typeTag={post.typeTag}
                            story={post.story}
                            images1={post.image1}
                            images2={post.image2}
                            images3={post.image3}
                            comments={post.comments}
                            key={post._id}/>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { posts, setPostDetails, testPostDetails } = state.postReducer;
    return {
        posts,
        setPostDetails,
        testPostDetails
    }
  }
  
TimeLine = connect(mapStateToProps, actions)(TimeLine);

export default TimeLine;