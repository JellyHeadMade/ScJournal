import React from 'react';

function ImageGallery(props) {
    return (
        <div className='image-gallery-tab-content'>
            <img className='img' src={props.image1Thumbnail} />
            <img className='img' src={props.image2Thumbnail} />
            <img className='img' src={props.image3Thumbnail} />
        </div>
    )
}

export default ImageGallery;