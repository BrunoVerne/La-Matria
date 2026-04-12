import React from 'react';
import { FaInstagram } from 'react-icons/fa';

function BotonInstagram() {
  const url = "https://www.instagram.com/coop.estetica.lamatria/";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        textDecoration: 'none',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <FaInstagram />
    </a>
  );
}

export default BotonInstagram;