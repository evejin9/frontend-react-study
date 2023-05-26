import { useEffect, useState } from "react";

function EffectSummary() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  // (공통사항)
  // useEffect는 마운트 시에는 무조건 실행됨!!
  // useEffect의 return 되는 함수는 언마운트 시에는 무조건 실행됨!!

  // 렌더링 될 때마다(마운트 + 업데이트) 매번 실행됨
  useEffect(() => {
    console.log('나는 매번 실행됨');

    return () => {
      // 마운트를 제외한 해당 effect가 실행되기 전과 언마운트 시 실행됨
    };
  });

  // count가 변할 때마다 실행됨
  useEffect(() => {
    console.log('%ccount가 변함', 'color: red; background: #ffdae0;');

    return () => {
      // 마운트를 제외한 해당 effect가 실행되기 전과 언마운트 시 실행됨
    };
  }, [count]);

  // name이 변할 때마다 실행됨
  useEffect(() => {
    console.log('%cname이 변함', 'color: blue; background: #e2d6fd;');

    return () => {
      // 마운트를 제외한 해당 effect가 실행되기 전과 언마운트 시 실행됨
    };
  }, [name]);

  // 마운트 될 때만 실행됨
  useEffect(() => {
    console.log('%c마운트 될 때만 실행', 'color: yellow; background: black;');
    
    return () => {
      // 언마운트 될 때만 실행됨
      console.log('%c언마운트 될 때만 실행', 'color: red; background: black;');
    };
  }, []);

  // 실험 (의존성 배열에 값을 여러 개 넣을 경우)
  useEffect(() => {
    console.log('배열에 있는 name과 count 값이 하나라도 변경될 때 실행됩니다');

    return () => {
      console.log('%c이건 배열 속 count와 name 중 하나라도 언마운트 됐을 때 무조건 실행됩니다', 'color: green; background: black;');
    }
  }, [count, name])

  // 실험 (state => age 추가)
  useEffect(() => {
    console.log('age의 값이 변경되었습니다');

    return () => {
      console.log('%cage가 언마운트 되었습니다', 'color: pink; background: black;'  );
    }
  }, [age])

  console.log();
  return (
    <div>
      <p>카운트: {count} </p>
      <button type="button" onClick={() => setCount(count + 1)}>카운트 +1</button>
      <p>이름: {name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>나이: {age}</p>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
    </div>
  );
}

export default EffectSummary;