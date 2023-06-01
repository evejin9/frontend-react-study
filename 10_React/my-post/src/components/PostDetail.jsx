import React from 'react';

function PostDetail(props) {
  const { posts, currentIndex, setPosts } = props;

  return (
    <div className="detail">
      {/* <h4>제목: {props.posts[props.currentIndex]} </h4> */}
      <h4>제목: {posts[currentIndex]} </h4>
      <p>날짜: 2023년 1월 20일</p>
      <p>작성자: goni.kim</p>
      <p>... 상세내용 ...</p>

      {/* 간단한 포스트 수정하기 */}
      <button onClick={() => {
        // 배열이나 객체의 state 변경하는 법
        // 새로운 배열 또는 객체를 만들어 set함수에 넣어줘야 함
        const copyPosts=[...posts]; // 배열의 복사본 만들기(새로운 배열)
        copyPosts[currentIndex] = `${copyPosts[currentIndex]} - 수정`;
        setPosts(copyPosts);

        // 코드 간소화 도전
        // setPosts((prevposts) => ({
        //   ...prevposts,
        //   [currentIndex]: `${prevposts[currentIndex]} - 수정`
        // }));
      }}>
        수정하기
      </button>
    </div>
  );
}

export default PostDetail;

// 어떤 것을 컴포넌트로 만들 것인가?
// 1. 반복적인 HTML이 발생할 때
// 2. 큰 페이지들(컴포넌트로 이루어짐)
// 3. 여기저기 자주 출현하는 것들(재사용을 위해)
// but, 컴포넌트로 너무 쪼개는 것도 안 좋음!

// 배열이나 객체의 state 변경할 때 주의!
// 1. state 변경 함수의 특징
// 기존 state가 신규 state랑 같은 경우, 변경 안 함
// 2. 배열/객체의 특징
// 변수에 주소(참조)값이 저장됨