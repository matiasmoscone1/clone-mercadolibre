

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
      <>
    <div className="colecciones-title-container">
      <h2>Colecciones:</h2><span className="smart-home-title">Smart Home</span><img className="imagen-flecha-coleccion" src="src/assets/flecha-coleccion.png"/>
    </div>
    <div className="colecciones-container">
      <div className="card-principal-coleccion">
      </div>
      <div className="card-coleccion">
        <img src="src/assets/coleccion-2.png"/>
      </div>
      <div className="card-coleccion">
        <img src="src/assets/coleccion-3.png"/>
      </div>
      
      <div className="card-coleccion">
        <img src="src/assets/coleccion-4.png"/>
      </div>
      
      <div className="card-coleccion">
        <img src="src/assets/coleccion-5.png"/>
      </div>
      
      <div className="card-coleccion">
        <img src="src/assets/coleccion-6.png"/>
      </div>
      
      <div className="card-coleccion">
        <img src="src/assets/coleccion-7.png"/>
      </div>
      
      <div className="card-coleccion">
        <img src="src/assets/coleccion-8.png"/>
      </div>
      
      <div className="card-coleccion">
        <img src="src/assets/coleccion-9.png"/>
      </div>

    </div>
    </>
    )
  }

  const CategoriasPopulares = () => {
    return(
      <>
      <div className="categorias-populares-title-container">
        <h2>Categorías populares</h2>
      </div>
      <div className="categorias-populares-container">
        <div className="card-categorias-populares">
          <img src="src/assets/categorias-1.png"/>
          <span>Autos, Motos y Otros</span>
        </div>
        <div className="card-categorias-populares">
          <img src="src/assets/categorias-2.png"/>
          <span>Computación</span>
        </div>
        <div className="card-categorias-populares">
          <img src="src/assets/categorias-3.png"/>
          <span>Electrodomésticos y Aires Ac.</span>
        </div>
        <div className="card-categorias-populares">
          <img src="src/assets/categorias-4.png"/>
          <span>Deportes y Fitness</span>
        </div>
        <div className="card-categorias-populares">
          <img src="src/assets/categorias-5.png"/>
          <span>Inmuebles</span>
        </div>
        <div className="card-categorias-populares">
          <img src="src/assets/categorias-6.png"/>
          <span>Belleza y Cuidado Personal</span>
        </div>
        <div className="card-categorias-populares">
          <img src="src/assets/categorias-7.png"/>
          <span>Juegos y Jugetes</span>
        </div>
        <div className="card-categorias-populares">
          <img src="src/assets/categorias-8.png"/>
          <span>Celulares y Teléfonos</span>
        </div>
        <div className="card-categorias-populares">
          <img src="src/assets/categorias-9.png"/>
          <span>Electrónica, Audio y Video</span>
        </div>
        <div className="card-categorias-populares">
          <img src="src/assets/categorias-10.png"/>
          <span>Ropa y Accesorios</span>
        </div>
        <div className="card-categorias-populares">
          <img src="src/assets/categorias-11.png"/>
          <span>Hogar, Muebles y Jardin</span>
        </div>
        <div className="card-categorias-populares">
          <img src="src/assets/categorias-12.png"/>
          <span>Accesorios para Vehículos</span>
        </div>
        <div className="card-categorias-populares">
          <img src="src/assets/categorias-13.png"/>
          <span>Consolas y Videojuegos</span>        
        </div>
        <div className="card-categorias-populares">
          <img src="src/assets/categorias-14.png"/>
          <span>Alimentos y Bebidas</span>
        </div>
      </div>
      </>
    )
  }

  const Footer = () => {
    return(
    <>
      <div className="footer-container">
        <div className="footer-row-container">
        <div className="footer-pagar">
          <img src="src/assets/footer-1.png"/>
          <br/>
          <span>Elegí como pagar</span>
          <p>Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito.</p>
          <a href="#">Cómo pagar tus compras</a>
        </div>  
        <div className="footer-envio">
          <img src="src/assets/footer-2.png"/>
          <br/>
          <span>Envío gratis desde $ 8.000</span>
          <p>Solo por estar registrado en Mercado Libre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.</p>
          <a href="#">Conocé más sobre este beneficio</a>
        </div>  
        <div className="footer-seguridad">
          <img src="src/assets/footer-3.png"/>
          <br/>
          <span>Seguridad, de principio a fin</span>
          <p>¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
          <a href="#">Cómo te protegemos</a>
        </div>
        </div>

        <div className="footer-box-arrepentimiento-normas">
        <div className="footer-arrepentimiento">
          <span>Botón de arrepentimiento</span>
          <a href="#">Cancelar una compra</a>
          <a href="#">Cancelar una suscripción</a>
          <a href="#">Cancelar un seguro o garantía</a>
        </div>
        <div className="footer-normas">
          <span>Conocé las normas que aplican cuando comprás</span>
          <a href="#">Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor</a>
        </div>
        </div>
        <div className="footer-img">
          <img src="src/assets/footer-ayuda.png"/>
          <img src="src/assets/footer-seguros.png"/>
          <img src="src/assets/footer-qr.png"/>
        </div>
        <div className="footer-mas-info">
          <button>Más información</button>
        </div>
        
        <div className="footer-navbar">
          <ul>
            <li>Trabajá con nosotros</li>
            <li>Términos y condiciones</li>
            <li>Cómo cuidamos tu privacidad</li>
            <li>Accesibilidad</li>
            <li>Información al usuario financiero</li>
            <li>Ayuda</li>
            <li>Defensa del Consumidor</li>
            <li>Informacion sobre seguros</li>
          </ul>
          <span>Copyright © 1999-2023 MercadoLibre S.R.L.</span>
          <br/>
          <span>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</span>
        </div>

      </div>
    </>)
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
