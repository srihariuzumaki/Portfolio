import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';

import Projects from './sections/Projects.jsx';
import CustomCursor from './components/CustomCursor';

const App = () => {
  return (
    <div className="overflow-hidden">
      <CustomCursor />
      <div className="container mx-auto px-4">
        <main className="max-w-[2000px] mx-auto relative">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          
          
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
