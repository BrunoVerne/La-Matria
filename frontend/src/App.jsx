import "./App.css"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import PortadaSection from "./components/PortadaSection";
import MenuNav from "./components/MenuNav";
import QuienesSomos from "./components/QuienesSomos";

function App() {
  return (
    <>
      <PortadaSection />
      <MenuNav />
      <QuienesSomos />
    </>
  )
}

export default App