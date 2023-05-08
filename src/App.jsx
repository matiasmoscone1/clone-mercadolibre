



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
      <section className="seccion-pago">
        <button><img src="src/assets/forma_de_pago_credito.png"/></button>
        <div className="container-pago-texto">
          <span>Tarjeta de crédito</span>
          <a href="#">Ver promociones bancarias</a>
        </div>
      </section>

      <section className="seccion-pago">
        <button><img src="src/assets/forma_de_pago_debito.png"/></button>
        <div className="container-pago-texto">
          <span>Tarjeta de débito</span>
          <a href="#">Ver más</a>    
        </div>
      </section>
      
      <section className="seccion-pago">
        <button><img src="src/assets/forma_de_pago_cuotas.png"/></button>
        <div className="container-pago-texto"> 
          <span>Cuotas sin tarjeta</span>
          <a href="#">Conocé Mercado Crédito</a>  
        </div>
      </section>
      
      <section className="seccion-pago">
        <button><img src="src/assets/forma_de_pago_efectivo.png"/></button>
        <div className="container-pago-texto">
          <span>Efectivo</span>
          <a href="#">Ver más</a>  
        </div>
      </section>
      
      <section className="seccion-pago">
        <button><img src="src/assets/forma_de_pago_btn.png"/></button>
      </section>
    </div>)
  }


  const Ofertas = () => {
    return(
    <>
    <div className="ofertas-container">
      <h2>Ofertas</h2>
      <a href="#">Ver todas</a>
    </div>
    <br/>

    <div className="grilla-ofertas-container">
    
      <article>
        <div>
          <img className="img-oferta" src="src/assets/oferta_1.png"/>
          <img className="img-oferta-dia" src="src/assets/oferta_del_dia.png"/>
        </div>
        <div>
          <span className="oferta-precio-anterior">$214.999</span>
          <br/>
          <div className="contenedor-precio">
            <span className="oferta-precio">$184.999</span>
            <span className="oferta-off">13% OFF</span>
          </div>
          <span className="oferta-cuotas">Mismo precio en 6 cuotas de $30.833</span>
          
          <span className="oferta-envios">Envio gratis &#x01C6; FULL</span>
          
          <span className="oferta-producto">Samsung Galaxy A54 5g 256gb 8gb Ram Awesome...</span>
        </div>
      </article>
 
      <article>
        <div>
          <img className="img-oferta" src="src/assets/oferta_2.png"/>
          <img className="img-oferta-dia" src="src/assets/oferta_del_dia.png"/>
        </div>
        <div>
          <span className="oferta-precio-anterior">$174.999</span>
        </div>
      </article>

      <article>
        <div>
          <img className="img-oferta" src="src/assets/oferta_3.png"/>
          <img className="img-oferta-dia" src="src/assets/oferta_del_dia.png"/>
        </div>
        <div>
          <span className="oferta-precio-anterior">$256.248</span>
        </div>
      </article>
      
      <article>
        <div>
          <img className="img-oferta" src="src/assets/oferta_4.png"/>
          <img className="img-oferta-dia" src="src/assets/oferta_del_dia.png"/>
        </div>
        <div>
          <span className="oferta-precio-anterior">$441.789</span>
        </div>
      </article>

      <article>
        <div>
          <img className="img-oferta" src="src/assets/oferta_5.png"/>
          <img className="img-oferta-dia" src="src/assets/oferta_del_dia.png"/>
        </div>
        <div>
          <span className="oferta-precio-anterior">$194.499</span>
        </div>
      </article>


    </div>
    </>
    )
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
