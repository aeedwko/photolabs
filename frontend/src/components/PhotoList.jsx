import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, selectPhoto, openDisplayModal, favourites, toggleFavourite }) => {

  const photoListItems = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        selectPhoto={selectPhoto}
        openDisplayModal={openDisplayModal}
        favourites={favourites}
        toggleFavourite={toggleFavourite} />
    );
  });

  return (
    <ul className="photo-list">
      {photoListItems}
    </ul>
  );
};

export default PhotoList;
