import React from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from "hooks/useApplicationData";

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    selectPhoto,
    selectTopic,
    openDisplayModal,
    closeDisplayModal,
    toggleFavourite
  } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        selectPhoto={selectPhoto}
        selectTopic={selectTopic}
        openDisplayModal={openDisplayModal}
        favourites={state.favourites}
        toggleFavourite={toggleFavourite} />
      {state.displayModal && <PhotoDetailsModal
        // photo={state.photoData}
        selectedPhoto={state.selectedPhoto}
        selectPhoto={selectPhoto}
        openDisplayModal={openDisplayModal}
        closeDisplayModal={closeDisplayModal}
        favourites={state.favourites}
        toggleFavourite={toggleFavourite} />}
    </div>
  );
};

export default App;
