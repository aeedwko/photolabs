import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, modifyFavourites }) => {

  const parsedSampleData = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        favourites={favourites}
        modifyFavourites={modifyFavourites}
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
