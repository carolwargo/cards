import React from 'react';
// import components
import CardFlip from './components/CardFlip';
import Carousel from './components/Carousel';
import CardSlider2 from './components/CardSlider2';
import CardSlider1 from './components/CardSlider1'; 

const App = () => {
  return (
    <div>
      <CardFlip />
      <Carousel />
      <CardSlider2 />
      <CardSlider1 />
    </div>
  );
};

export default App;
