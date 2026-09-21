import { useState } from 'react'
import ProductCard from './ProductCard'
import products from '../data/products' 

function ProductGrid() {

   const [activeCategory, setActiveCategory] = useState('All')

   const categories = [
      'All',
      'Trail Running',
      'Road Running',
      'Outerwear',
      'Accessories',
   ]
   const filteredProducts =
      activeCategory === 'All'
         ? products
         : products.filter(
            (product) => product.category === activeCategory
         )
   return (
      <section className="px-6 py-24">

         {/* Header */}
         <div className='mb-10'>
            <p className='text-sm font-medium uppercase tracking-[0.2em] text-lime-400'>
               Featured Collection
            </p>
            <h2 className='mt-3 text-4xl font-bold tracking-tight md:text-5xl'>
               Built to go further.
            </h2>
         </div>

         {/* Filters */}
         <div className="mb-12 flex flex-wrap gap-3">
            {categories.map((category) => (
               <button key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm transition ${
                     activeCategory === category
                        ? 'bg-lime-400 text-black'
                        : 'bg-neutral-900 text-gray-400 hover:text-white'
                  }`}
               >
                  {category}
               </button>
            ))}
         </div>

         {/* Products */}
         <div className='grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4'>
            {filteredProducts.map((product) => (
               <ProductCard
                  key={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  image={product.image}
               />
            ))}
         </div>
      </section>
   )
}

export default ProductGrid