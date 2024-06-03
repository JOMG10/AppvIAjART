import {avisos} from "../componentes/alerts"
import Button from 'react-bootstrap/Button';
import { Quiz } from "../componentes/quiz";
import {Link,redirect} from "react-router-dom";
import "../routes/IA.css"
export function IA(){

      const listo=()=>{
        let timerInterval;
        avisos.fire({
            title: "Buscando las mejores vacaciones",
            timer: 2000,
            didOpen: () => {
                avisos.showLoading();
                const timer = avisos.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                timer.textContent = `${avisos.getTimerLeft()}`;
                }, 100);
                return redirect(`/IA/res`)
            },
            willClose: () => {
                
                clearInterval(timerInterval);
                
                
            }
            })
        
      }

    return(
        <>
        <section className="banner1">

        </section>
        <section className="conte">
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div style={{width:'50%',textAlign:'center'}}><h2 style={{fontSize:'4rem'}}>Solo te llevara 2 minutos conocer las vacaciones perfectas</h2></div>
            <Quiz></Quiz>
            <div>
            <Button onClick={listo}><Link to={"/IA/res"} style={{ textDecoration: 'none', color: 'inherit' }}>Ver mis vacaciones perfectas</Link></Button>
            </div>
            </div>
        </section>
        </>
    )
}