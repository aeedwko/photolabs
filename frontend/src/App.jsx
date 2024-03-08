import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {

  // creates an EMPTY array, fill() populates array with undefined, otherwise map will skip
  const photos = new Array(3);

  const photoComponents = photos.fill().map((_, index) => (
    <PhotoListItem className="photo-list" key={index} photo={sampleDataForPhotoListItem} />
  ));

  return (
    <div className="App">
      {photoComponents}
    </div>
  );
};

export default App;
