import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from "hooks/useApplicationData";

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    toggleDisplayModal,
    changeSelectedPhoto,
    toggleFavourite,
    changeTopic
  } = useApplicationData();

  // dispatch({type: 'FAV_PHOTO_ADDED', value: id})

  return (
    <div className="App">
      <HomeRoute photos={state.photoData} topics={state.topicData} toggleDisplayModal={toggleDisplayModal} favourites={state.favourites} toggleFavourite={toggleFavourite} changeSelectedPhoto={changeSelectedPhoto} changeTopic={changeTopic} />
      {state.displayModal && <PhotoDetailsModal toggleDisplayModal={toggleDisplayModal} selectedPhoto={state.selectedPhoto} toggleFavourite={toggleFavourite} favourites={state.favourites} />}
    </div>
  );
};

export default App;
