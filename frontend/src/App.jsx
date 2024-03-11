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
    state,
    toggleDisplayModal,
    changeSelectedPhoto,
    toggleFavourite
  } = useApplicationData();

  // dispatch({type: 'FAV_PHOTO_ADDED', value: id})

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleDisplayModal={toggleDisplayModal} favourites={state.favourites} toggleFavourite={toggleFavourite} changeSelectedPhoto={changeSelectedPhoto} />
      {state.displayModal && <PhotoDetailsModal toggleDisplayModal={toggleDisplayModal} selectedPhoto={state.selectedPhoto} toggleFavourite={toggleFavourite} favourites={state.favourites} />}
    </div>
  );
};

export default App;
