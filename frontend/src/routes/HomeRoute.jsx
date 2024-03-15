import React from "react";

import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics, selectPhoto, selectTopic, openDisplayModal, favourites, toggleFavourite }) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} selectTopic={selectTopic} favouritesExist={favourites.length > 0} />
      <PhotoList
        photos={photos}
        selectPhoto={selectPhoto}
        openDisplayModal={openDisplayModal}
        favourites={favourites}
        toggleFavourite={toggleFavourite} />
    </div>
  );
};

export default HomeRoute;