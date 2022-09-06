import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

function ImagePrev(props) {
  return (
    <div className={`image-prev${props.index}`}>
      <div className='delete-btn' onClick={props.onClick} title={props.path}>Delete</div>
      {props.src ? <img src={props.src} /> : <FontAwesomeIcon icon="fa-solid fa-images" />}
      {/* <FontAwesomeIcon icon="fa-solid fa-images" /> */}
      {/* <img className='img-prev' src={props.src} alt='Defualt' /> */}
    </div>
  );
}

export default ImagePrev;