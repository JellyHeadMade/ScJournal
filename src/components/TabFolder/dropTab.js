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
                    {this.props.content}
                </div>
                    :
                <div className='drop-tab-base-content__shrunk'></div>
                }
                <div className='drop-tab-base-title'>
                    {this.props.type}
                </div>
                {this.props.isExpanded == true ?
                <div className='drop-tab-base-arrow__expanded'>
                    arrow facing up
                </div>
                    :
                <div className='drop-tab-base-arrow__shrunk'>
                    arrow facing down
                </div>
                }
            </div>
        )
    }
}

export default DropTab;