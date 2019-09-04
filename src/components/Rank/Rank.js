import React from 'react';

const Rank = ({name, entries}) => {
  return (
    <div>
      <div className='white f3 pa5 center'>{`${name}, your current face detection count is`}</div>
      <div className='white f1 center'>{entries}</div>
    </div>
  );
};

export default Rank;
