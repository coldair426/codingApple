import logo from './logo.svg';
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
  let [modal, setModal] = useState(false);

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>blog</h4>
      </div>
      <button
        onClick={() => {
          const copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순정렬
      </button>
      <button
        onClick={() => {
          const copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
        }}
      >
        글제목변경
      </button>

      {/* <div className='list'>
        <h4>
          {글제목[0]}{' '}
          <span
            onClick={() => {
              따봉변경((따봉 += 1));
            }}
          >
            👍
          </span>{' '}
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}

      {글제목.map(function (a, i) {
        return (
          <div className='list' key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {a}
              <span
                onClick={() => {
                  const copy = 따봉.map((v) => v);
                  copy[i] += 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      {modal === true ? (
        <Modal 글제목={글제목} 글제목변경={글제목변경} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <div>{props.글제목변경}</div>
    </div>
  );
}

export default App;
