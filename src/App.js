import React from 'react';
// import components
import ImageSlide from './components/ImageSlide';
import Card from './components/Card';
import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <div className='overflow-hidden'>
     
      
      <div>
      <Card />
      </div>
      <div>
      <ProductCard />
      </div>
     
      <div> <ImageSlide /></div>
  
    </div>
  );
};

export default App;
