import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Performance from './components/Performance'

function App() {
  return (
    <div className="min-h-screen bg-[#161616] text-white">

      <Navbar />
      <Hero />
      <ProductGrid />
      <Performance />

    </div>  
  )
}

export default App