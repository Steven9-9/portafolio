import React, { useRef } from 'react';
import '../styles/portada.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Navigation, Pagination } from 'swiper/modules';
import fotoPerfil from '../assets/img/foto5_fotor.png';
import fotoPerfil2 from '../assets/img/foto4fondonarana.jpg';
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
            <div className="welcome">
              <p className="saludo">
                <h5>Hola, soy</h5>
                <h2>
                  JOHN STEVEN GARCIA ROJAS <br /> Soy asistente en Desarrollo de Software
                </h2>
                <h4>
                  Mi pasión por la programación me ha llevado a especializarme en el desarrollo de aplicaciones
                  web, utilizando las últimas tecnologías y mejores prácticas de la industria.
                  Estoy constantemente aprendiendo y adaptándome a nuevas tecnologías para mantenerme al día en este
                  campo en rápida evolución. Si estás buscando un desarrollador comprometido y apasionado,
                  <br /> ¡no dudes en contactarme!
                </h4>
              </p>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide className='slide2'>
            <section className="photo2">
              <img src={fotoPerfil2} alt="Otra imagen" className="photo-img2" />
            </section>
            <div className="welcome">
              <p className="saludo">
                <h5>Slide 2</h5>
                <h2>Otro Título</h2>
                <h4>Descripción para el segundo slide.</h4>
              </p>
            </div>
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide className='slide3'>
            <section className="photo3">
              <img src={fotoPerfil3} alt="Tercera imagen" className="photo-img3" />
            </section>
            <div className="welcome">
              <p className="saludo">
                <h5>Slide 3</h5>
                <h2>Más Información</h2>
                <h4>Detalles adicionales en este slide.</h4>
              </p>
            </div>
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
