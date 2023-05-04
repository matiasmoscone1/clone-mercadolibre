


function App() {


  const Navbar = () => {
    return(<div className="navbar-container">
      <div className="navbar-logo"> </div>       
      
      <div className="input-container"> <input /></div>
    
      <div className="promo-container"></div>

      <div className="envios-container"> </div>

      <div className="categorias-container">
        <ul>
          <li>Categorías</li>
          <li>Ofertas</li>
          <li>Historial</li>
          <li>Supermercado</li>
          <li>Moda</li>
          <li>Vender</li>
          <li>Ayuda</li>
        </ul>
      </div>

      <div className="panel-container">
      <ul>
        <li>Creá tu cuenta</li>
        <li>Ingresá</li>
        <li>Mis compras</li>
        <li>iconocarrito</li>
      </ul>
      </div>

    </div>)
  }


  const Carrousel = () => {
    return(<div>
      Carrousel
    </div>)
  }

  const FormasPago = () => {
    return(<div>
      Formas de pago
    </div>)
  }


  const Ofertas = () => {
    return(<div>
      Ofertas
    </div>)
  }

  const Subscripcion = () => {
    return(<div>
      Subscripcion
    </div>)
  }

  const BeneficioMercadoPuntos = () => {
    return(<div>
      Beneficio Mercado Puntos
    </div>)
  }

  const Publicidad = () => {
    return(<div>
      Publicidad
    </div>)
  }

  const Descubri = () => {
    return(<div>
      Descubri
    </div>)
  }

  const Tiendas = () => {
    return(<div>
      Tiendas
    </div>)
  }

  const TePuedeInteresar = () => {
    return(<div>
      Te puede interesar
    </div>)
  }

  const Colecciones = () => {
    return(<div>
      Colecciones
    </div>)
  }

  const CategoriasPopulares = () => {
    return(<div>
      Categorias Populares
    </div>)
  }

  const Footer = () => {
    return(<div>
      Footer
    </div>)
  }

  return (
   <>
   
    <Navbar />

    <Carrousel /> 

    <FormasPago />

    <Ofertas />

    <Subscripcion />

    <BeneficioMercadoPuntos />

    <Publicidad />

    <Descubri />

    <Tiendas />

    <TePuedeInteresar />

    <Colecciones/>

    <CategoriasPopulares />

    <Footer />

   </>
  )
}

export default App
