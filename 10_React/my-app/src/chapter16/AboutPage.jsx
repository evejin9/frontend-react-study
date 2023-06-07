import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

function AboutPage(props) {
  const location = useLocation();
  
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  return (
    <div>
      <h1>쿼리스트링 사용</h1>
      <h1>{location.search}</h1>
      {/* 이 문자열 앞에 있는 ?를 지우고, &로 분리한 뒤 key와 value를 파생하는 작업이 필요했는데, 
      현재는 useSearchParams() 훅을 이용하여 간편하게 작업 */}
      <h3>useSearchParams</h3>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>

    </div>
  );
}

export default AboutPage;