import { useEffect, useState } from "react";

// 개념 설명만을 위한 예제
// isOnline이라는 state에 따라서 친구의 상태가 온라인인지 아닌지를 텍스트로 보여주는 컴포넌트
function FriendStatusEx(props) {
  const [isOnline, setIsOnline] = useState(null);
  
  // 친구의 온라인 상태를 구독할 수 있는 ChatAPI 모듈이 있다고 가정한 예
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    // 친구의 상태를 구독하는 API를 호출
    // ChatAPI는 실제 동작하는 코드가 아닌 Hook을 설명하기 위한 예시 코드
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    // useEffect()에서 리턴하는 함수
    // 이 함수는 effect 이후에 어떻게 정리(clean-up)할 것인지에 대한 코드가 들어감
    // 이 예제에서는 구독을 해지하는 정리 작업을 함
    // 다른 예로는 타이머를 시작했다면 타이머를 멈추는 정리 작업, 이벤트 리스너를 등록했다면 등록한 리스너를 제거해주는 정리 작업
    // componentWillUnmount와 같은 방식으로 동작(컴포넌트가 언마운트 될 때 호출함)
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