import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import products from '../data/products' 

function ProductGrid() {
   
   const [activeCategory, setActiveCategory] = useState('All')
   const [selectedProduct, setSelectedProduct] = useState(null)
   
   useEffect(() => {
      if (selectedProduct) {
         console.log('Selected product: ', selectedProduct.name)
      }
      document.title = selectedProduct
         ? `${selectedProduct.name} - NORTHRUN`
         : 'NORTHRUN'
   }, [selectedProduct])

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
                  onSelect={() => setSelectedProduct(product)}
               />
            ))}

         </div>
         {selectedProduct && (
            <div className='mt-16 border-t border-neutral-800 pt-8'>
               <p className='text-sm uppercase tracking-[0.2em] text-lime-400'>
                  Selected Product
               </p>
               <div className='mt-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
                  <div>
                     <h3 className='text-2xl font-semibold'>
                        {selectedProduct.name}
                     </h3>
                     <p className='mt-1 text-gray-400'>
                        {selectedProduct.category}
                     </p>
                  </div>
                  <p className='text-xl font-medium'>
                     {selectedProduct.price}
                  </p>
               </div>
               <button
                  onClick={() => setSelectedProduct(null)}
                  className='mt-4 text-sm underline underline-offset-4'
               >Clear Selection</button>
            </div>
         )}
      </section>

   )
}

export default ProductGrid