import React from 'react';
import cuerpos_autenticos from '../recursos/cuerpos_autenticos.png';
import aceptarse from '../recursos/aceptarse.png';
import transformarse from '../recursos/transformar.png';






function QuienesSomos() {
  return (
  <section id="quienes-somos" className="d-flex flex-wrap align-items-center" style={{ 
                  background: 'rgba(100, 0, 32, 0.6)',
                  minHeight: '50vh',
                  border: '0.1rem solid rgba(0, 0, 0, 0.9)',
                  paddingBottom: '10rem'

                  }}>

    {/* Izquierda — título grande centrado */}
    <div className="col-12 col-md-6 d-flex flex-column justify-content-start align-items-center gap-3" style={{ minHeight: '50vh',  }}>
      <h2 style={{ fontFamily: 'Raleway, sans-serif', textShadow: '4px 4px 6px rgba(255, 115, 0, 0.7)' , fontSize: '6.1rem', color: 'white',textAlign: 'center', paddingTop: '2rem' }}>
        Quiénes<br/>somos
      </h2>
      <div className="d-flex gap-4" >
        
        <img src={aceptarse} alt="La Matria" className="img-fluid rounded-1" style={{
            width: '60%',
            objectFit: 'cover', 
            filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.8))', 
            display: 'block', margin: '0 auto',
            paddingLeft: '3rem' 
            }} />

        <img src={transformarse} alt="La Matria" className="img-fluid rounded-1" style={{
          width: '60%', 
          objectFit: 'cover', 
          filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.8))', 
          display: 'block', margin: '0 auto',
          paddingLeft: '4rem',
          paddingRight: '4rem',
          }} />

      </div>
    </div>

    <div className="col-12 col-md-6 d-flex flex-column px-5 gap-4">

      <p className="lead" style={{ 
        color: 'white',
        fontFamily: 'Raleway, sans-serif',
        fontSize: 'clamp(1rem, 2vw, 2rem)',
        lineHeight: '1.7',
        opacity: '0.9',
        textAlign: 'center',
        paddingTop: '2rem',
        textShadow: '0 0 9px rgba(255, 217, 0, 0.8)',
        


      }}>
        Somos una cooperativa que nació con el fin de matar a todos los jubilados y esparcir el comunismo por toda latinoamérica, somos de Ferro Carril Oeste
        y nos gusta mucho la marihuana.
      </p>

      <div className="d-flex gap-1">
        <img src={cuerpos_autenticos} alt="La Matria" className="img-fluid rounded-1" style={{ 
                      width: '73%',
                      objectFit: 'cover',
                      filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.8))',
                      display: 'block', margin: '0 auto',
                      paddingLeft: '6rem' }} />
      </div>

    </div>

  </section>
  );
}

export default QuienesSomos;