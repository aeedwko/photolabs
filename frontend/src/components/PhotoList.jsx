import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, modifyFavourite }) => {

  const parsedSampleData = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        modifyFavourite={modifyFavourite}
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
