import React from 'react';

class TabBanner extends React.Component{
    render() {
        return(
            <div className='tab-base-stack-banner'>
                <div className='tab-base-stack-banner__tags'>
                    <div className='tab-tag__type'>
                        <a>Story</a>
                    </div>
                    <div className='tab-tag__activity'>
                        <a>Mining</a>
                    </div>
                    <div className='tab-tag__bgTagOne'></div>
                    <div className='tab-tag__location'>
                        <a>Lyria</a>
                    </div>
                    <div className='tab-tag__bgTagTwo'></div>
                    <div className='tab-tag__ship'>
                        <a>Mercury Star Runner</a>
                    </div>
                    <div className='tab-tag__bgTagThree'></div>
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