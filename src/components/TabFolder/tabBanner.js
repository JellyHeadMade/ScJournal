import React from 'react';

class TabBanner extends React.Component{
    render() {
        return(
            <div className='tab-base-stack-banner'>
                <div className='tab-base-stack-banner__tags'>
                    <div className='tab-tag__type'>
                        <a>Type</a>
                    </div>
                    <div className='tab-tag__activity'>
                        <a>Activity</a>
                    </div>
                    <div className='tab-tag__location'>
                        <a>Location</a>
                    </div>
                    <div className='tab-tag__ship'>
                        <a>Ship</a>
                    </div>
                </div>
                    <div className='tab-base-stack-banner__img'>
                        <img src='http://via.placeholder.com/63'></img>
                    </div>
                    <div className='tab-base-stack-banner__username'>
                        UserName
                    </div>
                    <div className='tab-base-stack-banner__date'>
                        08/21/21
                    </div>
                    <div className='tab-base-stack-banner__title'>
                        Post Title
                    </div>
            </div>
        )
    }
}

export default TabBanner;