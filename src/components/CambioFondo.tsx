import React, { useState } from "react";
import { Settings } from "lucide-react";
import "../styles/cambioFondo.css"

const videos = [
  { id: 1, src: "/assets/videos/fondo1.mp4", label: "Opción 1" },
  { id: 2, src: "/assets/videos/fondo2.mp4", label: "Opción 2" },
  { id: 3, src: "/assets/videos/fondo3.mp4", label: "Opción 3" },
  { id: 4, src: "/assets/videos/fondo4.mp4", label: "Opción 4" },
];

const CambioFondo: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState(videos[0].src);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="video-container">
      {/* Video de fondo */}
      <video key={videoSrc} autoPlay loop muted playsInline className="video-bg">
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Botón de configuración */}
      <div className="config-button" onClick={() => setShowMenu(!showMenu)}>
        <Settings size={24} />
      </div>

      {/* Menú de opciones */}
      {showMenu && (
        <div className="config-menu">
          {videos.map((video) => (
            <button key={video.id} onClick={() => setVideoSrc(video.src)}>
              {video.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CambioFondo;
