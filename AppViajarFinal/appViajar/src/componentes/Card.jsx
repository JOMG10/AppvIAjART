import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {Link} from "react-router-dom";
import "../componentes/Card.css"
export function Lugar({titulo,imagen}) {

  

  return (

    <Card style={{ width: '18rem',overflow:'hidden', transition: 'transform 0.3s ease'}}  className="card-img-hover"  >
      <Card.Img variant="top" src={imagen} style={{ height: '25vh', objectFit: 'cover', transition: 'transform 0.3s ease'}}/>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        {/* <Button onClick={()=>{window.location.href = `/monteAlban/monteAlban2.html';`;}} variant="danger">Conoce más</Button> */}
        {/* <Button onClick={()=>{window.location.href = `/monteAlban/monteAlban2.html';`;}} variant="danger">Conoce más</Button> */}


         <Button variant='danger'><a href={`/${titulo}/${titulo}.html`} style={{textDecoration:'none',color:'white'}}>Ver más</a></Button>
         {/* <Link to={"/monteAlban/monteAlban2.html"}>boton</Link> */}
        {/* <Button variant="danger"><Link to={`/${titulo}`} style={{ textDecoration: 'none', color: 'inherit' }}>Ver</Link></Button> */}
      </Card.Body>
    </Card>
   
  );
}
4