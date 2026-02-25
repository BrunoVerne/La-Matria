// PortadaSection.jsx
// Sección principal con foto de la estética y frase representativa.


import React from 'react';
import lamatria from '../recursos/lamatria.png';

function PortadaSection() {
  return (
    <div className="hero-full text-center position-relative" style={{ border: '0.3rem solid rgba(0, 0, 0, 0.9)', background: 'rgba(0, 0, 0, 0.9)' }}>

      <div className="col-2">
        {/* espacio vacío para equilibrar */}
      </div>


      <div className="col-8 d-flex flex-column align-items-center justify-content-center">
        <h1  className="display-1 fw-bold" style={{ fontFamily: 'Raleway , sans-serif',
                                                    color: 'rgb(255, 255, 255)',
                                                    textShadow: '0 0 12px rgba(219, 132, 0, 0.9)',
                                                  fontSize: '7rem'}}
          >La Matria
        </h1>


        <p className="lead" style={{ fontFamily: 'Raleway , sans-serif',
                                      fontSize: '2.7rem',
                                      color: 'rgba(167, 160, 163, 0.9)',
                                      letterSpacing: '0.1em',
                                      WebkitTextStroke: '1px rgb(17, 2, 2)',
                                      textShadow: '0 0 4px rgba(255, 60, 0, 0.8)' }}
                                      >Centro de estética para cuerpos no hegemónicos</p>
      </div>

      <div className="col-2 d-flex justify-content-end">
        <img src={lamatria} alt="La Matria" className="img-fluid" style={{ maxHeight: '20vh', filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.8))' }} />
      </div>


    </div>
  );
}


export default PortadaSection;