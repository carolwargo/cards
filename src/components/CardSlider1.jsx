import { useState } from "react";
import { motion } from "framer-motion";
import Triangle from '../assets/Shed/Triangle.png';
import BarShed from '../assets/Shed/BarShed.png';
import BigBlack from '../assets/Shed/BigBlack.png';
import DoubleFarm from '../assets/Shed/DoubleFarm.png';
import SunsetFarm from '../assets/Shed/SunsetFarm.png';
import WhiteFarm from '../assets/Shed/WhiteFarm.png';
import WoodFront from '../assets/Shed/WoodFront.png';
import WhiteOffice from '../assets/Shed/WhiteOffice.png';
import LakeShed from '../assets/Shed/LakeShed.png';

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % positions.length
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 6) % positions.length
      );
      return updatedIndexes;
    });
  };

  const images = [
   
  BarShed,
  Triangle,
  DoubleFarm,
WoodFront,
    BigBlack,
    SunsetFarm,
    WhiteFarm,
    LakeShed,
    WhiteOffice,
  ];

  const positions = [
    "center",
    "left1",
    "left2",
    "left3",
    "left4",
    "right4",
    "right3",
    "right2",
    "right1",
  ];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 7 },
    left1: { x: "-30%", scale: 0.7, zIndex: 5 },
    left2: { x: "-60%", scale: 0.5, zIndex: 4 },
    left3: { x: "-80%", scale: 0.3, zIndex: 3 },
    left4: { x: "-95%", scale: 0.2, zIndex: 2 },
    right4: { x: "95%", scale: 0.2, zIndex: 1 },
    right3: { x: "80%", scale: 0.3, zIndex: 3 },
    right2: { x: "60%", scale: 0.5, zIndex: 4 },
    right1: { x: "30%", scale: 0.7, zIndex: 5 },
  };

  return (
    <div className="flex items-center flex-col justify-center bg-black h-screen w-screen overflow-hidden">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px] object-cover"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "35%", position: "absolute" }}
        />
      ))}
      <div className="flex flex-row gap-3 z-[20]">
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;