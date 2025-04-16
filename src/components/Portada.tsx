import React, { useRef } from 'react';
import '../styles/portada.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Navigation, Pagination } from 'swiper/modules';
import fotoPerfil from '../assets/img/Portfolio_Presentation_01.jpg';
import fotoPerfil2 from '../assets/img/Portfolio_Presentation_02.jpg';
import fotoPerfil3 from '../assets/img/foto6.jpeg';
import CambioFondo from './CambioFondo';

const Portada: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="container">
        <Swiper
          direction='horizontal'
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true, type: 'bullets' }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          className="swiper-container"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <section className="photo">
              <img src={fotoPerfil} alt="Foto de perfil" className="photo-img" />
            </section>
            {/* <div className="welcome text1">
              <p className="saludo">
                <h5>Hola, soy</h5>
                <h2>
                  JOHN STEVEN GARCIA ROJAS <br /> Soy Asistente en Desarrollo de Software
                </h2>
              </p>
            </div> */}
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <section className="photo">
              <img src={fotoPerfil2} alt="Otra imagen" className="photo-img" />
            </section>
            {/* <div className="welcome">
              <p className="saludo text2">
                <h5>CONOCE</h5>
                <h2>UN POCO SOBRE MI</h2>
                <h4>       
                Soy técnico en el ámbito tecnológico con sólidos conocimientos en software de vanguardia como Vtex IO, React, MySQL entre otros lenguajes de programación. Mi experiencia se ha centrado en el rol de asistente en desarrollo frontend, donde he demostrado un fuerte compromiso con mis responsabilidades laborales y un elevado sentido humano. Destaco por mi disposición constante hacia el aprendizaje y mi integridad, caracterizándome por ser una persona honesta, paciente y sumamente organizada. Poseo una notable habilidad para priorizar tareas, lo que me permite generar soluciones ágiles y efectivas. Mi orientación al logro y mi capacidad para trabajar en equipo se complementan con mi habilidad para seguir normativas y mi competencia en comunicación oral y escrita, elementos que considero fundamentales para el éxito en cualquier proyecto.
                  
                </h4>
              </p>
            </div> */}
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide>
            <section className="photo">
              <img src={fotoPerfil3} alt="Tercera imagen" className="photo-img" />
            </section>
            {/* <div className="welcome">
              <p className="saludo">
                <h5>Slide 3</h5>
                <h2>Más Información</h2>
                <h4>Detalles adicionales en este slide.</h4>
              </p>
            </div> */}
          </SwiperSlide>
        </Swiper>
        {/* Botones de navegación personalizados */}
        <div ref={prevRef} className="custom-nav prev-nav">
          <IoIosArrowBack size={40} color="white" />
        </div>
        <div ref={nextRef} className="custom-nav next-nav">
          <IoIosArrowForward size={40} color="white" />
        </div>
      </div>
      <CambioFondo />
    </>
  );
};

export default Portada;
