import React from 'react';

class TabBanner extends React.Component{
    render() {
        return(
            <div className='tab-base-stack-banner'>
                <div className='tab-base-stack-banner-tags'>
                    <div className='tab-tag-type'>
                        Type
                    </div>
                    <div className='tab-tag-activity'>
                        Activity
                    </div>
                    <div className='tab-tag-location'>
                        Location
                    </div>
                    <div className='tab-tag-ship'>
                        Ship
                    </div>
                </div>
                <div className='tab-base-stack-banner-info'>
                    <div className='tab-base-stack-banner-user-img'>
                        user profile image
                    </div>
                    <div className='tab-base-stack-banner-username'>
                        username
                    </div>
                    <div className='tab-base-stack-banner-post-date'>
                        08/21/21
                    </div>
                    <div className='tab-base-stack-banner-post-title'>
                        Post Title
                    </div>
                </div>
            </div>
        )
    }
}

export default TabBanner;