import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';

export function Quiz() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="second" data-bs-theme="dark">
      <Row style={{textAlign:'center',justifyContent:'center',marginTop:'3rem',marginBottom:'3rem'}}>
        <Col sm={4}>
          <Nav variant="pills" className="flex-column">
            
            <Nav.Item>
              <Nav.Link eventKey="second">¿Qué tipo de actividades haras?</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tres" >¿Qué tipo de transporte usarás?</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="cuatro">¿Dónde piensas hospedarte?</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="cinco">¿Qué comida piensas comer?</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="seis">¿Qué espectáculos desear ver?</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="siete">¿Qué tipo de lugar piensas visitar?</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ocho">¿Dime tu presupuesto?</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={5} style={{display:'flex',alignItems:'center',fontSize:'1.5rem'}}>
          <Tab.Content>
            
          <Tab.Pane eventKey="second">
            <Form style={{display:'flex'}}>
              
                <Form.Check
                type="checkbox"
                label="Actividades Al aire libre"
                />
                <Form.Check
                type="checkbox"
                label="Actividades Al interior"
                />
              
              
              </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="tres">
              <Form style={{display:'flex'}}>
               
                <Form.Check
                type="checkbox"
                label="Transporte público"
                />
                <Form.Check
                type="checkbox"
                label="Alquilar un carro"
                />
                <Form.Check
                type="checkbox"
                label="Tengo como moverme"
                />
              
                </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="cuatro">
              <Form style={{display:'flex'}}>
                <Form.Check
                type="checkbox"
                label="Cerca del centro"
                />
                <Form.Check
                type="checkbox"
                label="Cerca de una playa"
                />
                <Form.Check
                type="checkbox"
                label="Zonas rurales"
                />
                </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="cinco">
              <Form style={{display:'flex'}}>
                <Form.Check
                type="checkbox"
                label="Local"
                />
                <Form.Check
                type="checkbox"
                label="Internacional"
                />
                <Form.Check
                type="checkbox"
                label="Fusión"
                />
                </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="seis">
              <Form style={{display:'flex'}}>
                <Form.Check
                type="checkbox"
                label="Teatros"
                />
                <Form.Check
                type="checkbox"
                label="Eventos Culturales"
                />
                <Form.Check
                type="checkbox"
                label="Eventos Deportivos"
                />
                </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="siete">
              <Form style={{display:'flex'}}>
                <Form.Check
                type="checkbox"
                label="Zonas Arqueológicas"
                />
                <Form.Check
                type="checkbox"
                label="Zonas Naturales"
                />
               
                </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="ocho">
                <Form style={{display:'flex'}}>
                  <input type="text" name="" id=""  placeholder='$1000'/>
                </Form>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
