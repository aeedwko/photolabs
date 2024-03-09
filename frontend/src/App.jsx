import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';
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
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
