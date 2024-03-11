import React from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, favourites, toggleFavourite, toggleDisplayModal }) => {

  const handleClick = () => {
    toggleDisplayModal(photo);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton photo={photo} favourites={favourites} toggleFavourite={toggleFavourite} />
      <img className="photo-list__image" src={photo.urls.regular} onClick={handleClick} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <div className="photo-list__user-info">
          {photo.user.username}
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
