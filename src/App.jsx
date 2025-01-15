import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';

import Projects from './sections/Projects.jsx';
import CustomCursor from './components/CustomCursor';

const App = () => {
  return (
    <div>
      <CustomCursor />
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        
        
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
