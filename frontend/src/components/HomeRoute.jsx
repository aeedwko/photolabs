import React, { useState } from "react";

import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics }) => {
  const [favourite, setFavourite] = useState([]);

  const modifyFavourite = (id) => {
    
    setFavourite((prevFavourite) => {
      // if photo is not in the prevFavourite state
      if (!prevFavourite.includes(id)) {
        // return new state array with the id
        return [...prevFavourite, id];
      } else {
        // return new state array without the id
        return prevFavourite.filter((element) => element !== id);
      }
    });
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} modifyFavourite={modifyFavourite} />
    </div>
  );
};

export default HomeRoute;
