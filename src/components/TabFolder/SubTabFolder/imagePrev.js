import React from 'react';

function ImagePrev(props) {
  return (
    <div className={`image-prev${props.index}`}>
      <div className='delete-btn' onClick={props.onClick} title={props.path}>Delete</div>
      <img className='img-prev' src={props.src} alt='Defualt' />
    </div>
  );
}

export default ImagePrev;