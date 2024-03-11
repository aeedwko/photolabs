import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  
  // updates displayModal and selectedPhoto states
  const toggleDisplayModal = (id) => {
    setDisplayModal(displayModal => !displayModal);
    setSelectedPhoto(photos.find((photo) => photo.id === id));
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleDisplayModal={toggleDisplayModal} />
      {displayModal && <PhotoDetailsModal toggleDisplayModal={toggleDisplayModal} selectedPhoto={selectedPhoto} />}
    </div>
  );
};

export default App;
