import React from 'react';

function MenuNav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
<nav className="d-flex flex-wrap justify-content-center" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.9),rgb(28, 0, 29)',
                                                                        gap: '7rem',
                                                                        fontFamily: 'Raleway , sans-serif', color: 'rgb(0,0,0)',
                                                                        boxShadow: '0 0 20px rgba(234, 0, 255, 0.9)',
                                                                        paddingTop: '3rem',
                                                                        paddingBottom: '3rem'
                                                                        }}>
    <button className="btn btn-outline-light btn-lg" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.9)'}} onClick={() => scrollTo('quienes-somos')}>Quiénes somos</button>
    <button className="btn btn-outline-light btn-lg" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.9)'}} onClick={() => scrollTo('servicios')}>Servicios</button>
    <button className="btn btn-outline-light btn-lg" style={{ boxShadow: '0 4px 15px rgba(29, 20, 20, 0.9)'}} onClick={() => scrollTo('donde-estamos')}>Dónde estamos</button>
    <button className="btn btn-outline-light btn-lg" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.9)'}} onClick={() => scrollTo('contacto')}>Contacto</button>
    <button className="btn btn-outline-light btn-lg" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.9)'}} onClick={() => scrollTo('faq')}>Preguntas frecuentes</button>
    </nav>
  );
}

export default MenuNav;