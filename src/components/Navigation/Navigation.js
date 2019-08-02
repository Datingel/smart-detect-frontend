import React from 'react';

const Navigation = () => {
  return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
      <p className='f3 link dim black underline pa3 pointer'>Register</p>
    </nav>
  );
};

export default Navigation;
