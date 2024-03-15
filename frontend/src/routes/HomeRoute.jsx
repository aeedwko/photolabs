import React, { useState } from "react";

import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics, openDisplayModal, favourites, toggleFavourite, selectPhoto, selectTopic }) => {
  
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritesExist={favourites.length > 0} selectTopic={selectTopic} />
      <PhotoList
        photos={photos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        openDisplayModal={openDisplayModal}
        selectPhoto={selectPhoto} />
    </div>
  );
};

export default HomeRoute;
