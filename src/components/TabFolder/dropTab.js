import React from 'react';

class DropTab extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isExpanded : this.props.isExpanded,
            droptype : this.props.type,
            content : this.props.conent
        }
    }

    render() {
        return (
            <div className='drop-tab-base-container'>
                <div className='drop-tab-base-content'>
                    
                </div>
                <div className='drop-tab-base-title'>
                    {this.state.droptype}
                </div>
                <div className='drop-tab-base-arrow'>
                    
                </div>
            </div>
        )
    }
}