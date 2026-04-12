import "./App.css"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import PortadaSection from "./components/PortadaSection";
import MenuNav from "./components/MenuNav";
import QuienesSomos from "./components/QuienesSomos";
import BotonWhatsapp from "./components/BotonWhatsapp";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import BotonInstagram from "./components/BotonInstagram";

function App() {
  return (
    <>
      <PortadaSection />
      <MenuNav />
      <QuienesSomos />
      <Servicios />
      <PreguntasFrecuentes />
      <Contacto/>
      <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}>
        <BotonInstagram />
        <BotonWhatsapp 
          numero="5491133367046"  
          mensaje="¡Hola! Vi su página y quiero más información"
        />
      </div>
    </>
  )
}

export default App