import { useState, useReducer } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  TOGGLE_PHOTO_DETAILS: 'TOGGLE_PHOTO_DETAILS'
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return { ...state, favourites: [...state.favourites, action.id] };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return { ...state, favourites: state.favourites.filter(favId => favId !== action.id) };
  case ACTIONS.SELECT_PHOTO:
    return { ...state, selectedPhoto: action.photo };
  case ACTIONS.TOGGLE_PHOTO_DETAILS:
    return { ...state, displayModal: !state.displayModal };
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
    dispatch({ type: ACTIONS.TOGGLE_PHOTO_DETAILS });
  };

  const changeSelectedPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
  };
  
  // if id is in favourites, then set favourites without id
  const toggleFavourite = (id) => {
    if (state.favourites.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, id });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, id});
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