import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, toggleFavourite, toggleDisplayModal, changeSelectedPhoto }) => {

  const parsedSampleData = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        toggleDisplayModal={toggleDisplayModal}
        changeSelectedPhoto={changeSelectedPhoto}
      />
    );
  });

  return (
    <ul className="photo-list">
      {parsedSampleData}
    </ul>
  );
};

export default PhotoList;
