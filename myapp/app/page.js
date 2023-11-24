import Hero from '@/components/Hero/Hero'
import ProductCard from '@/components/ProductCard/ProductCard'
import ProductList from '@/components/ProductList.js/ProductList'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <h2 className='text-center mt-12 mb-8 text-2xl md:text-4xl lg:text-6xl font-bold'>Popular Items</h2>
      <ProductList/>  
    </main>
  )
}
