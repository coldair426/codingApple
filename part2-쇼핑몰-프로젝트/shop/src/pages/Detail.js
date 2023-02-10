import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
  let [count, setCount] = useState(0);

  let { id } = useParams();
  let pickedShoes = props.shoes.find((obj) => obj.id === +id);

  setTimeout(() => {}, 2000);

  return (
    <div className='container'>
      <div className='alert alert=warning'>2초이내 구매시 할인</div>
      {count}
      <button
        onClick={() => {
          setCount((count += 1));
        }}>
        버튼
      </button>
      <div className='row'>
        <div className='col-md-6'>
          <img src={pickedShoes.img} width='100%' />
        </div>
        <div className='col-md-6'>
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
