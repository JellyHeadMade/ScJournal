import React from 'react';

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='image-gallery-tab-content'>
                <img className='img' src='http://via.placeholder.com/300X150' />
                <img className='img' src='http://via.placeholder.com/300X150' />
                <img className='img' src='http://via.placeholder.com/300X150' />
            </div>
        )
    }
}

export default ImageGallery;