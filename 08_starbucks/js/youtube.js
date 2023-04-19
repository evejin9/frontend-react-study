// Youtube IFrame API를 로드
// 쓰는 이유?
// <iframe> 태그만 써도 유튜브 영상 삽입이 가능한데 태그의 속성만으로 커스텀 하기에는 한계가 있음
// api를 사용하면 다양한 명령으로 동영상 제어가 가능

// (참고) iframe(inline frame): HTML 문서 내에 다른 문서를 삽입하는데 사용

let tag = document.createElement('script'); // <script>

tag.src = "https://www.youtube.com/iframe_api"; // <script src="https://www.youtube.com/iframe_api"> 
let firstScriptTag = document.getElementsByTagName('script')[0]; // 태그명으로 찾은 <script> 태그 중에 가장 첫번째 요소
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // firstScriptTag 이전 위치에 tag 요소를 넣어라

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// let player;
function onYouTubeIframeAPIReady() { // 라이브러리가 이 함수의 이름을 찾아 실행하기에 임의로 바꾸면 안됨
  new YT.Player('player', { // <div id ="player"></div>를 의미
    // height: '360',
    // width: '640',
    videoId: 'c7Tg5uNTmfg',
    playerVars : { // 더 자세한 옵션은 플레이어 매개변수 메뉴 확인
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무(아래 플레이리스트 옵션 필수)
      playlist: 'c7Tg5uNTmfg', // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때 내가 작성한 함수를 실행해줌
      onReady: function (event) {
        // event.target: 재생되고 있는 영상 자체
        event.target.mute(); // 음소거!
      }
    }
  });
}