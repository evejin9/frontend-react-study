import { useEffect, useState } from "react";

function CounterEffect(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('effect가 실행!');
    
    document.title = `You clicked ${count} times`;
    // }); // 처음 마운트 될 때 + 매번 업데이트 될 때 마다 
    // }, []); // 처음 마운트 될 때만
  }, [count]); // 처음 마운트 될 때 + count 값이 바뀔 때만 실행
  
  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button type="button" 
        onClick={() => {
          setCount(count + 1);
          
          // document.title = `You clicked ${count} times`;

          // onClick과 useEffect는 완전히 다른 용도
          // onClick 속성에 넣어준 콜백 함수는 "클릭 시 호출되는" 함수이고,
          // useEffect 내부에 있는 콜백 함수는 "렌더링 시 (의존성 배열에 따라) 호출되는" 함수이다.
          // 어떻게 사용하는지에 따라 겹치는 결과도 있겠지만, 두 개는 완전히 다른 의도를 가짐!!
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default CounterEffect;

// [정리]
// useEffect()를 쓰는 경우?
// - useEffect() 안에 콜백 함수는 HTML 렌더링 후에 동작함 => 연산이 오래 걸리는 작업들을 넣으면 좋음
// - 아니면 주로 처음 렌더링 시 해줘야 하는 초기 작업들
// 1) 에러가 떠서 페이지를 다시 백 시켜야 할 때
// 2) 처음 마운트 됐을 때 그 페이지를 이용할 수 있는 사용자인지 권한 체크
// 3) 타이머 동작 시킬 때
// 4) 주로 데이터 페치 관련 작업을 많이 넣음