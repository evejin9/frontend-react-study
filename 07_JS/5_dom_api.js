// querySelector('CSS 선택자')
// HTML에서 해당 요소를 검색하여 찾은 첫 번째 요소 하나만 반환
// 요소를 찾지 못하면 null을 반환 
const boxEl = document.querySelector('.box');

console.log(boxEl);

// 요소에 이벤트 리스너 등록하기
// 이벤트: 마우스(click), 스크롤(scroll), 키보드(keydown) 등 다양함
// addEventListener() 메소드: 해당 요소에 지정한 이벤트(Event)가 발생하는지 듣고(listen) 있다가 실제 이벤트가 발생하면 연결된 함수(Handler)를 실행(Callback)
boxEl.addEventListener('click', function () {
  console.log('Click!!');

  // classList 속성: 요소의 HTML class 속성에 대한 제어 명령이 포함
  // classList 속성 사용 - 추가하기 
  boxEl.classList.add('active'); //요소에 active라는 클래스 추가

  // classList 속성 사용 - 확인하기
  let hasActive = boxEl.classList.contains('active'); // 요소에 active라는 클래스 값이 있는지 확인
  console.log(hasActive);
  
  // classList 속성 사용 - 제거하기
  boxEl.classList.remove('active');
  hasActive = boxEl.classList.contains('active');
  console.log(hasActive);
});

// 사용 예: active 라는 클래스에 미리 스타일을 지정하고 클릭한 요소에 스타일을 적용할 때 

// (참고) 한 번 정도 슥 읽어볼 것!
// 이벤트 종류: https://www.w3schools.com/jsref/dom_obj_event.asp
// HTML DOM 속성/메소드: https://www.w3schools.com/jsref/dom_obj_document.asp