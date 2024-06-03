import "../routes/index.css"
import { useEffect } from "react";
import foto1 from "../assets/oaxacaBanner.jpg"
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Lugar } from "../componentes/Card";
import { Reviews } from "../componentes/Review";
import { rebote,IzquierdaDerecha, DerechaIzquierda,letras,letrasIzq} from '../componentes/animations';
import {Link} from "react-router-dom";
import data from "../Data.json"
import ScrollReveal from 'scrollreveal';

export function Index(){

    const lugares=data.Lugares
    useEffect(() => {
        const sr = ScrollReveal();
    
        sr.reveal('.animacion', IzquierdaDerecha);
        sr.reveal('.animacion1', rebote);
        sr.reveal('.animacion2', DerechaIzquierda);    
        sr.reveal('.texto', letras);
        sr.reveal('.texto1', letrasIzq);
        }, []); 

    return(
    <>
   
        <section className="contenedor animacion1">
           <h1>Oaxaca</h1>
        </section>
        <section className="contenedor2 animacion">
            <section style={{width:'80%'}}>
                <div className="contenedorGrid">
                    <div style={{display:'flex',justifyContent:'center',overflow:'hidden',objectFit:'cover'}}>
                       
                        <Image src={foto1} fluid />;
                        
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'10px',textAlign:'center'}}>
                        <h2>Conoce Oaxaca</h2>
                        <p style={{fontSize:'1rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, 
                            nisi est illo iure perferendis saepe quaerat error suscipit. 
                            Deserunt ex non officiis vitae praesentium 
                            facere amet dignissimos doloremque itaque eos!</p>
                            <p style={{fontSize:'1rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, 
                            nisi est illo iure perferendis saepe quaerat error suscipit. 
                            Deserunt ex non officiis vitae praesentium 
                            facere amet dignissimos doloremque itaque eos!</p>
                            <Button variant="danger" style={{marginTop:'10px'}} href="https://www.turismomexico.es/estado-de-oaxaca/oaxaca-de-juarez/" >Conoce más</Button>
                    </div>
                </div>
            </section>
        </section>

        <h2 style={{textAlign:'center',marginTop:'5rem'}}>Lo más popular</h2>

        <section className="contenedor2 animacion2">
            <section style={{width:'80%'}}>
                <div className="contenedorGrid">
                    {
                        lugares.map(lugar=>(
                            <Lugar titulo={lugar.Title} key={lugar.imdbID} imagen={lugar.Poster}></Lugar>
                        ))
                    }
                </div>
            </section>
        </section>

        <h2 style={{textAlign:'center',marginTop:'5rem'}}>¿Buscas una experiencia personalizada?</h2>

        <h2 style={{textAlign:'center',marginTop:'5rem'}}>Prueba nuestra inteligencia artificial</h2>

        <section className="contenedor3 animacion">
            <section style={{width:'80%'}}>
            <div className="contenedorGrid">
                    <div style={{display:'flex',justifyContent:'center',overflow:'hidden',objectFit:'cover'}}>
                       
                        <Image src="https://blog.tunubi.com/wp-content/uploads/2018/05/Apps-viajes-800x500.png" fluid />;
                        
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'10px',textAlign:'center'}}>
                        <h2>Tus vacaciones a tu modo</h2>
                        <p style={{fontSize:'1.5rem'}}>Prueba nuestra potente IA para ajustar tus vacaciones en base a tus requerimientos
                            gestiona,personaliza,crea el viaje que tu quieres y conoce mejor el estado que tanto 
                            deseas conocer 
                        </p>
                        <div>
                        <Button variant="danger"><Link to="/IA" style={{ textDecoration: 'none', color: 'inherit' }}>Empezar mi viaje</Link></Button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
                
        <h2 style={{textAlign:'center',marginTop:'5rem'}}>Estamos para ayudarte siempre</h2>

        
        <section className="contenedor2">
            <section style={{width:'80%'}}>
                <div className="contenedorGrid">
                    <Reviews></Reviews>
                    <Reviews></Reviews>
                    <Reviews></Reviews>
                </div>
            </section>
        </section>
    
    </>
    )
}