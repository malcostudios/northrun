function ProductCard ({ name, category, price, image, badge }) {
   return (
      <article className="group">
         <div className="aspect-square bg-neutral-900">
            <p className="text-sm text-lime-400 z-10 bg-lime-400">{badge}</p>
            <img
               src={image}
               alt={name}
               className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
               />
         </div>
         <div className="mt-4 flex items-start justify-between gap-4">
            <div>
               <p className="text-sm text-gray-500">{category}</p>
               <h3 className="mt-1 font-medium">{name}</h3>
            </div>
            <p className="font-medium">{price}</p>
         </div>
      </article>
   )
}

export default ProductCard