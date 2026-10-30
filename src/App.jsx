import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import PracticeAreas from './components/PracticeAreas/PracticeAreas'
import Differentials from './components/Differentials/Differentials'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Locations from './components/Locations/Locations'
import FAQ from './components/FAQ/FAQ'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Differentials />
        <HowItWorks />
        <Locations />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
