import React from 'react';

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='image-gallery-tab-content'>
                <img className='img' src={this.props.image1} />
                <img className='img' src={this.props.image2} />
                <img className='img' src={this.props.image3} />
            </div>
        )
    }
}

export default ImageGallery;