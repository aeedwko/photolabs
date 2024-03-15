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
    toggleFavourite,
    selectTopic,
    openDisplayModal,
    closeDisplayModal
  } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        openDisplayModal={openDisplayModal}
        favourites={state.favourites}
        toggleFavourite={toggleFavourite}
        selectPhoto={selectPhoto}
        selectTopic={selectTopic} />
      {state.displayModal && <PhotoDetailsModal
        photo={state.photoData}
        openDisplayModal={openDisplayModal}
        selectedPhoto={state.selectedPhoto}
        toggleFavourite={toggleFavourite}
        favourites={state.favourites}
        selectPhoto={selectPhoto}
        closeDisplayModal={closeDisplayModal} />}
    </div>
  );
};

export default App;
