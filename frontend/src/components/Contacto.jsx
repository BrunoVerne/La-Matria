import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// Reemplazá con tu logo real
import logo from '../recursos/lamatria.png';

function Contacto() {
  return (
    <section
      id="contacto"
      style={{
        background: 'rgb(28, 0, 29)',
        borderTop: '0.1rem solid rgba(234, 0, 255, 0.4)',
        boxShadow: '0 -4px 20px rgba(234, 0, 255, 0.2)',
        paddingTop: '4rem',
        paddingBottom: '4rem',
      }}
    >
        <h1 style={{
            fontFamily: 'Raleway, sans-serif',
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            color: 'white',
            textAlign: 'center',
            textShadow: '4px 4px 6px rgba(255, 115, 0, 0.7)',
            marginBottom: '3rem',
            marginTop: '2rem',

        }}>
            Contacto
</h1>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '3rem',
        }}
      >

        {/* Lado izquierdo — Logo */}
        <div
          style={{
            flex: '1 1 200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={logo} alt="Logo" style={{ width: '100%', maxWidth: '180px' }} />
        </div>

        {/* Lado derecho — Datos de contacto */}
        <div
          style={{
            flex: '2 1 300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.8rem',
          }}
        >

          {/* Mail */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <FaEnvelope
              style={{
                fontSize: '1.6rem',
                color: 'rgba(234, 0, 255, 0.9)',
                filter: 'drop-shadow(0 0 6px rgba(234, 0, 255, 0.7))',
                flexShrink: 0,
              }}
            />
            <a
              href="https://mail.google.com/mail/?view=cm&to=lamatria@gmail.com"
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                color: 'white',
                textDecoration: 'none',
                opacity: 0.9,
                textShadow: '0 0 9px rgba(255, 217, 0, 0.4)',
              }}
            >
              lamatria@gmail.com
            </a>
          </div>

          {/* Teléfono */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <FaPhone
              style={{
                fontSize: '1.6rem',
                color: 'rgba(234, 0, 255, 0.9)',
                filter: 'drop-shadow(0 0 6px rgba(234, 0, 255, 0.7))',
                flexShrink: 0,
              }}
            />
            <a
              href="tel:+5491158887487"
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                color: 'white',
                textDecoration: 'none',
                opacity: 0.9,
                textShadow: '0 0 9px rgba(255, 217, 0, 0.4)',
              }}
            >
              +54 9 11 5888-7487
            </a>
          </div>

          {/* Ubicación */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <FaMapMarkerAlt
              style={{
                fontSize: '1.6rem',
                color: 'rgba(234, 0, 255, 0.9)',
                filter: 'drop-shadow(0 0 6px rgba(234, 0, 255, 0.7))',
                flexShrink: 0,
              }}
            />
            <a
              href="https://maps.app.goo.gl/fgEu8i6rgeaNJ2fy5"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                color: 'white',
                textDecoration: 'none',
                opacity: 0.9,
                textShadow: '0 0 9px rgba(255, 217, 0, 0.4)',
              }}
            >
            Av. Varela 915, Flores, CABA
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contacto;