import React from 'react';

function BasicPage(props) {
    return (
        <div className='basic-page-container'>
            <div className='basic-page-header'>{props.title}</div>
            <div className='basic-page-splitter'></div>
            <div className='basic-page-body'>{props.content}</div>
        </div>
    );
}

export default BasicPage;