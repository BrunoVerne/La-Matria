import React from 'react';

function MenuNav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
<nav className="d-flex flex-wrap justify-content-center py-4" style={{ background: 'rgba(17, 0, 0, 0.9)',
                                                                        border: '0.3rem solid rgba(0, 0, 0, 0.9)',
                                                                        gap: '7rem',
                                                                        fontFamily: 'Raleway , sans-serif', color: 'rgb(0,0,0)'}}>
    <button className="btn btn-outline-light btn-lg" onClick={() => scrollTo('quienes-somos')}>Quiénes somos</button>
    <button className="btn btn-outline-light btn-lg" onClick={() => scrollTo('servicios')}>Servicios</button>
    <button className="btn btn-outline-light btn-lg" onClick={() => scrollTo('donde-estamos')}>Dónde estamos</button>
    <button className="btn btn-outline-light btn-lg" onClick={() => scrollTo('contacto')}>Contacto</button>
    <button className="btn btn-outline-light btn-lg" onClick={() => scrollTo('faq')}>Preguntas frecuentes</button>
    </nav>
  );
}

export default MenuNav;