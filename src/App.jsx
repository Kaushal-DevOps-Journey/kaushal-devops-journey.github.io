import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseFollower from "./components/MouseFollower";
import TechStackMarquee from "./components/TechStackMarquee";
import Experience from "./components/Experience";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white cursor-none">
      <MouseFollower />
      <Navbar />
      <Hero />
      <TechStackMarquee />
      <About />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
