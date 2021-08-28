import React from 'react';

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='image-gallery-tab-content'>
                <img src='http://via.placeholder.com/150' />
                <img src='http://via.placeholder.com/150' />
                <img src='http://via.placeholder.com/150' />
            </div>
        )
    }
}

export default ImageGallery;