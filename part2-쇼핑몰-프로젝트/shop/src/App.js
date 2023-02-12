import { useState } from 'react';
import { Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import Detail from './pages/Detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [svData, setSvData] = useState();
  let [moreButton, setMoreButton] = useState(0);
  let [loading, setLoading] = useState(false);

  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>HONG</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('./');
              }}>
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('./detail');
              }}>
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>
              <Row>
                {shoes.map((_, i) => {
                  return <Item shoes={shoes[i]} index={i} />;
                })}
              </Row>
              <button
                onClick={() => {
                  setLoading(true);
                  setMoreButton((moreButton += 1));
                  if (moreButton === 1) {
                    axios
                      .get('https://codingapple1.github.io/shop/data2.json')
                      .then((data) => {
                        const arr = [...shoes, ...data.data];
                        setShoes(arr);
                        setLoading(false);
                      })
                      .catch(() => {
                        console.log('실패함ㅅㄱ');
                        setLoading(false);
                      });
                  } else if (moreButton === 2) {
                    axios
                      .get('https://codingapple1.github.io/shop/data3.json')
                      .then((data) => {
                        const arr = [...shoes, ...data.data];
                        setShoes(arr);
                        setLoading(false);
                      })
                      .catch(() => {
                        console.log('실패함ㅅㄱ');
                        setLoading(false);
                      });
                  } else {
                    alert('더 이상 상품이 없어요~~');
                    setLoading(false);
                  }
                }}>
                더보기
              </button>
              {loading ? <span>로딩중~</span> : null}
            </>
          }></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes} />}></Route>
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>위치정보임</div>} />
        </Route>
        <Route path='/event' element={<Event></Event>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path='*' element={<div>없는페이지요</div>}></Route>
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Item(props) {
  return (
    <Col sm>
      <img src={`https://codingapple1.github.io/shop/shoes${props.index + 1}.jpg`} width='80%'></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

export default App;
