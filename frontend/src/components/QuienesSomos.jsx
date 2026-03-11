import React from 'react';
import aceptarse from '../recursos/aceptarse.png';

function QuienesSomos() {
  return (
    <section
      id="quienes-somos"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '6rem 2rem 5rem',
      }}
    >
      {/* Fondo con la imagen difuminada */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${aceptarse})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 85%',
        filter: 'blur(6px) brightness(1.15) saturate(0.9)',
        zIndex: 0,
      }} />

      {/* Overlay claro */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(255, 245, 250, 0.72)',
        zIndex: 1,
      }} />

      {/* Contenido */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '680px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2.5rem',
      }}>

        {/* Título */}
        <h2 style={{
          fontFamily: 'Parisienne, cursive',
          fontSize: 'clamp(3.5rem, 10vw, 7rem)',
          color: 'rgba(112, 70, 120, 0.9)',
          margin: 0,
          lineHeight: 1.1,
          letterSpacing: '0.01em',
          textShadow: '0 2px 20px rgba(200, 140, 210, 0.35)',
        }}>
          ¿Quiénes somos?
        </h2>

        {/* Separador fino */}
        <div style={{
          width: '60px',
          height: '1.5px',
          background: 'rgba(160, 100, 170, 0.5)',
          borderRadius: '2px',
        }} />

        {/* Texto */}
        <p style={{
          fontFamily: 'Raleway, sans-serif',
          fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
          lineHeight: '1.85',
          color: 'rgba(80, 50, 85, 0.88)',
          margin: 0,
          fontWeight: 400,
          letterSpacing: '0.05em',
        }}>
          Somos un espacio de estética pensado para cuerpos reales y diversos.
          Creemos en el bienestar, el cuidado y la belleza sin estereotipos ni moldes impuestos.
          Nuestro objetivo es acompañar a cada persona a sentirse cómoda, segura y valorada
          en su propio cuerpo, celebrando la diversidad y promoviendo una estética inclusiva.
        </p>

      </div>
    </section>
  );
}

export default QuienesSomos;