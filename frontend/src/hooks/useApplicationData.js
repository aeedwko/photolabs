import { useState, useReducer } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  // SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  // SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return { ...state, favourites: [...state.favourites, action.id] };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return { ...state, favourites: state.favourites.filter(favId => favId !== action.id) };
  case ACTIONS.SELECT_PHOTO:
    return { ...state, selectedPhoto: action.photo };
  case ACTIONS.DISPLAY_PHOTO_DETAILS:
    return { ...state, displayModal: true };
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    displayModal: false,
    selectedPhoto: {},
    favourites: []
  });
  
  // updates displayModal states
  const toggleDisplayModal = () => {
    dispatch({ type: 'DISPLAY_PHOTO_DETAILS' });
    // setState(prevState => ({ ...prevState, displayModal: !prevState.displayModal}));
  };

  const changeSelectedPhoto = (photo) => {
    dispatch({ type: 'SELECT_PHOTO', photo });
    // setState(prevState => ({ ...prevState, selectedPhoto: photo }));
  };
  
  // if id is in favourites, then set favourites without id
  const toggleFavourite = (id) => {
    if (state.favourites.includes(id)) {
      
      dispatch({ type: 'FAV_PHOTO_REMOVED', id });
      // setState(prevState => ({ ...prevState,
      //   favourites: prevState.favourites.filter(favId => favId !== id) }));
    } else {
      dispatch({ type: 'FAV_PHOTO_ADDED', id});
      // setState(prevState => ({ ...prevState,
      //   favourites: [...prevState.favourites, id] }));
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