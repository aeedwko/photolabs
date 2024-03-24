import { useEffect, useReducer } from 'react';

export const ACTIONS = {
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
  OPEN_PHOTO_DETAILS: 'OPEN_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS',
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  PARSE_SIMILAR_PHOTO_DATA: "PARSE_SIMILAR_PHOTO_DATA",
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.SET_PHOTO_DATA:
    return { ...state, photoData: action.payload };
  case ACTIONS.SET_TOPIC_DATA:
    return { ...state, topicData: action.payload };
  case ACTIONS.SELECT_PHOTO:
    return { ...state, selectedPhoto: action.payload };
  case ACTIONS.GET_PHOTOS_BY_TOPICS:
    return { ...state, selectedTopic: action.payload };
  case ACTIONS.OPEN_PHOTO_DETAILS:
    return { ...state, displayModal: true };
  case ACTIONS.CLOSE_PHOTO_DETAILS:
    return { ...state, displayModal: false };
  case ACTIONS.FAV_PHOTO_ADDED:
    return { ...state, favourites: [...state.favourites, action.payload] };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return { ...state, favourites: state.favourites.filter(favourite => favourite.id !== action.payload.id) };
  case ACTIONS.PARSE_SIMILAR_PHOTO_DATA:
    return { ...state, selectedPhoto: { ...state.selectedPhoto, "similar_photos": action.payload } };
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

// initial state
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    photoData: [],
    topicData: [],
    selectedPhoto: {},
    selectedTopic: 0,
    displayModal: false,
    favourites: []
  });

  const openDisplayModal = () => {
    dispatch({ type: ACTIONS.OPEN_PHOTO_DETAILS });
  };

  const closeDisplayModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
  };

  const selectPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };
  
  const selectTopic = (id) => {
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: id });
  };

  // if photo is in favourites, then update favourites without that photo
  const toggleFavourite = (photo) => {
    if (state.favourites.find(favourite => favourite.id === photo.id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photo });
    }
  };

  // display all favourited photos
  const selectFavourites = () => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: state.favourites });
  };

  // fetch data from photos
  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  // fetch data from topics
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

  // parse the similar photos data in the modal so they can be clickable and display their own similar photos
  useEffect(() => {
    if (state.displayModal) {
      // map each similar photo and return each photo with the same id in our photos data (which has the similar_array)
      const parsedPhotos = state.selectedPhoto.similar_photos.map((similarPhoto) => {
        return state.photoData.find(photo => similarPhoto.id === photo.id);
      });

      // updates similar_photos
      dispatch({ type: ACTIONS.PARSE_SIMILAR_PHOTO_DATA, payload: parsedPhotos });
    }
  }, [state.selectedPhoto.id]);

  return {
    state,
    selectPhoto,
    selectTopic,
    openDisplayModal,
    closeDisplayModal,
    toggleFavourite,
    selectFavourites
  };
};

export default useApplicationData;