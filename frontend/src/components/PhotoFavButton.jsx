import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ photo, favourites, modifyFavourites }) => {
  // const [selected, setSelected] = useState(false);

  const handleClick = () => {
    modifyFavourites(photo.id);

    // setSelected(prevSelected => !prevSelected);
  };
  
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favourites.includes(photo.id)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;