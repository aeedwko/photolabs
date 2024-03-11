import React, { useState } from "react";

import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics, toggleDisplayModal, favourites, toggleFavourite }) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritesExist={favourites.length > 0}/>
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite} toggleDisplayModal={toggleDisplayModal} />
    </div>
  );
};

export default HomeRoute;
