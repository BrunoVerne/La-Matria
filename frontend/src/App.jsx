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

function App() {
  return (
    <>
      <PortadaSection />
      <MenuNav />
      <QuienesSomos />
      <Servicios />
      <PreguntasFrecuentes />
      <Contacto/>
      <BotonWhatsapp 
        numero="5491133367046"  
        mensaje="¡Hola! Vi su página y quiero más información"
      />
    
    </>
  )
}

export default App