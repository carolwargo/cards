import React from 'react';
import Turtle from '../assets/Hawaii/Turtle.png'
import Sunset from '../assets/Hawaii/Sunset.png'
import Surf from '../assets/Hawaii/Surf.png'

const ProductCard = () => {

    return (
<div className=' bg-neutral-800'>
        <div className="flex items-center justify-center min-h-screen bg-neutral-800">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Sunset} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-3xl font-bold text-white font-dmserif">Sunset</h1>
              <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
          <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Surf} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-3xl font-bold text-white font-dmserif">Surf</h1>
              <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
          <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Turtle}alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-3xl font-bold text-white font-dmserif">Sea Turtles</h1>
              <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
        </div>
        </div>
        <div className="text-center bottom-16">
          <p className="font-light font-com text-l text-slate-700">All Images are from <a href="https://unsplash.com" className="text-light text-l text-cyan-300">Unsplash.com</a></p>
        </div>
        <br />
        <br />
      </div>

    )
}

export default ProductCard;
