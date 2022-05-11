import React from 'react';

function TabButton(props) {
    return (
        <div className='drop-container-button'>
            <div className='drop-container-button__title'>
                {props.title}
            </div>
        </div>
    )
}

export default TabButton;