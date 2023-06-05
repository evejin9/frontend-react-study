import React from 'react';

function ChildComponent(props) {
  console.log('자식 컴포넌트 렌더링 발생');
  return (
    <div>
      
    </div>
  );
}

// export default ChildComponent;
export default React.memo(ChildComponent);

// (중요) 리액트에서는 기본적으로 부모 컴포넌트가 렌더링되면 모든 자식 컴포넌트들도 무조건 렌더링 된다!
// 이 때 React.memo()를 사용하면 props의 변경이 없을 경우 렌더링을 막아준다.
// (props의 변경이 있으면 당연히 렌더링되어야 함)

// 상위 컴포넌트에서 전달하는 함수에 useCallback()을 쓰면
// props로 전달되는 함수가 새로 정의되지 않기 때문에 props의 변경이 없으므로 재렌더링 발생 안 함

// 최적화 관련 memoization 기법들은 무분별하게 사용하면 안 됨!
// 재사용을 위해 어딘가에 저장해두기 때문에 메모리를 추가적으로 사용

// React.memo가 필요할 때?
// 1) 컴포넌트가 같은 props로 자주 렌더링 될 때
// 2) 컴포넌트가 렌더링 될 때마다 복잡한 로직(연산)을 처리해야 할 때
