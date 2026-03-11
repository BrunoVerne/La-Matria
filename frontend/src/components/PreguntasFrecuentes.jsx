import React, { useState } from 'react';

const preguntas = [
  {
    pregunta: "¿Qué medios de pago y promociones tienen?",
    respuesta: "Aceptamos efectivo, transferencia bancaria,tenemos 20% de descuento con cuenta DNI, 30 % de descuento con buepp, y tarjeta de crédito tiene un 15% de recargo"
  },
  {
    pregunta: "¿Necesito turno previo?",
    respuesta: "Sí, trabajamos con turnos para garantizar la atención personalizada que cada persona merece. Podés reservar por WhatsApp o por nuestro mail."
  },
  {
    pregunta: "¿Dónde están ubicadas?",
    respuesta: "Estamos en Flores, Capital Federal, nuestra ubicación exacta la podrás ver en nuestra seccion de Contacto."
  },
  {
    pregunta: "¿Los precios son accesibles?",
    respuesta: "Creemos que el cuidado personal no debe ser excluyente por lo tanto tenemos distintas opciones y promociones para que puedas acceder sin importar tu presupuesto."
  },
  {
    pregunta: "¿Atienden a personas de todos los cuerpos?",
    respuesta: "Absolutamente. Nuestro espacio está diseñado para ser inclusivo, cómodo y respetuoso para todo tipo de cuerpos, identidades y expresiones."
  },
];

function PreguntasFrecuentes() {
  const [abierta, setAbierta] = useState(null);

  const toggle = (i) => setAbierta(abierta === i ? null : i);

  return (
    <section id="preguntas-frecuentes" style={{
      background: 'linear-gradient(160deg, #f5f0f5 0%, #ede8ed 100%)',
      padding: 'clamp(3rem, 8vw, 10rem) clamp(1rem, 5vw, 10rem)',
      minHeight: '50vh',
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>

        <h2 style={{
          fontFamily: 'Parisienne, cursive',
          fontSize: 'clamp(2.5rem, 7vw, 5rem)',
          color: 'rgba(112, 70, 120, 0.85)',
          textAlign: 'center',
          marginBottom: '3rem',
          textShadow: '0 2px 15px rgba(200, 140, 210, 0.25)',
          marginTop: '10 rem'
        }}>
          Preguntas frecuentes
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
          {preguntas.map((item, i) => (
            <div
              key={i}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(180, 140, 185, 0.25)',
                background: abierta === i
                  ? 'rgba(255, 248, 255, 0.95)'
                  : 'rgba(255, 252, 255, 0.75)',
                boxShadow: abierta === i
                  ? '0 4px 20px rgba(160, 100, 170, 0.12)'
                  : '0 1px 4px rgba(0,0,0,0.05)',
                transition: 'all 0.25s ease',
              }}
            >
              {/* Header */}
              <button
                onClick={() => toggle(i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.2rem 1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  gap: '1rem',
                }}
              >
                <span style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                  fontWeight: 600,
                  color: 'rgba(90, 55, 100, 0.9)',
                  textAlign: 'left',
                }}>
                  {item.pregunta}
                </span>
                <span style={{
                  fontSize: '1rem',
                  transition: 'transform 0.3s ease',
                  transform: abierta === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  flexShrink: 0,
                }}>
                  ⬇️
                </span>
              </button>

              {/* Respuesta */}
              <div style={{
                maxHeight: abierta === i ? '300px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.35s ease',
              }}>
                <p style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                  color: 'rgba(90, 60, 95, 0.8)',
                  lineHeight: '1.75',
                  margin: 0,
                  padding: '0 1.5rem 1.4rem',
                }}>
                  {item.respuesta}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PreguntasFrecuentes;