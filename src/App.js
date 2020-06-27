import React, { useState, useEffect } from 'react';
import './App.css';
import { getPhotos } from './api';
import Card from './components/card';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getAllPhotos() {
      try {
        const response = await getPhotos();
        setPhotos(response);
      } catch (error) {
        console.log(error);
      }
    }
    getAllPhotos();
  }, []);
  
  return (
    <div className="app">
      <header className="app-header">
        <p>Image Gallery</p>
      </header>
      {
        photos.map(img =>
          <Card key={img.id} image={img} />
        )
      }
    </div>
  );
}

export default App;
