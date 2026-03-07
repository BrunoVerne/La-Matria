import "./App.css"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import PortadaSection from "./components/PortadaSection";
import MenuNav from "./components/MenuNav";
import QuienesSomos from "./components/QuienesSomos";
import BotonWhatsapp from "./components/BotonWhatsapp";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";

function App() {
  return (
    <>
      <PortadaSection />
      <MenuNav />
      <QuienesSomos />
      <Servicios />
      <Contacto/>
      <BotonWhatsapp 
        numero="5491158887487"  
        mensaje="Hola! Vi su página y quiero más información"
      />
    
    </>
  )
}

export default App