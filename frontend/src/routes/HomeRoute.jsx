import React, { useState } from "react";

import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics, toggleDisplayModal }) => {
  const [favourites, setFavourites] = useState([]);

  const modifyFavourites = (id) => {
    
    // setFavourites((prevFavourites) => {
    //   // if photo is not in the prevFavourite state
    //   if (!prevFavourites.includes(id)) {
    //     // return new state array with the id
    //     console.log([...prevFavourites, id]);
    //     return [...prevFavourites, id];
    //   } else {
    //     // return new state array without the id
    //     console.log([prevFavourites.filter((element) => element !== id)]);
    //     return prevFavourites.filter((element) => element !== id);
    //   }
    // });
    
    // if id is in favourites, then set favourites without id
    favourites.includes(id) ? setFavourites((favourites.filter(favouriteId => favouriteId !== id))) : setFavourites([...favourites, id]);
  };

  // console.log(favourites);
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritesExist={favourites.length > 0}/>
      <PhotoList photos={photos} favourites={favourites} modifyFavourites={modifyFavourites} toggleDisplayModal={toggleDisplayModal} />
    </div>
  );
};

export default HomeRoute;
