import { memo, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { setStock } from '../store';
import { setUser, addAge } from '../store/userSlice.js';

function Cart() {
  let user = useSelector((state) => state.user);
  let stock = useSelector((state) => state.stock);
  let dispatch = useDispatch();
  let [count, setCount] = useState(0);

  return (
    <div>
      {user.name}({user.age})의 장바구니
      <button onClick={() => dispatch(addAge(1000))}>age 버튼</button>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((v, i) => {
            return <StockItems dispatch={dispatch} stock={stock} index={i}></StockItems>;
          })}
        </tbody>
      </Table>
    </div>
  );
}

function StockItems({ stock, index, dispatch }) {
  return (
    <tr>
      <td>{stock[index].id}</td>
      <td>{stock[index].name}</td>
      <td>{stock[index].count}</td>
      <td>
        <button
          onClick={() => {
            dispatch(setStock(stock[index].id));
          }}>
          +
        </button>
        <button
          onClick={() => {
            dispatch(setStock(stock[index].id));
          }}>
          삭제
        </button>
      </td>
    </tr>
  );
}

export default Cart;
