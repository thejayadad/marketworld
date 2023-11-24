'use client'
import { motion, useAnimation } from 'framer-motion';

const HeroSection = () => {
  const controls = useAnimation();

  const variants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 1.2 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 z-0 px-6"
        style={{
          backgroundImage: 'url("/hero2.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(70%)', 
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          onAnimationStart={() => controls.start('animate')}
          className="text-black text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
            Your Hero Text
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Subtitle or catchy phrase
          </p>
        </motion.div>
      </div>

      {/* Image Animation */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={imageVariants}
        onAnimationStart={() => controls.start('animate')}
        className="absolute inset-0 z-5"
      >
        <img
          src="/path/to/your/image.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-0"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
