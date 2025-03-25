import React, { useState } from "react";
import "../styles/habilidades.css";
import CambioFondo from "./CambioFondo";

interface Skill {
  name: string;
  icon: string;
  description: string;
}

const skills: Skill[] = [
  { name: "JavaScript", icon: "/src/assets/icons/js.png", description: "Tengo experiencia en JavaScript para la manipulación del DOM, desarrollo de interfaces interactivas y comunicación con el servidor mediante API. He trabajado en entornos de frontend y backend dentro del ecosistema de React, optimizando el rendimiento y la arquitectura de aplicaciones web. Tambien, he implementado animaciones dinámicas para mejorar la experiencia de usuario y la interactividad en sitios web." },
  { name: "TypeScript", icon: "/src/assets/icons/ts.png", description: "He trabajado principalmente con TypeScript en el desarrollo frontend, ya que me permite escribir código de manera más organizada y ágil. Su tipado fuerte y estructura me ayudan a mantener los componentes reutilizables y escalables, lo que facilita la mantenibilidad del sitio y mejora la calidad del desarrollo." },
  { name: "React", icon: "/src/assets/icons/visual-react.png", description: "La mayor parte de mi desarrollo la he realizado en React, ya que sus bibliotecas ofrecen soluciones completas para el desarrollo frontend. Sus hooks son herramientas clave para gestionar el estado de las aplicaciones de manera eficiente, mientras que su virtual DOM optimiza el rendimiento y mejora la experiencia del usuario. Además, su estructura permite un flujo de código limpio y modular, lo que facilita la escalabilidad y el mantenimiento del proyecto. <br/> También, la experiencia en el uso de frameworks es fundamental para el desarrollo, ya que proporcionan herramientas y estructuras predefinidas que agilizan la creación de aplicaciones robustas y eficientes.  " },
  { name: "HTML", icon: "/src/assets/icons/html.png", description: "HTML es un lenguaje con el que me desenvuelvo ampliamente, ya que es la base para la estructuración de las páginas web. Desde el inicio de mis estudios, ha sido una herramienta fundamental en mi aprendizaje permitiéndome construir la arquitectura de los sitios y definir su contenido de manera semántica y accesible. Su integración con CSS y JavaScript me ha permitido desarrollar interfaces interactivas y optimizadas, asegurando una experiencia de usuario fluida y bien estructurada." },
  { name: "CSS", icon: "/src/assets/icons/css-3.png", description: "CSS, al igual que HTML, es un lenguaje que manejo con soltura, ya que ambos trabajan en conjunto para la construcción de interfaces web. Debido a mi enfoque en el desarrollo frontend, he trabajado extensamente con CSS para definir estilos, diseños responsivos y animaciones que mejoran la experiencia del usuario. Además, he utilizado diversas metodologías como Flexbox, Grid y preprocesadores como SASS para optimizar la organización del código y hacer que los estilos sean más mantenibles y escalables." },
  { name: "Python", icon: "/src/assets/icons/python.png", description: "Python es un lenguaje con el que estoy familiarizado y del cual tengo una buena base, aunque no he tenido la oportunidad de trabajarlo a profundidad. Sin embargo, reconozco su importancia, especialmente en el ámbito de la inteligencia artificial, el aprendizaje automático y el análisis de datos. Es un lenguaje versátil, con una sintaxis clara y una gran cantidad de bibliotecas especializadas, lo que lo convierte en una excelente opción para el desarrollo de soluciones avanzadas en IA y automatización. Considero que es un lenguaje al que vale la pena dedicarle tiempo, ya que su integración con tecnologías modernas es cada vez más relevante." },
  { name: "SQL", icon: "/src/assets/icons/base-de-datos.png", description: "En SQL también me he familiarizado y he desarrollado una sólida base de conocimiento. Su lógica me ha resultado intuitiva y fácil de comprender, lo que me ha permitido desenvolverme con fluidez en la gestión y manipulación de bases de datos. Me siento cómodo escribiendo consultas, optimizando búsquedas y estructurando datos de manera eficiente. Además, entiendo la importancia de SQL en el desarrollo de aplicaciones, ya que facilita la organización y recuperación de información de manera estructurada y eficiente." },
  { name: "Botpress", icon: "/src/assets/icons/botpress.png", description: "En Botpress, trabajé en un proyecto para desarrollar un bot para la empresa en la que laboré. Gracias a esta experiencia, adquirí un conocimiento profundo sobre el funcionamiento de esta plataforma y su integración en páginas web. Aprendí a diseñar flujos conversacionales, gestionar datos a través de nodos, conectar el bot con APIs externas y optimizar su rendimiento para brindar una experiencia más fluida y eficiente a los usuarios. Esta experiencia me permitió comprender mejor cómo funcionan los sistemas de automatización de respuestas y su impacto en la interacción con los clientes. " },
  { name: "Git", icon: "/src/assets/icons/git.png", description: "En Git, aprendí a trabajar con ramas, realizar forks, subir mis proyectos y gestionar el control de versiones de manera eficiente. Manejo la creación y administración de ramas para trabajar en funcionalidades sin afectar la versión principal del proyecto. Además, estoy familiarizado con herramientas como merge, rebase, pull requests y stash, lo que me permite colaborar en equipos de desarrollo de forma organizada. También he trabajado con plataformas como GitHub y GitLab para gestionar repositorios, revisar cambios y garantizar un flujo de trabajo estructurado en proyectos colaborativos." },
  { name: "Vtex", icon: "/src/assets/icons/vtex.png", description: "El framework de VTEX es en el que me especializo, ya que fue donde desarrollé toda mi práctica en la empresa en la que trabajé. Me enfoco principalmente en el desarrollo Front-End y en el área de e-commerce, lo que me ha permitido adquirir un profundo conocimiento en la plataforma. Manejo la estructura modular de VTEX IO, la creación y personalización de componentes en React, el uso de GraphQL para consultas eficientes y la optimización de la experiencia del usuario en tiendas en línea. Gracias a esta experiencia, entiendo a fondo el ecosistema de VTEX y su aplicación en el desarrollo de soluciones escalables y personalizadas para e-commerce." },
];

const Habilidades: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  return (

    <>
      
    <div className="skills-wrapper">
    <div className="habilidades">
          <h1>HABILIDADES</h1>
          </div> 
   <div className="presentation-container">   
        <div className="presentation-text">
          {activeSkill ? activeSkill.description : "Pasa el cursor sobre un icono para ver más información."}
        </div>
      </div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-card skill-${index}`}
            onMouseEnter={() => setActiveSkill(skill)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            {activeSkill?.name === skill.name && (
              <div className="skill-info">{skill.description}</div>
            )}
          </div>
        ))}
      </div>
      
    </div>
    <CambioFondo />
    </>
  );
};

export default Habilidades;
