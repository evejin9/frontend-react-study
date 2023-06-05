import React, { useCallback, useEffect, useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent(props) {
  const [count, setCount] = useState(0);


  // count state가 변경되서 재렌더링 될 때마다 매번 함수가 새로 정의됨
  // 실행이 아니라 정의!! 즉, 메모리 상에 새로운 함수가 만들어짐
  const handleClick = () => {
    setCount(count => count + 1);
  };
  
  // useCallback() 안에 넣으면 컴포넌트가 마운트 될 때 한 번만 함수가 정의됨
  // memoization
  // props로 전달해야 할 함수를 만들 때는 useCallback()을 사용해본다!
  const handleClickCallback = useCallback(() => {
    setCount(count => count + 1);
  }, []);
  
  useEffect(() => {
    console.log('handleClick을 새롭게 정의: ', handleClick);
  }, [handleClick]);
  
  useEffect(() => {
    console.log('handleClickCallback 새롭게 정의: ', handleClickCallback);
  }, [handleClickCallback]);

  return (
    <>
      <p>총 {count}번 카운트</p>
      <button type='button' onClick={handleClick}>
        카운트 증가(재렌더링 발생)
      </button>

      {/* 자식 컴포넌트에 props로 함수를 전달 후 차이점 확인 */}
      {/* <ChildComponent handleClick={handleClick} /> */}
      <ChildComponent handleClick={handleClickCallback} />
    </>
  );
}

export default ParentComponent;