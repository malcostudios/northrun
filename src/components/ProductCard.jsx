function ProductCard ({ name, category, price, image, onSelect }) {
   return (
      <button
         onClick={onSelect}
         className="group block w-full text-left"
      >
         <div className="aspect-square overflow-hidden bg-neutral-900">
            <img
               src={image}
               alt={name}
               className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
         </div>
         <div className="mt-4 flex items-start justify-between gap-4">
            <div>
               <p className="text-sm text-gray-500">
                  {category}
               </p>
               <h3 className="mt-1 font-medium">
                  {name}
               </h3>
            </div>
            <p className="font-medium">
               {price}
            </p>
         </div>
      </button>
   )
}

export default ProductCard