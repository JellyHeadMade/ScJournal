import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

function FullScreenImg(props) {

    const onExit = () => {
        props.setFullScreenImg('');
    }

    return (
        <div className={props.fullScreenImg ? 'full-screen-img-container-true' : 'full-screen-img-container-false'}>
            {props.fullScreenImg ? <div className='full-screen-img-box'>
                <img className='full-screen-img' src={props.fullScreenImg} />
                <button onClick={onExit}>exit</button>
            </div> : null}
        </div>
    )
}

function mapStateToProps(state) {
    const { fullScreenImg } = state.fullScreenImgReducer;
    return {
        fullScreenImg
    }
}

FullScreenImg = connect(mapStateToProps, actions)(FullScreenImg);

export default FullScreenImg;