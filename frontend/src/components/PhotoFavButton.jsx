import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ photo, modifyFavourite }) => {
  const [selected, setSelected] = useState(false);


  const handleClick = () => {
    // instead of a ternary operator, we can reference the previous state
    modifyFavourite(photo.id);

    setSelected(prevSelected => !prevSelected);
  };
  
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;