// PortadaSection.jsx
import React from 'react';
import lamatria from '../recursos/lamatria.png';

function PortadaSection() {
  return (
    <div
      className="hero-full text-center position-relative"
      style={{
        border: '0.3rem solid rgba(32, 17, 39, 0.9)',
        background: 'rgb(255, 233, 250)',
        minHeight: '30vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
      }}
    >
      {/* En mobile: todo centrado en columna completa
          En desktop: layout de 3 columnas con la imagen a la derecha */}
      <div className="row w-100 align-items-center">

        {/* Columna izquierda vacía — solo visible en desktop */}
        <div className="d-none d-md-block col-md-2" />

        {/* Contenido central — ocupa todo en mobile, 8/12 en desktop */}
        <div className="col-12 col-md-8 d-flex flex-column align-items-center justify-content-center">
          <h1
            style={{
              fontFamily: 'Parisienne, cursive',
              color: 'rgba(104, 16, 85, 0.9)',
              fontSize: 'clamp(3.5rem, 10vw, 8rem)',
              lineHeight: 1.1,
            }}
          >
            La Matria
          </h1>

          <p
            className="mb-0"
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontSize: 'clamp(1.1rem, 3.5vw, 2.2rem)',
              color: 'rgba(145, 114, 153, 0.9)',
              letterSpacing: '0.08em',
              WebkitTextStroke: '0.5px rgb(27, 9, 27)',
              maxWidth: '520px',
            }}
          >
            Centro de estética para cuerpos no hegemónicos
          </p>
        </div>

        {/* Logo — solo visible en desktop, alineado a la derecha */}
        <div className="d-none d-md-flex col-md-2 justify-content-end align-items-center">
          <img
            src={lamatria}
            alt="La Matria"
            className="img-fluid"
            style={{
              maxHeight: '20vh',
              filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.8))',
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default PortadaSection;