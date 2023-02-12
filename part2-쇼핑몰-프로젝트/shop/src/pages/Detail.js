import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
  let [sale, setSale] = useState(1);
  let [count, setCount] = useState(0);
  let { id } = useParams();
  let pickedShoes = props.shoes.find((obj) => obj.id === +id);
  let [warn, setWarn] = useState(false);
  let [userInput, setUserInput] = useState('');

  console.log(Number(userInput));

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

  return (
    <div className='container'>
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
    </div>
  );
}

export default Detail;
