import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import useApplicationData from "hooks/useApplicationData";

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    displayModal,
    selectedPhoto,
    favourites,
    toggleDisplayModal,
    toggleFavourite
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleDisplayModal={toggleDisplayModal} favourites={favourites} toggleFavourite={toggleFavourite} />
      {displayModal && <PhotoDetailsModal toggleDisplayModal={toggleDisplayModal} selectedPhoto={selectedPhoto} toggleFavourite={toggleFavourite} favourites={favourites} />}
    </div>
  );
};

export default App;
