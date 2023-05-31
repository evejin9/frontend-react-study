import React, { useRef, useState } from 'react';

function ComponentVariable(props) {
  const [count, setCount] = useState(1);

  console.log('컴포넌트 렌더링!!');

  // 값은 증가하지만 렌더링 될 때마다 초기화 됨
  let id = 1;
  console.log(id);

  // 매번 렌더링 될 때마다 항상 같은 레퍼런스 객체를 반환 (전 생애주기에 걸쳐 유지됨)
  // 렌더링 될 때 값이 초기화 되지 않음
  // 렌더링과 관련이 없는 데이터에 대한 컴포넌트 변수 선언은 useRef()를 사용
  // 불필요한 렌더링 방지를 위해 렌더링과 관련이 있는 데이터만 state로 사용! 
  const idRef = useRef(1);
  console.log(idRef);

  return (
    <div>
      <p>총 {count}번 렌더링</p>
      <button onClick={() => {
        setCount(count + 1);
      }}>
        count 업데이트 <br />
        (재렌더링 발생)
      </button>

      <p>현재 id 값: {id}, idRef 값: {idRef.current}</p>
      <button onClick={() => {
        id++;
        idRef.current++;
      }}>
        id 업데이트 <br />
        (재렌더링 안됨)
      </button>
    </div>
  );
}

export default ComponentVariable;