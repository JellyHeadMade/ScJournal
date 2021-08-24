import React from 'react';

class DropTab extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isExpanded : false
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        console.log('clicked!!');
        if(this.state.isExpanded == false) {
            this.setState({ isExpanded : true })
        } else {
            this.setState({ isExpanded : false})
        }
    }


    render() {
        return (
            <div className='drop-tab-base-container'>
                {this.state.isExpanded == true ?
                <div className='drop-tab-base-content__expanded'>
                    {this.props.content}
                </div>
                    :
                <div className='drop-tab-base-content__shrunk'></div>
                }
                <div className='drop-tab-base-title'>
                    {this.props.type}
                </div>
                {this.state.isExpanded == true ?
                <button onClick={this.onClick}className='drop-tab-base-arrow__expanded'>
                    arrow facing up
                </button>
                    :
                <button onClick={this.onClick} className='drop-tab-base-arrow__shrunk'>
                    arrow facing down
                </button>
                }
            </div>
        )
    }
}

export default DropTab;