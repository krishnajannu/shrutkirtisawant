import Hero from './components/Hero';
import About from './components/About';
import Featured from './components/Featured';
import Filmography from './components/Filmography';
import Theatre from './components/Theatre';
import Awards from './components/Awards';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-magenta-950 min-h-screen overflow-x-hidden w-full">
      <Hero />
      <About />
      <Featured />
      <Filmography />
      <Theatre />
      <Awards />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;