'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://images.pexels.com/photos/4871119/pexels-photo-4871119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1064136/pexels-photo-1064136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3296392/pexels-photo-3296392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
 ];

  const controls = useAnimation();

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      controls.start('animate');
      handleNextImage();
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div className="relative h-screen overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial="initial"
          animate={index === currentImageIndex ? 'animate' : 'initial'}
          variants={imageVariants}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(70%)',
          }}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          onAnimationStart={() => controls.start('animate')}
          className="text-white text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
            OceanHarbor Seafoods
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">Fresh From the Ocean to Your Plate</p>
          <button className='px-12 py-6 md:px-24 md:py-6 hover:bg-primary text-secondary'>See More</button>

        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
