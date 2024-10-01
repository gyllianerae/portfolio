import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Navbar from './sections/Navbar/Navbar';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Header from './sections/Header/Header';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
