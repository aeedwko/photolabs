import React, { useState } from "react";

import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics, toggleDisplayModal, favourites, toggleFavourite, changeSelectedPhoto, changeTopic }) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritesExist={favourites.length > 0} changeTopic={changeTopic} />
      <PhotoList
        photos={photos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        toggleDisplayModal={toggleDisplayModal}
        changeSelectedPhoto={changeSelectedPhoto} />
    </div>
  );
};

export default HomeRoute;
