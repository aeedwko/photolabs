import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, selectFavourites }) => {
  const handleClick = () => {
    selectFavourites();
  };

  return (
    <div className='fav-badge' onClick={handleClick} >
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true} />
    </div>
  );
};

export default FavBadge;