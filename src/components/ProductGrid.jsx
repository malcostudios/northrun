import ProductCard from './ProductCard'
import products from '../data/products' 

function ProductGrid() {
   return (
      <section className="px-6 py-24">
         <div className="mb-12 flex items-end justify-between">
            <div>
               <p className='text-sm font-medium uppercase tracking-[0.2em] text-lime-400'>Featured Collection</p>
               <h2 className='mt-3 text-4xl font-bold tracking-tight md:text-5xl'>Built to go further.</h2>
            </div>
            <a href="#" className='hidden text-sm font-medium underline underline-offset-4 md:block'>View all products</a>
         </div>
         <div className='grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
            {
               products.map((product) =>
                  <ProductCard
                     key={product.id}
                     name={product.name}
                     category={product.category}
                     price={product.price}
                     image={product.image}
                     badge={product.new}
                  />
               )
            }
         </div>
      </section>
   )
}

export default ProductGrid