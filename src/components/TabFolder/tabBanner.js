// import { faRulerHorizontal } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function TabBanner(props) {

    const Editcheck = (viewer, user) => {
        if (viewer === user) {
            return true;
        } else {
            return false;
        }
    }

    const handleEditRedirect = () => {
        console.log(props.postId)
    }

    return (
        <div className='tab-base-stack-banner'>
                    <div className='timedotdot'>
                    <img src='https://via.placeholder.com/24/ffffff.png' className='timedotdot__img'/>
                    </div>
                    <div className='tab-base-stack-banner__bg'></div>
                    {Editcheck(props.user_id , props.viewer_id) ? 
                        <div onClick={handleEditRedirect} className='tab-base-stack-banner__edit'>
                            <a>Edit</a>
                        </div> : null}
                        {console.log(props.viewer_id)}
                    <div className='tab-base-stack-banner__type'>
                        <a>{props.typeTag}</a>
                    </div>
                    <div className='tab-base-stack-banner__activity'>
                        <a>{props.activityTag}</a>
                    </div>
                    <div className='tab-base-stack-banner__bgTagOne'></div>
                    <div className='tab-base-stack-banner__location'>
                        <a>{props.locationTag}</a>
                    </div>
                    <div className='tab-base-stack-banner__bgTagTwo'></div>
                    <div className='tab-base-stack-banner__ship'>
                        <a>{props.shipTag}</a>
                    </div>
                    <div className='tab-base-stack-banner__bgTagThree'></div>
                    <div className='tab-base-stack-banner__img'>
                        <img src={props.userImage}></img>
                    </div>
                    <div className='tab-base-stack-banner__username'>
                        {props.userName}
                    </div>
                    <div className='tab-base-stack-banner__date'>
                        {props.postDate}
                    </div>
                    <div className='tab-base-stack-banner__title'>
                        {props.postTitle}
                    </div>
            </div>
    )
}


export default TabBanner;