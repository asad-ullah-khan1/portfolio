
import './App.css';
import About from './components/About'
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';


function App() {
  return (
    <main className='text-gray-400 bg-cyan-900 body-font'>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
    </main>
  );
}

export default App;
