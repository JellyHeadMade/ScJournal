import React from 'react';

function ImageGallery(props) {
    return (
        <div className='image-gallery-tab-content'>
            <img className='img' src={props.image1} />
            <img className='img' src={props.image2} />
            <img className='img' src={props.image3} />
        </div>
    )
}

export default ImageGallery;