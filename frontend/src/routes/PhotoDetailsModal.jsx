import React from 'react';

import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ selectedPhoto, selectPhoto, openDisplayModal, closeDisplayModal, favourites, toggleFavourite }) => {

  // convert similar object into an array for PhotoList
  const similarArray = Object.values(selectedPhoto.similar_photos);

  const handleClick = () => {
    closeDisplayModal();
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton photo={selectedPhoto} favourites={favourites} toggleFavourite={toggleFavourite}/>
        <img className="photo-details-modal__image" src={selectedPhoto.urls.full} alt="main photo" />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={selectedPhoto.user.profile} alt="profile photo" />
          <div className="photo-details-modal__photographer-info">
            {selectedPhoto.user.name}
            <div className="photo-details-modal__photographer-location">
              {selectedPhoto.location.city}, {selectedPhoto.location.country}
            </div>
          </div>
        </div>
        <div className="photo-details-modal__header">
          Similar Photos
        </div>
        <div className="photo-details-modal__top-bar">
          <PhotoList
            photos={similarArray}
            selectPhoto={selectPhoto}
            openDisplayModal={openDisplayModal}
            favourites={favourites}
            toggleFavourite={toggleFavourite} />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
