import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imgUrl, box}) => {
  return (
    <div className='center ma br3'>
      <div className='absolute mt2'>
        <img id='inputImage' src={imgUrl} alt='' width='500px' heigh='auto' style={{borderRadius: '5px', boxShadow: '3px 3px 5px 4px #7769C9'}}/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, left: box.leftCol, bottom: box.bottomRow}}/>
      </div>
    </div>
  );
};

export default FaceRecognition;
