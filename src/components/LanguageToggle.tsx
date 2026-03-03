import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="language-btn"
      onClick={toggleLanguage}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "8px 12px",
        cursor: "pointer",
        borderRadius: "6px",
        border: "1px solid #ccc"
      }}
    >
      {language === "es" ? "Inglés" : "Spanish"}
    </button>
  );
};

export default LanguageToggle;
