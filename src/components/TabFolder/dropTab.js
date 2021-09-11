import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


class DropTab extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isExpanded : false,
            drop : 'up'
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        console.log('clicked!!');
        if(this.state.isExpanded == false) {
            this.setState({ isExpanded : true , drop : 'down' })
        } else {
            this.setState({ isExpanded : false , drop : 'up' })
        }
    }


    render() {
        return (
            <div className={`drop-container__${this.props.type}`}>
                <div className={`droptab-${this.props.type}__content`}>
                    {null}
                    {this.state.isExpanded ? this.props.content : null}
                </div>
                <div className={`droptab-${this.props.type}__bottom`}>
                    <div className={`${this.props.type}-bottom-title`}>
                        <a>{this.props.type}</a>
                    </div>
                    <div onClick={this.onClick} className={`${this.props.type}-bottom-arrow`}>
                        {this.state.isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default DropTab;