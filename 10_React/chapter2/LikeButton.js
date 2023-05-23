// 리액트 함수 컴포넌트
// only JS로만 짠 코드(JSX 사용 안 함)
function LikeButton() {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button',
    { onClick: () => setIsClicked(true) }, // 상태 변경에 따라 재렌더링(앞으로는 DOM을 직접 제어하는 방식이 아닌 상태 변경을 이용)
    isClicked ? 'You liked this.' : 'Like'
  ); // createElement() 결과로 리액트 엘리먼트(일반 객체)
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton));