import "./App.css"

function App() {
  return (
    <div className="container">
      
      <header className="navbar">
        <h1 className="logo">Estética La Matria</h1>
        <nav>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Realza tu belleza natural</h2>
        <p>Tratamientos faciales, corporales y bienestar integral.</p>
        <button>Reservar Turno</button>
      </section>

      <section id="servicios" className="servicios">
        <h2>Nuestros Servicios</h2>
        <div className="cards">
          <div className="card">
            <h3>Limpieza Facial</h3>
            <p>Tratamiento profundo para revitalizar tu piel.</p>
          </div>
          <div className="card">
            <h3>Masajes Corporales</h3>
            <p>Relajación y bienestar para cuerpo y mente.</p>
          </div>
          <div className="card">
            <h3>Depilación Láser</h3>
            <p>Tecnología avanzada para resultados duraderos.</p>
          </div>
        </div>
      </section>

      <section id="nosotros" className="nosotros">
        <h2>Sobre Nosotros</h2>
        <p>
          Somos un centro de estética dedicado al cuidado integral.
          Nuestro equipo profesional trabaja con tecnología moderna
          y productos de alta calidad.
        </p>
      </section>

      <section id="contacto" className="contacto">
        <h2>Contacto</h2>
        <p>📍 Calle Falsa 123, Buenos Aires</p>
        <p>📞 +54 11 1234-5678</p>
        <p>📧 contacto@bellavida.com</p>
      </section>

      <footer className="footer">
        <p>© 2026 Estética BellaVida - Todos los derechos reservados</p>
      </footer>

    </div>
  )
}

export default App