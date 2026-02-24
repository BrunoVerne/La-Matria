// PortadaSection.jsx
// Sección principal con foto de la estética y frase representativa.
// Bootstrap útil: jumbotron, ratio, object-fit, text-center, py-*, bg-*, text-white

import React from 'react';
import lamatria from '../images/lamatria.png';

function PortadaSection() {
  return (
    <div className="hero-full d-flex align-items-center" style={{ border: '0.3rem solid rgba(57, 0, 0,0.9)', backgroundColor: 'rgba(100, 0, 32, 0.3)'}}>
      <div className="col-10 d-flex flex-column align-items-center justify-content-center">
        <h1  className="display-1 fw-bold" style={{ fontFamily: 'Dancing Script, cursive'  }}>La Matria</h1>
        <p className="lead" style={{ fontFamily: 'Dancing Script, cursive'  }}>Centro de estética para cuerpos no hegemónicos</p>
      </div>
      <div className="col-2 d-flex justify-content-end">
        <img src={lamatria} alt="La Matria" className="img-fluid" style={{ maxHeight: '20vh' }} />
      </div>
    </div>
  );
}


export default PortadaSection;