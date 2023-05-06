



function App() {


  const Navbar = () => {
    return(<div className="navbar-container">
      <div className="navbar-logo"> </div>       
      
      <div className="input-container"> 
        <input type="text" placeholder="Buscar productos, marcas y mas..."/>
        <button className="lupa-input">
        
        </button>    
      </div>
    
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
    return(
    <div className="formas-pago-container">
      <div>
        <button><img src="src/assets/forma_de_pago_credito.png"/></button>
        <span>Tarjeta de crédito</span>
        <a href="#">Ver promociones bancarias</a>
      </div>
      <div>
        <button><img src="src/assets/forma_de_pago_debito.png"/></button>
        <span>Tarjeta de débito</span>
        <a href="#">Ver más</a>
      </div>
      <div>
        <button><img src="src/assets/forma_de_pago_cuotas.png"/></button>
        <span>Cuotas sin tarjeta</span>
        <a href="#">Conocé Mercado Crédito</a>
      </div>
      <div>
        <button><img src="src/assets/forma_de_pago_efectivo.png"/></button>
        <span>Efectivo</span>
        <a href="#">Ver más</a>
      </div>
      <div>
        <button>+</button>
      </div>
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
