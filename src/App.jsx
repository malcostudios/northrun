import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Performance from './components/Performance'
import BrandStatement from './components/BrandStatement'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#161616] text-white">

      <Navbar />

      <main>
        <Hero />
        <ProductGrid />
        <Performance />
        <BrandStatement />
      </main>
      
      <Footer />

    </div>  
  )
}

export default App