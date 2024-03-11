import React, { useState } from 'react';

const useApplicationData = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [favourites, setFavourites] = useState([]);
  
  // updates displayModal and selectedPhoto states
  const toggleDisplayModal = (photo) => {
    setDisplayModal(displayModal => !displayModal);
    setSelectedPhoto(photo);
  };
  
  // if id is in favourites, then set favourites without id
  const toggleFavourite = (id) => {
    favourites.includes(id) ? setFavourites((favourites.filter(favouriteId => favouriteId !== id))) : setFavourites([...favourites, id]);
  };

  return {
    displayModal,
    selectedPhoto,
    favourites,
    toggleDisplayModal,
    toggleFavourite
  };
};

export default useApplicationData;