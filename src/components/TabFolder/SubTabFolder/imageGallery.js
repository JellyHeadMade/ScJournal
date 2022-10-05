import React, { useState } from 'react';

function ImageGallery(props) {

    const [clicked, setClicked] = useState(false);

    const fullImageTrigger = (image) => { // stand in for a call to redux
        console.log('clicked, here is the image: ', image);
        console.log('image trigger shows state as ', clicked);
    }

    const onClick = (e) => {
        if (!clicked) {
            setClicked(true);
            fullImageTrigger(e.target.alt); 
        } else {
            setClicked(false);
        }
        console.log('onclicked shows state as ', clicked);
    }

    return (
        <div className='image-gallery-tab-content'>
            <div onClick={onClick} className='placeholder'>
                <img className='img' alt={props.image1} src={props.image1Thumbnail} />
            </div>
            <div onClick={onClick} className='placeholder'>
                <img className='img' alt={props.image2} src={props.image2Thumbnail} />
            </div>
            <div onClick={onClick} className='placeholder'>
                <img className='img' alt={props.image3} src={props.image3Thumbnail} />
            </div>
        </div>
    )
}

export default ImageGallery;