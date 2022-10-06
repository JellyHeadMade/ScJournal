import React, { useState } from 'react';

function ImageGallery(props) {

    const [clicked, setClicked] = useState(false);

    const fullImageTrigger = (image) => { // stand in for a call to redux
        console.log('clicked, here is the image: ', image);
        console.log('image trigger shows state as ', clicked);
    }

    // const onClick = (e) => {
    //     if (!clicked) {
    //         setClicked(true);
    //         fullImageTrigger(e.target.alt); 
    //     } else {
    //         setClicked(false);
    //     }
    //     console.log('onclicked shows state as ', clicked);
    // }

    const onClick = (highresImage) => {
        fullImageTrigger(highresImage);
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

export default ImageGallery;