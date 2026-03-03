import { useLanguage } from "../context/LanguageContext";
import "../styles/Contact.css"

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact">
      <div className="contact-card">
        <h2>{t.contact}</h2>

        <div className="contact-links">
          <a href="mailto:luedruba18@gmail.com">
            📧 luedruba18@gmail.com
          </a>

          <a href="https://www.linkedin.com/in/luis-eduardo-ruiz-bautista-100532259/" target="_blank">
            💼 LinkedIn
          </a>

          <a href="https://github.com/LuisE1998" target="_blank">
            💻 GitHub
          </a>
          <button className="primary-btn" onClick={() => {
                const section = document.getElementById("about");
                section?.scrollIntoView({ behavior: "smooth" });
                }}>
                    {t.aboutMe}
            </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
