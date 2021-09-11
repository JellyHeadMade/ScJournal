import React from 'react';

class TabTitleBanner extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className={`tab-title-base-container`} >
                <div className='tab-title-base-container__title'>{this.props.title}</div>
            </div>
        )
    }
}

export default TabTitleBanner;