import React, { useRef } from 'react';

function FileInput(props) {
  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fileInput.current.files); // FileList 객체
    alert(`선택된 파일: ${fileInput.current.files[0].name}`)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        파일 업로드:
        <input type="file" ref={fileInput} />
        {/* 프로그래밍적으로 값을 설정 할 수 없고
        사용자가 첨부한 파일의 정보만 읽어올 수 있기 때문에 항상 비제어 컴포넌트 */}
        {/* 파일에 접근하기 위해서 DOM 노드의 ref를 만들어 접근 */}
      </label>
      <br />
      <button type='submit'>제출</button>
    </form>
  );
}

export default FileInput;