'use client'
import React, { useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductList = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div
      className='grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-6 max-w-screen-2xl mx-auto min-h-screen px-4 py-12'
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        style={{height: '600px'}}
        transition={{ duration: 0.5 }}
      >
        <ProductCard />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        style={{height: '600px'}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ProductCard />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        style={{height: '600px'}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ProductCard />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        style={{height: '600px'}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ProductCard />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        style={{height: '600px'}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <ProductCard />
      </motion.div>
    </div>
  );
};

export default ProductList;
