import React from 'react';
import cuerpos_autenticos from '../recursos/cuerpos_autenticos.png';
import aceptarse from '../recursos/aceptarse.png';




function QuienesSomos() {
  return (
  <section id="quienes-somos" className="d-flex flex-wrap align-items-center" style={{ 
                  background: 'rgb(178, 147, 180)',
                  minHeight: '50vh',
                  paddingTop: '10rem',
                  }}>

    {/* Izquierda — título grande centrado */}
    <div className="col-12 col-md-6 d-flex flex-column justify-content-start align-items-center gap-3" style={{ minHeight: '50vh' }}>
      <h2 style={{ fontFamily: 'Raleway, sans-serif', textShadow: '4px 4px 6px rgba(245, 188, 255, 0.7)' , fontSize: 'clamp(2.5rem, 8vw, 6.1rem)', color: 'rgba(112, 89, 117, 0.9)', textAlign: 'center', paddingTop: '2rem' }}>
        ¿Quiénes<br/>somos?
      </h2>

      <div className="d-flex justify-content-center align-items-center w-100" style={{ padding: '0 2rem' }}>
        <img src={aceptarse} alt="Aceptarse" className="img-fluid rounded-1" style={{
            width: '60%',
            maxWidth: '280px',
            objectFit: 'cover', 
            filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.8))', 
            paddingTop: '12rem',
            paddingBottom: '6rem',


            }} />
      </div>
    </div>

    {/* Derecha — texto + imagen */}
    <div className="col-12 col-md-6 d-flex flex-column justify-content-start align-items-center px-5 gap-4">

      <p className="lead" style={{ 
        color: 'rgba(255, 255, 255, 0.9)',
        fontFamily: 'Raleway, sans-serif',
        fontSize: 'clamp(1rem, 2vw, 2rem)',
        lineHeight: '1.7',
        opacity: '0.9',
        textAlign: 'center',
        paddingTop: '2rem',
        textShadow: '0 0 9px rgba(255, 214, 253, 0.8)',
      }}>
        Somos un espacio de estética pensado para cuerpos reales y diversos. Creemos en el bienestar, 
        el cuidado y la belleza sin estereotipos ni moldes impuestos. Nuestro objetivo es acompañar a cada persona a sentirse cómoda,
        segura y valorada en su propio cuerpo, celebrando la diversidad y promoviendo una estética inclusiva.
      </p>

      <div className="d-flex justify-content-center align-items-center w-100">
        <img src={cuerpos_autenticos} alt="Cuerpos Auténticos" className="img-fluid rounded-1" style={{ 
          width: '60%',
          maxWidth: '280px',
          objectFit: 'cover',
          filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.8))',
          paddingTop: '3rem',
          paddingBottom: '6rem',


        }} />
      </div>

    </div>

  </section>
  );
}

export default QuienesSomos;