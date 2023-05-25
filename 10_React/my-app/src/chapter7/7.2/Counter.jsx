import { useState } from "react";

function Counter(props) {
  // state를 사용해서 값이 바뀔 때마다 재렌더링이 되도록 해야함
  let [count, setCount] = useState(0); // 초기값 0
  console.log(useState(0));
  // useState()의 결과로 배열이 반환됨 -> [초기값, set함수]
  // 배열의 구조 분해 할당을 사용하여 변수 선언 및 할당

  // (참고) ES5
  const arr = useState(0);
  const cnt = arr[0];
  const setCnt = arr[1];

  // 만약 state 미사용 시 
  // 이런 식은 카운트 값을 증가시킬 수는 있지만, 재렌더링이 일어나지 않음
  // 다른 이유로 재렌더링이 발생 시, 값이 초기화됨
  let wrongCount = 0;

  // Quiz: 글자색 바꾸기, 버튼 내용 바꾸기
  const [color, setColor] = useState('black');
  const [finish, setClick ] = useState(false);
  const [font, setFont] = useState(16);

  return (
    <div>
      {/* 1. state 사용 */}
      <p>총 {count}번 클릭했습니다.</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        클릭
      </button>

      {/* 2. state 직접 수정 */}
      {/* 직접 count state를 증가시키면 값은 증가되지만 재렌더링이 일어나지 않음 */}
      <p>총 {count}번 클릭했습니다.</p>
      <button type="button" onClick={() => count++}>
        클릭(잘못된 방법)
      </button>

      {/* 3. state 미사용 */}
      <p>총 {wrongCount}번 클릭했습니다.</p>
      <button type="button" onClick={() => {
        wrongCount++;
        console.log(wrongCount);
      }}>
        클릭(잘못된 방법)
      </button>

      {/* Quiz: 글자색 바꾸기 */}
      <p style={{ color: color }}>클릭했습니다.</p>
      <button type="button" onClick={() => setColor('red')}>
        클릭
      </button>

      {/* Quiz: 버튼 내용 바꾸기 */}
      <button type="button" onClick={() => setClick(true)} disabled={finish}>
        {finish ? '마감':'신청'}
      </button>

      {/* 글자 크기 바꾸기 */}
      <p>글자 크기를 변경합니다.</p>
      <button style={{ fontSize: font }} type="button" onClick={() => setFont(30)}>
        크게
      </button>
    </div>
  );
}

export default Counter;