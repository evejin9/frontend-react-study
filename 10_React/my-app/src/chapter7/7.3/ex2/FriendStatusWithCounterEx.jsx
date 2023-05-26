import { useEffect, useState } from "react";

// 개념 설명만을 위한 예제
// 멀티 state, 멀티 effect 예제
function FriendStatuWithCounterEx(props) {
  // useState()를 이용하여 여러 개의 state를 선언할 수 있음
  // count, isOnline 이라는 지역 변수를 가지며 개별적으로 갱신할 수 있음
  // 렌더링과 관련이 있는 데이터는 state로 아닌 것들은 useRef()로 변수 선언
  const [count, setCount] = useState(0);
  const [isOnline, setIsOnline] = useState(null);

  // useEffect()도 마찬가지로 하나의 컴포넌트에서 여러 개 사용 가능
  // 서로 관련이 없는 로직들을 갈라놓을 수 있음
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  
  // 친구의 온라인 상태를 구독할 수 있는 ChatAPI 모듈이 있다고 가정한 예
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    // 친구의 상태를 구독하는 API를 호출
    // ChatAPI는 실제 동작하는 코드가 아닌 Hook을 설명하기 위한 예시 코드
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    return () => {
      // 언마운트 될 때
      // 구독을 해지하는 API를 호출
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
};