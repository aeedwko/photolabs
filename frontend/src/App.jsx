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
  const [favourites, setFavourites] = useState([]);
  
  // updates displayModal and selectedPhoto states
  const toggleDisplayModal = (id) => {
    setDisplayModal(displayModal => !displayModal);
    setSelectedPhoto(photos.find((photo) => photo.id === id));
  };

  // if id is in favourites, then set favourites without id
  const toggleFavourites = (id) => {
    favourites.includes(id) ? setFavourites((favourites.filter(favouriteId => favouriteId !== id))) : setFavourites([...favourites, id]);
  };

  console.log(photos);
  
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleDisplayModal={toggleDisplayModal} favourites={favourites} toggleFavourites={toggleFavourites} />
      {displayModal && <PhotoDetailsModal toggleDisplayModal={toggleDisplayModal} selectedPhoto={selectedPhoto} toggleFavourites={toggleFavourites} favourites={favourites} />}
    </div>
  );
};

export default App;
