import Comment from "./Comment";

// 댓글 데이터를 별도의 객체로 분리하고 반복 가능한 배열에 담기
const comments = [
  {
    name:'김수진',
    content: '안녕하세요, 수진입니다.'
  },
  {
    name:'망고',
    content: '안녕하세요, 망고입니다.'
  },
  {
    name:'포도손난로',
    content: '안녕하세요, 포도손난로입니다.'
  },
  {
    name:'김사자',
    content: '안녕하세요, 사자입니다.'
  }
];

// 댓글들을 포함하는 CommentList 컴포넌트
function CommentList(props) {
  return (
    <div>
      {/* Quiz: props를 추가하여 name과 content 값 전달 */}
      {/* <Comment name="김수진" content="제가 만든 첫 컴포넌트입니다." />
      <Comment name="망고" content="저도 컴포넌트 만들었습니다." />
      <Comment name="포도손난로" content="저는 두 번째 컴포넌트입니다." /> */}

      {/* 배열을 동적으로 렌더링해야 할 때에는 배열의 map()함수를 사용 
      (map(): 배열 안에 있는 각 요소를 변환하여 새로운 배열을 만듦)
      앞으로 리액트에서 배열을 동적으로 렌더링해야 할 때는 map() 함수를 사용하여
      일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환해주면 됨*/}
      {comments.map((comment, index) => {
        return (
          <Comment name={comment.name} content={comment.content}/>
        );
      })}

      {/* 코드 간소화 */}
      {comments.map(comment => <Comment name={comment.name} content={comment.content} />)}

      {/* map() 함수의 결과 */}
      {[
        <Comment name="김수진" content="안녕하세요, 수진입니다."/>, 
        <Comment name="망고" content="안녕하세요, 망고입니다."/>,
        <Comment name="포도손난로" content="안녕하세요, 포도손난로입니다."/>,
        <Comment name="김사자" content="안녕하세요, 사자입니다."/>
      ]}
    </div>
  );
}

export default CommentList;