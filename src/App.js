import React from 'react';
import MyGallery from './MyGallery';
import { photos } from './photos';
import Gallery from './Gallery'
import './App.css'



function App() {

  return (
    
      <div className="App">
        <MyGallery />
        <Gallery photos={photos}  />  
      </div>
     
    
  );
}

export default App;