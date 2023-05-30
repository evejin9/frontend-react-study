import React from 'react';

// Quiz2: 배열의 각 요소(객체 데이터)에 id 속성을 추가하고 배열 렌더링 시 key값 추가해보기
const students = [
  {
    id: '1',
    name: '김수진',
  },
  {
    id: '2',
    name: '유재석',
  },
  {
    id: '3',
    name: '이영지',
  },
  {
    id: '4',
    name: '유지민',
  }
];



// 출석부 이름 출력하기
function AttendanceBook(props) {
  return (
    <ul>
      {/* Quiz1: 학생 이름을 반복 렌더링 해보기 */}
      {/* {students.map((student, index) => {
        return <li key={student.id}>{student.name}</li>;
      })} */}
      {students.map(student => <li key={student.id}>{student.name}</li>)}
    </ul>
  );
}

export default AttendanceBook;