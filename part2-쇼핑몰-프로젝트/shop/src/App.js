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
        <Col sm>
          <img
            src='https://codingapple1.github.io/shop/shoes1.jpg'
            width='80%'
          ></img>
          <h4>{shoes[0].title}</h4>
          <p>{shoes[0].price}</p>
        </Col>
        <Col sm>
          <img
            src='https://codingapple1.github.io/shop/shoes2.jpg'
            width='80%'
          ></img>
          <h4>{shoes[1].title}</h4>
          <p>{shoes[1].price}</p>
        </Col>
        <Col sm>
          <img
            src='https://codingapple1.github.io/shop/shoes3.jpg'
            width='80%'
          ></img>
          <h4>{shoes[2].title}</h4>
          <p>{shoes[2].price}</p>
        </Col>
      </Row>
    </div>
  );
}

export default App;
