import { useState } from 'react';
import { Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import data from './data.js';

function App() {
  let [shoes] = useState(data);

  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>HONG</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>BEST</Nav.Link>
            <Nav.Link href='#features'>MEN</Nav.Link>
            <Nav.Link href='#features'>INTERIOR</Nav.Link>
            <Nav.Link href='#features'>ELECTRONICS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <Row>
        {shoes.map((_, i) => {
          return <Item shoes={shoes[i]} />;
        })}
      </Row>
    </div>
  );
}

function Item(props) {
  return (
    <Col sm>
      <img src={props.shoes.img} width='80%'></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

export default App;
