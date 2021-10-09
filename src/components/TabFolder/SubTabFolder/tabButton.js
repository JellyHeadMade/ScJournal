import React from 'react';

class TabButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='drop-container-button'>
                <div className='drop-container-button__title'>
                    {this.props.title}
                </div>
            </div>
        )
    }
}

export default TabButton;