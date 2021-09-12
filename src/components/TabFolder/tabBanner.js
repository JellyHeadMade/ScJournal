// import { faRulerHorizontal } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class TabBanner extends React.Component{
    render() { 
        return(
            <div className='tab-base-stack-banner'>
                    <div className='tab-base-stack-banner__type'>
                        <a>{this.props.typeTag}</a>
                    </div>
                    <div className='tab-base-stack-banner__activity'>
                        <a>{this.props.activityTag}</a>
                    </div>
                    <div className='tab-base-stack-banner__bgTagOne'></div>
                    <div className='tab-base-stack-banner__location'>
                        <a>{this.props.locationTag}</a>
                    </div>
                    <div className='tab-base-stack-banner__bgTagTwo'></div>
                    <div className='tab-base-stack-banner__ship'>
                        <a>{this.props.shipTag}</a>
                    </div>
                    <div className='tab-base-stack-banner__bgTagThree'></div>
                    <div className='tab-base-stack-banner__img'>
                        <img src={this.props.userImage}></img>
                    </div>
                    <div className='tab-base-stack-banner__username'>
                        {this.props.userName}
                    </div>
                    <div className='tab-base-stack-banner__date'>
                        {this.props.postDate}
                    </div>
                    <div className='tab-base-stack-banner__title'>
                        {this.props.postTitle}
                    </div>
            </div>
        )
    }
}

export default TabBanner;