import React from 'react';

// Reemplazá estos imports con tus propias fotos
import facialImg from '../recursos/facial.jpg';
import corporalImg from '../recursos/corporal.jpg';
import uniasImg from '../recursos/unias.png';
import cabellosImg from '../recursos/cabello.jpg';

const servicios = [
  {
    id: 1,
    subtitulo: 'Facial',
    descripcion: 'Tratamientos faciales personalizados para cada tipo de piel. Limpieza profunda, hidratación, y cuidado especializado que realza tu belleza natural con técnicas profesionales.',
    imagen: facialImg, 
    imageAlt: 'Tratamiento Facial',
  },
  {
    id: 2,
    subtitulo: 'Corporal',
    descripcion: 'Masajes y tratamientos corporales diseñados para relajar, tonificar y revitalizar tu cuerpo. Una experiencia única que combina técnicas tradicionales y modernas.',
    imagen: corporalImg,
    imageAlt: 'Tratamiento Corporal',
  },
  {
    id: 3,
    subtitulo: 'Manicura y Pedicura',
    descripcion: 'Cuidado completo de tus pies con técnicas de relajación y embellecimiento. Incluye exfoliación, hidratación y esmaltado profesional para un resultado impecable.',
    imagen: uniasImg,
    imageAlt: ' Manicura y Pedicura',
  },
  {
    id: 4,
    subtitulo: 'Cabello',
    descripcion: 'Servicios integrales de peluquería: corte, coloración, keratina y tratamientos de nutrición. Tu cabello merece el mejor cuidado con productos de primera calidad.',
    imagen: cabellosImg,
    imageAlt: 'Tratamiento de Cabello',
  },
];

function Servicios() {
  return (
    <section
      id="servicios"
      style={{
        background: 'rgb(141, 109, 143)',
        paddingTop: '5rem',
        paddingBottom: '6rem',
      }}
    >
      {/* Título principal */}
      <h2
        style={{
          fontFamily: 'Raleway, sans-serif',
          fontSize: '5rem',
          color: 'white',
          textAlign: 'center',
          textShadow: '4px 4px 6px rgba(255, 148, 61, 0.7)',
          marginBottom: '4rem',
          marginTop: '6rem',
        }}
      >
        Servicios
      </h2>

      {/* Contenedor principal centrado con ancho máximo */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        {servicios.map((servicio, index) => {
          const esPar = index % 2 === 0;
          return (
            <div
              key={servicio.id}
              style={{
                display: 'flex',
                flexDirection: esPar ? 'row' : 'row-reverse',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '5rem',
                gap: '2rem',
              }}
            >
              {/* Imagen */}
              <div
                style={{
                  flex: '1 1 350px',
                  display: 'flex',
                  justifyContent: 'center',
                  order:1,
                }}
              >
                <img
                  src={servicio.imagen}
                  alt={servicio.imageAlt}
                  style={{
                    width: '100%',
                    maxWidth: '420px',
                    aspectRatio: '4 / 3',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    filter: 'drop-shadow(0 0 10px rgba(235, 73, 250, 0.5))',
                    border: '1px solid rgba(239, 87, 253, 0.3)',
                  }}
                />
              </div>

              {/* Texto */}
              <div
                style={{
                  flex: '1 1 350px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '1rem 2rem',
                  order: 2,
                }}
              >
                {/* Línea decorativa */}
                <div
                  style={{
                    width: '50px',
                    height: '3px',
                    background: 'rgba(234, 0, 255, 0.8)',
                    marginBottom: '1rem',
                    boxShadow: '0 0 8px rgba(234, 0, 255, 0.8)',
                  }}
                />

                <h3
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                    color: 'white',
                    textShadow: '4px 4px 6px rgba(255, 115, 0, 0.7)',
                    marginBottom: '1rem',
                  }}
                >
                  {servicio.subtitulo}
                </h3>

                <p
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
                    color: 'white',
                    lineHeight: '1.8',
                    opacity: '0.9',
                    textShadow: '0 0 9px rgba(255, 217, 0, 0.5)',
                  }}
                >
                  {servicio.descripcion}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Servicios;