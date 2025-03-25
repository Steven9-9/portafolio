import React, { useState } from "react";
import Header from "./Header";
import Portada from "./Portada";
import Habilidades from "./Habilidades"; // Importa el componente Habilidades
import Proyectos from "./Proyectos";
// Asegúrate de tener estos componentes

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("portada");

  // Función para cambiar la sección actual
  const handleNavigation = (section: string) => {
    setCurrentSection(section);
  };

  // Renderiza la sección correspondiente
  const renderSection = () => {
    switch (currentSection) {
      case "habilidades":
        return <Habilidades />;
      case "portada":
      default:
        return <Portada />;
      case "proyectos" :
        return <Proyectos />
    }
  };

  return (
    <div>
      <Header onNavigate={handleNavigation} />
      <main>
        {renderSection()}
      </main>
    </div>
  );
};

export default App;
