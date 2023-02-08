import './App.css';
import { useState } from 'react';

function App() {
  let post = '춘천 맛집';
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '춘천 우동맛집',
    '자바스크립트독학',
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);

  let [modal, setModal] = useState([false, 0]);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>blog</h4>
      </div>
      {글제목.map((a, i) => (
        <div className='list' key={i}>
          <h4
            onClick={() => {
              setModal(modal.map((v, index) => (index === 0 ? !v : a)));
            }}
          >
            {a}
            <span
              onClick={(e) => {
                e.stopPropagation();
                따봉변경(따봉.map((v, index) => (index === i ? v + 1 : v)));
              }}
            >
              👍
            </span>
            {따봉[i]}
          </h4>
          <p>2월 17일 발행</p>
          <button
            onClick={(e) => {
              let copy2 = [...따봉];
              copy2.splice(i, 1);
              따봉변경(copy2);
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy);
            }}
          >
            글삭제
          </button>
        </div>
      ))}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);

          let copy2 = [...따봉];
          copy2.unshift(0);
          따봉변경(copy2);
        }}
      >
        입력
      </button>
      {modal[0] === true ? <Modal modal={modal} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.modal[1]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
