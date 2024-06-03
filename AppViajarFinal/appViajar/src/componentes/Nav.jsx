
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';

export function Navigation() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="" style={{height:'10vh',backgroundColor:'white'}}>
          <Container fluid>
            <Navbar.Brand style={{marginLeft:'15%'}} href='/'>
              <Image src={logo} style={{width:'150px',marginLeft:'13%'}}></Image>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div>
                  <Link to={"/login"}><Button variant='success'>Iniciar sesion</Button></Link>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      
    </>
  );
}
