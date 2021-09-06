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
    }

    render() {
        const freshPosts = this.props.posts;
        {console.log(this.props.posts)}
        return(
            <div className='time-line'>
                {freshPosts.map((i) => (
                    <div className='test'>
                        {console.log(i.postDate)}
                        <TabBase userImage={i.userImage} 
                            postTitle={i.postTitle} 
                            userName={i.userName} 
                            postDate={i.postDate} 
                            shipTag={i.shipTag} 
                            locationTag={i.locationTag}
                            activityTag={i.activityTag}
                            typeTag={i.typeTag}
                            story={i.story}
                            images={i.images}
                            comments={i.comments}/>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { posts, setPostDetails } = state.postReducer;
    return {
        posts,
        setPostDetails
    }
  }
  
TimeLine = connect(mapStateToProps, actions)(TimeLine);

export default TimeLine;