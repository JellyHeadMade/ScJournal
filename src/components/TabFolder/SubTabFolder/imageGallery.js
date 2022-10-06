import React, { useState } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

function ImageGallery(props) {

    const [clicked, setClicked] = useState(false);

    const onClick = (highresImage) => {
        if (!props.fullScreenImg) {
            props.setFullScreenImg(highresImage);
        }
        console.log('image gallery shows props as ', props);
    }

    return (
        <div className='image-gallery-tab-content'>
            <div onClick={() => onClick(props.image1)} className='placeholder'>
                <img className='img' src={props.image1Thumbnail} />
            </div>
            <div onClick={() => onClick(props.image2)} className='placeholder'>
                <img className='img' src={props.image2Thumbnail} />
            </div>
            <div onClick={() => onClick(props.image3)} className='placeholder'>
                <img className='img' src={props.image3Thumbnail} />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    const { fullScreenImg } = state.fullScreenImgReducer;
    return {
        fullScreenImg
    }
}

ImageGallery = connect(mapStateToProps, actions)(ImageGallery);

export default ImageGallery;