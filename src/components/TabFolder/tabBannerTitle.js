import React from 'react';

function TabBannerTitle(props) {

    return (
        <div className='tab-banner-title-container'>
            <div className='tab-banner-title-container__title'>
                {props.title}
            </div>
        </div>
    )
}

export default TabBannerTitle;