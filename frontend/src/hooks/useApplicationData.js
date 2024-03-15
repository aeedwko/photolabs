import { useEffect, useReducer } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  TOGGLE_PHOTO_DETAILS: 'TOGGLE_PHOTO_DETAILS',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
  PARSE_SIMILAR_PHOTO_DATA: "PARSE_SIMILAR_PHOTO_DATA",
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS'
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
  case ACTIONS.SET_PHOTO_DATA:
    return { ...state, photoData: action.payload };
  case ACTIONS.SET_TOPIC_DATA:
    return { ...state, topicData: action.payload };
  case ACTIONS.GET_PHOTOS_BY_TOPICS:
    return { ...state, selectedTopic: action.id };
  case ACTIONS.PARSE_SIMILAR_PHOTO_DATA:
    return { ...state, selectedPhoto: { ...state.selectedPhoto, "similar_photos": action.payload } };
  case ACTIONS.CLOSE_PHOTO_DETAILS:
    return { ...state, displayModal: false };
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
    selectedTopic: 0,
    favourites: [],
    photoData: [],
    topicData: [],
  });
  
  // when modal is true, isClickable is false???
  // updates displayModal states
  // don't toggle if modal is already true
  const toggleDisplayModal = () => {
    // if there is no display modal, then toggle it
    if (!state.displayModal) {
      dispatch({ type: ACTIONS.TOGGLE_PHOTO_DETAILS });
    }
  };

  const closeDisplayModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
  };

  const changeSelectedPhoto = (photo) => {
    // if modal is NOT there (initial state)
    // if modal is there,
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

  const changeTopic = (id) => {
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, id });
  };

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  // fetch photos based on topic
  useEffect(() => {
    if (state.selectedTopic) {
      fetch(`/api/topics/photos/${state.selectedTopic}`)
        .then(res => res.json())
        .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
    }
  }, [state.selectedTopic]);

  useEffect(() => {
    if (state.displayModal) {
      const parsedPhotos = state.selectedPhoto.similar_photos.map((similarPhoto) => {
        return state.photoData.find(photo => similarPhoto.id === photo.id);
      });

      dispatch({ type: ACTIONS.PARSE_SIMILAR_PHOTO_DATA, payload: parsedPhotos });
    }

    console.log(state);
  }, [state.selectedPhoto.id]);

  return {
    state,
    toggleDisplayModal,
    changeSelectedPhoto,
    toggleFavourite,
    changeTopic,
    closeDisplayModal
  };
};

export default useApplicationData;