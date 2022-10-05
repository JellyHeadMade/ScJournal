import React from 'react';

function ImageGallery(props) {

    const onClick = (e) => {
        console.log('image clicked!');
    }

    return (
        <div className='image-gallery-tab-content'>
            <div onClick={onClick} className='placeholder'>
                <img className='img' src={props.image1Thumbnail} />
            </div>
            <div onClick={onClick} className='placeholder'>
                <img className='img' src={props.image2Thumbnail} />
            </div>
            <div onClick={onClick} className='placeholder'>
                <img className='img' src={props.image3Thumbnail} />
            </div>
        </div>
    )
}

export default ImageGallery;