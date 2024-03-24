import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ photo, favourites, toggleFavourite }) => {

  const handleClick = () => {
    toggleFavourite(photo);
  };
  
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favourites.filter(favourite => favourite.id === photo.id).length > 0} />
      </div>
    </div>
  );
};

export default PhotoFavButton;