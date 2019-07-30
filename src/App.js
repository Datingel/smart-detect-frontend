import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 250,
      shadow: {
        enable: true,
        color: '#12c2e9',
        blur: 4,
        density: {
          enable: true,
          value_area: 500
      }
    }
  }
}
}


function App() {
  return (
    <div className='App'>
      <Particles className='particles'
      params={particleOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}  
    </div>
  );
}

export default App;
