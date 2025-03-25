import React, { useState, useEffect } from "react";
import "../styles/welcome.css";

const WelcomeScreen: React.FC = () => {
  const [animationClass, setAnimationClass] = useState("start");

  useEffect(() => {
    // Iniciar la entrada
    setAnimationClass("enter");

    // Esperar 2.5 segundos en la pantalla y luego salir
    const timer = setTimeout(() => {
      setAnimationClass("exit");
    }, 2500); // Se mantiene 2.5s antes de salir

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`welcome-screen ${animationClass}`}>
      <h1>¡Bienvenido!</h1>
    </div>
  );
};

export default WelcomeScreen;
