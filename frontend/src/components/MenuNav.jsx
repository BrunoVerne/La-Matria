import React from 'react';

function MenuNav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
<nav className="d-flex flex-wrap justify-content-center" style={{ background:'rgb(88, 52, 90)',
                                                                        gap: 'clamp(1rem, 4vw, 7rem)', 
                                                                        fontFamily: 'Raleway , sans-serif', color: 'rgb(0,0,0)',
                                                                        paddingTop: 'clamp(0.8rem, 2vw, 3rem)', 
                                                                        paddingBottom: 'clamp(0.8rem, 2vw, 3rem)',
                                                                        position: 'sticky', 
                                                                        top:0,  
                                                                        zIndex: 1000,     
                                                                        }}>
    <button className="btn btn-outline-light btn-lg" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.9)'}} onClick={() => scrollTo('quienes-somos')}>Quiénes somos</button>
    <button className="btn btn-outline-light btn-lg" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.9)'}} onClick={() => scrollTo('servicios')}>Servicios</button>
    <button className="btn btn-outline-light btn-lg" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.9)'}} onClick={() => scrollTo('contacto')}>Contacto</button>
    <button className="btn btn-outline-light btn-lg" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.9)'}} onClick={() => scrollTo('faq')}>Preguntas frecuentes</button>
    </nav>
  );
}

export default MenuNav;