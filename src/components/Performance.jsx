function Performance() {
   return (
      <section className="px-6 py-24 md:py-32">
         <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* Image */}
            <div className="aspect-[4/5] overflow-hidden bg-neutral-900 rounded-2xl">
               <img
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5"
                  alt="Runner wearing NORTHRUN performance gear"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
               />
            </div>

            {/* Content */}
            <div>
               <p className="text-sm font-medium uppercase tracking-[0.2em] text-lime-500">Performance Technology</p>
               <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Designed for the distance.</h2>
               <p className="mt-6 text-lg leading-relaxed text-gray-400">
                  Every NORTHRUN product is designed to help you move confidently through every kilometer.
               </p>
               <div className="mt-12 space-y-8">
                  <div className="border-t border-neutral-800 pt-6">
                     <div className="flex items-start gap-6">
                        <span className="text-sm text-gray-500">01</span>
                        <div>
                           <h3 className="text-xl font-semibold">Responsive Cushioning</h3>
                           <p className="mt-3 text-gray-400">Soft where you need it. Responsive when you need more.</p>
                        </div>
                     </div>
                  </div>
                  <div className="border-t border-neutral-800 pt-6">
                     <div className="flex items-start gap-6">
                        <span className="text-sm text-gray-500">02</span>
                        <div>
                           <h3 className="text-xl font-semibold">Trail-Ready Grip</h3>
                           <p className="mt-3 text-gray-400">Built for confidence across changing terrain.</p>
                        </div>
                     </div>
                  </div>
                  <div className="border-t border-neutral-800 pt-6">
                     <div className="flex items-start gap-6">
                        <span className="text-sm text-gray-500">03</span>
                        <div>
                           <h3 className="mt-4 text-xl font-semibold">Lightweight Construction</h3>
                           <p className="mt-3 text-gray-400">Less weight means more freedom to keep moving.</p>
                        </div>
                     </div>
                  </div>
                  <div className="border-t border-neutral-800 pt-6">
                     <div className="flex items-start gap-6">
                        <span className="text-sm text-gray-500">04</span>
                        <div>
                           <h3 className="mt-4 text-xl font-semibold">Breathable Materials</h3>
                           <p className="mt-3 text-gray-400">Engineered fabrics designed to keep you comtable when the miles start adding up.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Performance