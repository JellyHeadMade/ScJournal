import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

function ImagePrev(props) {
  return (
    <div className={`image-prev${props.index}`}>
      <div className={props.src ? 'delete-btn-active' : 'delete-btn-notactive'} onClick={props.onClick} title={props.path}>Delete</div>

      {props.src ? <img className='thumb-img' src={props.src} /> : 
      <FontAwesomeIcon className='default-icon' icon={faImage} />}

    </div>
  );
}

export default ImagePrev;