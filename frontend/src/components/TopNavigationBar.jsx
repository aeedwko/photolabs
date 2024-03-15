import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, favouritesExist, selectTopic }) => {
  console.log(selectTopic);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} selectTopic={selectTopic} />
      <FavBadge isFavPhotoExist={favouritesExist} />
    </div>
  );
};

export default TopNavigation;