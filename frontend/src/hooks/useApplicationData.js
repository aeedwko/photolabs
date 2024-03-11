import React, { useState } from 'react';

const useApplicationData = () => {
  const [state, setState] = useState({
    displayModal: false,
    selectedPhoto: {},
    favourites: []
  });

  // const [displayModal, setDisplayModal] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState({});
  // const [favourites, setFavourites] = useState([]);
  
  // updates displayModal states
  const toggleDisplayModal = () => {
    setState(prevState => ({ ...prevState, displayModal: !prevState.displayModal}));
  };
  
  const changeSelectedPhoto = (photo) => {
    setState(prevState => ({ ...prevState, selectedPhoto: photo }));
  };
  
  // if id is in favourites, then set favourites without id
  const toggleFavourite = (id) => {
    if (state.favourites.includes(id)) {
      setState(prevState => ({ ...prevState,
        favourites: prevState.favourites.filter(favId => favId !== id) }));
    } else {
      setState(prevState => ({ ...prevState,
        favourites: [...prevState.favourites, id] }));
    }
  };

  return {
    state,
    toggleDisplayModal,
    changeSelectedPhoto,
    toggleFavourite
  };
};

export default useApplicationData;