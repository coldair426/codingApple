import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Detail({ shoes }) {
  let [sale, setSale] = useState(1);
  let [count, setCount] = useState(0);
  let { id } = useParams();
  let pickedShoes = shoes.find((obj) => obj.id === +id);
  let [warn, setWarn] = useState(false);
  let [userInput, setUserInput] = useState('');
  let [tab, setTab] = useState(0);

  useEffect(() => {
    let a = setTimeout(() => setSale(0), 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  useEffect(() => {
    Number(userInput) || Number(userInput) === 0 ? setWarn(false) : setWarn(true);
    return () => {
      setWarn(0);
    };
  }, [userInput]);

  let [fade2, setFade2] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setFade2('end');
    }, 100);
    return () => setFade2('');
  }, []);

  return (
    <div className={`container start ${fade2}`}>
      {sale ? <div className='alert alert-warning'>2초이내 구매시 할인</div> : null}
      {count}
      <button
        onClick={() => {
          setCount((count += 1));
        }}>
        버튼
      </button>
      <div className='row'>
        <div className='col-md-6'>
          <img src={`https://codingapple1.github.io/shop/shoes${+id + 1}.jpg`} width='100%' />
        </div>
        <div className='col-md-6'>
          {warn === false ? null : <div className='alert alert-warning'>경고:숫자만입력하세요</div>}
          <input
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
          <h4 className='pt-5'>{pickedShoes.title}</h4>
          <p>{pickedShoes.content}</p>
          <p>{pickedShoes.price}</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>
      <Nav variant='tabs' defaultActiveKey='link-0'>
        <Nav.Item onClick={() => setTab(0)}>
          <Nav.Link eventKey='link-0'>버튼 0</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => setTab(1)}>
          <Nav.Link eventKey='link-1'>버튼 1</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => setTab(2)}>
          <Nav.Link eventKey='link-2'>버튼 2</Nav.Link>
        </Nav.Item>
      </Nav>{' '}
      <TabContent tab={tab} />
    </div>
  );
}

function TabContent({ tab }) {
  let [fade, setFade] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setFade('end');
    }, 100);

    return () => {
      setFade('');
    };
  }, [tab]);

  return <div className={`start ${fade}`}>{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}</div>;
}

export default Detail;
