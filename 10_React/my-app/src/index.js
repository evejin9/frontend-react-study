import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/JsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropsUse from './chapter5/5.3/PropsUse';
import Comment from './chapter5/Comment';
import CommentList from './chapter5/CommentList';
import CommentEx from './chapter5/5.6/CommentEx';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Root DOM Node에 렌더링 하도록 하는 함수
// 처음으로 렌더링할 컴포넌트를 지정하는데 App 컴포넌트가 기본적으로 들어가있음
// root.render(
//     <App />
// );

// 3장 예제
// root.render(
//   // <JsxUse />
//   // <Library />
// );

// 4장 예제
// 1초마다 Clock 컴포넌트를 렌더링하는 코드
// (참고로 실제 개발에서 이렇게 쓰는 경우는 없음)
// setInterval(() => {
//   root.render(
//     <Clock />
//   );
// }, 1000)

// 5장 예제
root.render(
  // <PropsUse />
  <CommentList />
);

// 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
