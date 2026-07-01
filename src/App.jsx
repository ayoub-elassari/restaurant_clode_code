import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import MenuPreview from "./components/sections/MenuPreview"
import SpecialOffers from "./components/sections/SpecialOffers"
import Gallery from "./components/sections/Gallery"
import Testimonials from "./components/sections/Testimonials"
import Reservation from "./components/sections/Reservation"
import Contact from "./components/sections/Contact"

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuPreview />
        <SpecialOffers />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
