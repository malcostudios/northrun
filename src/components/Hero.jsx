function Hero() {
   return (
      <section className="px-6 py-24 sm:px-6 md:py-32">
        <div className="max-auto max-w-7xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-lime-400">Performance / Outdoor</p>
          <h2 className="max-w-5xl text-5xl font-bold leading-[0.9] tracking-[0.04em] sm:text-6xl md:text-8xl">
            Find Your <span className="text-lime-400">Distance.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
            Technical performance designed for wherever the next kilometer takes you.
          </p>
          <a href="#collection" className="mt-10 inline-block bg-lime-400 px-6 py-3 font-medium text-black transition hover:bg-lime-300">
              Explore Collection
          </a>
        </div>
      </section>
   )
}

export default Hero