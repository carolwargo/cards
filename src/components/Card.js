import React from 'react';
import GirlCamera from '../assets/img/GirlCamera.png'
const Card = () => {


    return (

      <div className='flex items-center justify-center min-h-screen bg-slate-100'>
<div className='group h-96 w-96 [perspective:1000px]'>
  <div className='relative w-full h-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
    <div className='absolute inset-0'>
    <img  className='object-cover w-full h-full shadow-xl rounded-xl shadow-black/80' src={GirlCamera} alt='girl with camera'></img>
    </div>
    
   <div className='absolute inset-0 w-full h-full px-12 text-center rounded-xl bg-black/80 text-slate-200 [transform:rotateY(180)] [back visibility:hidden'>
   <div className='flex flex-col items-center justify-center min-h-full'>
<h1 className='text-3xl font-bold'>
  Joanna Doe
</h1>
<p className='text-lg'>Photographer</p>
<p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
<button className='px-1 py-1 mt-2 text-sm rounded-md bg-neutral-800 hover:bg-neutral-900'>
  Read More
</button>
</div>    
</div>
</div>
</div>
</div>
    )

}

export default Card;