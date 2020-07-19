import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import './App.css';
import Card from './components/card';
import { fetchGalleryState } from './state/galleryState/selector';

function App() {
  const gallery = useRecoilValueLoadable(fetchGalleryState);
  const getGallery = () => {
    switch (gallery.state) {
      case 'hasValue':
        return gallery.contents.map(img =>
          <Card key={img.id} image={img} />
        )
      case 'loading':
        return <div>Loading...</div>;
      case 'hasError':
        throw gallery.contents;
      default:
        return '';
    }
  }
  
  return (
    <div className="app">
      <header className="app-header">
        <h1>Image Gallery</h1>
      </header>
      { getGallery() }
    </div>
  );
}

export default App;
