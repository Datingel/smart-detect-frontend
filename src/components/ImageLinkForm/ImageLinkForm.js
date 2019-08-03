import React from 'react';
import './ImageLinkForm.css';

const ImageLinkform = ({onInputChange, onSubmitButton}) => {
  return (
    <div>
      <p className='f3 center pa2' style={{display: 'flex', alignItems: 'center'}}>
        {'This Face Detection will as the name suggests detect faces of pictures!'}
      </p>
      <div className='center '>
        <div className='pa4 br3 shadow-5 center form'>
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
          <button
            onClick={onSubmitButton}
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-green'>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkform;
