import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={photo.imageSource} />
      <img className="photo-list__user-profile" src={photo.profile} />
      <div className="photo-list__user-details">
        <div className="photo-list__user-info">
          {photo.username}
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
