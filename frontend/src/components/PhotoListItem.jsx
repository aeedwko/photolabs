import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  return (
    <div>
      <img className="photo-list__item" src={photo.imageSource} />
      <img src={photo.profile} />
      <p>{photo.username}</p>
      <p>{photo.location.city} {photo.location.country}</p>
    </div>
  );
};

export default PhotoListItem;
