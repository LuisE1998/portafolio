import "../styles/Hero.css"
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="container">
        <h1>{t.greeting}</h1>
        <h2>{t.role}</h2>
        <button className="primary-btn" onClick={() => {
          const section = document.getElementById("contact");
          section?.scrollIntoView({ behavior: "smooth" });
        }}>
          {t.contactMe}
        </button>
      </div>
    </section>
  );
};

export default Hero;
