import { useState } from "react";
import { motion } from "framer-motion";

import Colors from '../assets/LandScape/Colors.png'
import SunRay from '../assets/LandScape/SunRay.png'

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div className="flex items-center justify-center h-[800px] cursor-pointer  bg-neutral-800 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
      <div
        className="flip-card w-[600px] h-[360px] rounded-md shadow-xl"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front flex text-center justify-center items-center w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(${SunRay})` }}
          >
            <h1 className="text-2xl text-red-500 font-bold/" style={{fontSize:'4rem'}}>CLICK ME!</h1>
            <br />
          
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(${Colors})` }}
          >
            <h1 className="text-2xl font-bold/">Earth</h1>
            <p>Or in the maze of the city</p>
          </div>
        </motion.div>
      </div>
      
    </div>
  );
};

export default CardFlip;