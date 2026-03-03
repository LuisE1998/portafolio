import "./App.css"
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from './components/Hero';
import LanguageToggle from './components/LanguageToggle'

function App() {
  return (
    <>
      <LanguageToggle />
      <Hero />
      <Contact />
      <About />
    </>
  );
}

export default App;
