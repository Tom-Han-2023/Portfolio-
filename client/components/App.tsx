import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import About from './component/About'
import StarsCanvas from './component/Canvas/Star'
import Contact from './component/Contact'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Projects from './component/Projects'
import Technology from './component/Technology'

function App() {
  useEffect(() => {})

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
          <Technology />
        </div>
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
