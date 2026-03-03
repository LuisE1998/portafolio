import { useLanguage } from "../context/LanguageContext";
import "../styles/About.css"

const About = () => {
    const { t } = useLanguage();
    
    return (
        <section id="about" className="about">
        <div className="about-container">
            <h2>{t.aboutMe}</h2>
            <p>{t.aboutMeResume}</p>
            <button className="primary-btn" onClick={() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
                }}>
                    {t.myProyects}
            </button>
        </div>
        </section>
    );
};

export default About;
