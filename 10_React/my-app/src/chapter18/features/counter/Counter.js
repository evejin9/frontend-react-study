import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { array, decrement, inCrementByAmount, increment, selectCount, write } from './counterSlice';

// 5. 리액트 컴포넌트에서 Redux Store와 Actions 사용하기
function Counter(props) {
  // Redux Store에 있는 state를 가져오는 함수
  // const count = useSelector((state) => state.counter.value); // state만 리턴하면 전역 state 전부 가져옴
  const count = useSelector(selectCount); // 리팩터링

  // Redux Store에 요청을 보내주는 함수
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  const [useArray, setUseArray] = useState([]);

  return (
    <>
      <div>
        <button
          type='button'
          // 전역 상태를 업데이트하는 유일한 방법
          // dispatch() 함수: 액션 객체를 스토어에 보냄
          // -> 스토어는 해당 액션에 매칭되는 리듀서 함수를 실행시켜서 새로운 상태를 만들어 줌
          // derement() 함수: 액션 (객체) 생성 함수
          // 함수 실행 결과: 
          // {
          //   payload: undefined;
          //   type: "counter/decrement";
          // }  
          onClick={() => dispatch(decrement())}
        >
          감소
        </button>
        <span>{count}</span>
        <button
          type='button'
          onClick={() => dispatch(increment())}
        >
          증가
        </button>
      </div>
      <div>
        <input 
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          type='button'
          onClick={() => dispatch(inCrementByAmount(incrementValue), setIncrementAmount(''))}
        >
          Add Amount
        </button>
      </div>

      {/* 리덕스 연습용 */}
      <div>
        <input 
          value={useArray}
          onChange={(e) => setUseArray(e.target.value)}
        />
        <button
          onClick={() => (
            dispatch(array(useArray)),
            setUseArray([])
          )}
        >
          배열 추가 
        </button>
      </div>
    </>
  );
}

export default Counter;