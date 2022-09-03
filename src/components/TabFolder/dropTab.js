import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import StoryContent from './SubTabFolder/storyContent';


function DropTab(props) {

    const [dropTabState, setDropTabState] = useState({isExpanded: false, drop: 'up', content: 'drained'});

    const onClick = (event) => {
        if(dropTabState.isExpanded == false) {
            setDropTabState({...dropTabState, isExpanded: true, drop: 'down', content: 'fill'});
        } else {
            setDropTabState({...dropTabState, isExpanded: false, drop: 'up', content: 'drained'});
        }
    }

    return (
        <div className={`drop-container-${props.type}__${props.create ? 'down' : dropTabState.drop}`}>
                <div className={`droptab-${props.type}-content`}>
                    {props.content}
                </div>
                <div className={`droptab-${props.type}-bottom`}>
                    <div className={`${props.type}-bottom-title`}>
                        <a>{props.type}</a>
                    </div>
                    <div onClick={onClick} className={`${props.type}-bottom-arrow`}>
                        {dropTabState.isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown}/>}
                    </div>
                </div>
            </div>
    )
}

export default DropTab;