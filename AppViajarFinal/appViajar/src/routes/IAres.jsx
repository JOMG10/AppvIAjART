import {aparicion} from '../componentes/animations';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Lugar } from '../componentes/Card';
import data from "../Data.json"


export function IAres(){

    const datos=data.Lugares

    useEffect(() => {
        const sr = ScrollReveal();
    
        sr.reveal('.animacion', aparicion);
        
        }, []); 

    return(

        <div className='animacion'>
        <h2 style={{textAlign:'center',fontSize:'32px',marginTop:'3.5rem'}}>Mira encontre estas opciones</h2>
        <div className="contenedorGrid">
                    {
                        datos.slice(0,3).map(lugar=>(
                            <Lugar titulo={lugar.Title} key={lugar.imdbID} imagen={lugar.Poster}></Lugar>
                        ))
                    }
                </div>
        </div>
    )
}