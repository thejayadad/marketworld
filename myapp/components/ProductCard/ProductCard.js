'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProductCard = () => {
  return (
    <Link href={`/product/`} className='relative group' style={{ height: '600px' }}>
      <img
        src='https://images.pexels.com/photos/2374946/pexels-photo-2374946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        className='w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-100'
        alt='Product Image'
      />
      <motion.div
        className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
      >
        <h4 className='text-white text-xl font-semibold mb-2'>Title</h4>
        <h6 className='text-white text-lg'>Price</h6>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
