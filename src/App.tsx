import "./App.css"
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from './components/Hero';
import LanguageToggle from './components/LanguageToggle';
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <LanguageToggle />
      <Hero />
      <Contact />
      <About />
      <Skills />
    </>
  );
}

export default App;
