import React from 'react';

class TabBannerTitle extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div className='tab-banner-title-container'>
                <div className='tab-banner-title-container__title'>
                    {this.props.title}
                </div>
            </div>
        )
    }
}

export default TabBannerTitle;