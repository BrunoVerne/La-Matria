import React from 'react';

function QuienesSomos() {
  return (
    <section id="quienes-somos" className="d-flex align-items-center py-5" style={{ background: 'rgba(100, 0, 32, 0.6)',
                                                                                        minHeight: '30vh',
                                                                                        border: '0.1rem solid rgba(57, 0, 0,0.9)'}}>
      
      <div className="col-4 text-center">
        <h2 style={{ fontFamily: 'Raleway , sans-serif', fontSize: '4rem', color: 'white'}}>
          Quiénes somos
        </h2>
      </div>

      <div className="col-8 px-5">
        <p className="lead" style={{ color: 'white', fontFamily: 'Raleway , sans-serif', fontSize: '2rem'}}>
          Somos una cooperativa que nació con el fin de matar a todos los jubilados y esparcir el comunismo por toda latinoamérica, somos de Ferro Carril Oeste
          y nos gusta mucho la marihuana. Somos una cooperativa que nació con el fin de matar a todos los jubilados y esparcir el comunismo por toda latinoamérica, somos de Ferro Carril Oeste
          y nos gusta mucho la marihuana
        </p>
      </div>

    </section>
  );
}

export default QuienesSomos;