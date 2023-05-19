



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
          <li>Categorías <img src="src/assets/flecha-categoria.png"/></li>
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
          <button className="btn-tarjeta-toggle-hover"></button>
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
          <button className="btn-tarjeta-toggle-hover"></button>
          <img className="img-oferta" src="src/assets/oferta_2.png"/>
          <img className="img-oferta-dia" src="src/assets/oferta_del_dia.png"/>
        </div>
        <div>
          <span className="oferta-precio-anterior">$219.999</span>
          <br/>
          <div className="contenedor-precio">
            <span className="oferta-precio">$175.999</span>
            <span className="oferta-off">20% OFF</span>
          </div>
          <span className="oferta-cuotas">Mismo precio en 6 cuotas de $29.333</span>
          
          <span className="oferta-envios">Envio gratis</span>
          
          <span className="oferta-producto">Smart TV Samsung Series 7 UN55AU7000GCZB LED...</span>
        </div>
      </article>

      <article>
        <div>
          <button className="btn-tarjeta-toggle-hover"></button>
          <img className="img-oferta" src="src/assets/oferta_3.png"/>
          <img className="img-oferta-dia" src="src/assets/oferta_del_dia.png"/>
        </div>
        <div>
          <span className="oferta-precio-anterior">$362.498</span>
          <br/>
          <div className="contenedor-precio">
            <span className="oferta-precio">$277.999</span>
            <span className="oferta-off">23% OFF</span>
          </div>
          <span className="oferta-cuotas">Mismo precio en 6 cuotas de $46.333</span>
          
          <span className="oferta-envios">Envio gratis</span>
          
          <span className="oferta-producto">Aire Acondicionado BGH Silent Air split frio/calor 450...</span>
        </div>
      </article>
      
      <article>
        <div>
          <button className="btn-tarjeta-toggle-hover"></button>
          <img className="img-oferta" src="src/assets/oferta_4.png"/>
          <img className="img-oferta-dia" src="src/assets/oferta_del_dia.png"/>
        </div>
        <div>
          <span className="oferta-precio-anterior">$441.782</span>
          <br/>
          <div className="contenedor-precio">
            <span className="oferta-precio">$121.030</span>
            <span className="oferta-off">72% OFF</span>
          </div>
          <span className="oferta-cuotas">Mismo precio en 12 cuotas de $10.085</span>
          
          <span className="oferta-envios">Envio gratis</span>
          
          <span className="oferta-producto">Sommier Simmons BackCare Hotel Bilt 2 plazas de...</span>
        </div>
      </article>

      <article>
        <div>
          <button className="btn-tarjeta-toggle-hover"></button>
          <img className="img-oferta" src="src/assets/oferta_5.png"/>
          <img className="img-oferta-dia" src="src/assets/oferta_del_dia.png"/>
        </div>
        <div>
          <span className="oferta-precio-anterior">$194.499</span>
          <br/>
          <div className="contenedor-precio">
            <span className="oferta-precio">$174.999</span>
            <span className="oferta-off">10% OFF</span>
          </div>
          <span className="oferta-cuotas">Mismo precio en 6 cuotas de $29.166</span>
          
          <span className="oferta-envios">Envio gratis</span>
          
          <span className="oferta-producto">Lavarropas Automático Carga Frontal 6.5kg Inverter...</span>
        </div>
      </article>


    </div>
    </>
    )
  }

  const Subscripcion = () => {
    return(
      <div className="subscripcion-container">
        <img src="src/assets/subscripcion-main.png"/>
      </div>
    )
  }

  const BeneficioMercadoPuntos = () => {
    return(
    <>
    <div className="beneficio-mercado-puntos-title-container">
      <h2>Beneficios de Mercado Puntos</h2>
      <a href="#">Ver todos los beneficios</a>
    </div>
    <br/>
    <div className="beneficio-mercado-puntos-container">
      <img src="src/assets/beneficio-mercado-puntos-disney-star.png" />
      <img src="src/assets/beneficio-mercado-puntos-hbo-max.png" />
      <img src="src/assets/beneficio-mercado-puntos-paramount.png" />
    </div>
    <div className="beneficio-mercado-puntos-promocion-container">
      <img src="src/assets/beneficio-mercado-puntos-promocion.png" />
    </div>
    </>
    )
  }

  const Descubri = () => {
    return(
    <>
      <div className="descubri-title-container">
        <h2>Descubrí</h2>
      </div>
      <div className="descubri-container">
        <div className="descubri-card-1">
          <button>Ver más</button>  
        </div>
        <div className="descubri-card-2">
          <button>Ver más</button>  
        </div>
      </div>
    </>
    )
  }

  const Tiendas = () => {
    return(
    <>
      <div className="tienda-title-container">
        <h2>Las mejores tiendas te esperan</h2>
        <a href="#">Ver tiendas</a>
      </div>
      <div className="tienda-container">
        <div className="card-tienda-1">
          <a href="#">Ver tienda</a> 
        </div>
        <div className="card-tienda-2">
          <a href="#">Ver tienda</a> 
        </div>
        <div className="card-tienda-3">
          <a href="#">Ver tienda</a> 
        </div>
        <div className="card-tienda-4">
          <a href="#">Ver tienda</a> 
        </div>
      </div>
    </>
    )
  }

  const TePuedeInteresar = () => {
    return(
      <div className="te-puede-interesar-container">
        <div className="te-puede-interesar-title-container">
          <h2>Te puede interesar</h2>
          <div className="interes-seccion">
            <div className="interes-card-1">
              <button>Ver más</button>  
            </div>
            <div className="interes-card-2">
              <button>Ver más</button>  
            </div>
          </div>
        </div>
      </div>
      
    )
  }

  const Colecciones = () => {
    return(
    <div className="colecciones-title-container">
      <h2>Colecciones:</h2><span className="smart-home-title">Smart Home</span><img className="imagen-flecha-coleccion" src="src/assets/flecha-coleccion.png"/>
    </div>
    )
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
