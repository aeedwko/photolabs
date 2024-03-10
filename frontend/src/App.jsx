import React from 'react';

import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';

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
      <HomeRoute photos={photos} topics={topics} />
    </div>
  );
};

export default App;
