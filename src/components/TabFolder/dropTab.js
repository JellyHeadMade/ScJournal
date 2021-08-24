import React from 'react';

class DropTab extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isExpanded : this.props.isExpanded
        }
    }


    render() {
        return (
            <div className='drop-tab-base-container'>
                {this.props.isExpanded == true ?
                <div className='drop-tab-base-content__expanded'>
                    {this.props.content.props.story}
                </div>
                    :
                <div className='drop-tab-base-content__shrunk'></div>
                }
                <div className='drop-tab-base-title'>
                    {this.props.type}
                </div>
                <div className='drop-tab-base-arrow'>
                    {this.props.isExpanded}
                </div>
            </div>
        )
    }
}

export default DropTab;