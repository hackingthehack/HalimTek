import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
// import DarkModeToggle from './components/DarkModeToggle.jsx'
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
  AOS.init({ duration: 800, once: true });
}, []);

  return (
    <>
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">

      
      <Navbar />
      {/* <DarkModeToggle /> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
     <Footer />

     </>
  )
}

export default App
