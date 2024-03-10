import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import TopNavigation from 'components/TopNavigationBar';
// import PhotoList from './components/PhotoList';
import HomeRoute from 'components/HomeRoute';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  // creates an EMPTY array, fill() populates array with undefined, otherwise map will skip
  // const photos = new Array(3);

  // const photoComponents = photos.fill().map((_, index) => (
  //   <PhotoListItem className="photo-list" key={index} photo={sampleDataForPhotoListItem} />
  // ));

  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
