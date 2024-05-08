import React from 'react';
// import components
import ImageSlide from './components/ImageSlide';
//import CardFlip from './components/CardFlip';
import Card from './components/Card';
//import Carousel from './components/Carousel';
//import CardSlider2 from './components/CardSlider2';
//import CardSlider1 from './components/CardSlider1'; 
import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <div className='overflow-hidden'>
      <div className='items-center justify-center p-10 md:container md:mx-auto'>
        <h1>The following card annimations are done with Tailwind CSS and framer-motion. </h1>
      </div>
      
      <div>
      <Card />
      </div>
      
   
      <ImageSlide />
      <ProductCard />
     {/*} <CardFlip />*/}
      {/*<Carousel />*/}
      {/**<CardSlider2 />*/}
      {/*<CardSlider1 />*/}
    </div>
  );
};

export default App;
