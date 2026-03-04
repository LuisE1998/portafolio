import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaJs
} from "react-icons/fa";

import {
  SiTypescript,
  SiSpringboot,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiMongodb
} from "react-icons/si";

import "../styles/Skills.css"
import { useLanguage } from "../context/LanguageContext";


const skills = (t: any) => [
  {
    category: t.languages,
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> }
    ]
  },
  {
    category: "Frameworks",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> }
    ]
  },
  {
    category: t.databases,
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> }
    ]
  },
  {
    category: t.tools,
    items: [
      { name: "GitHub", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> }
    ]
  }
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="skills" id="skills">
      <h2>{t.skills}</h2>

      <div>
        {skills(t).map((skill) => (
          <div
            key={skill.category}
          >
            <h3>
              {skill.category}
            </h3>

            <div>
              {skill.items.map((item) => (
                <div
                  key={item.name}
                >
                  {item.icon}
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
