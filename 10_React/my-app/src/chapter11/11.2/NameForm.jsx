import React, { useState } from 'react';

function NameForm(props) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    // e.target.value: 이벤트가 발생한 타켓(<input>)에 입력된 값 = value 속성의 값
    // setValue(e.target.value);
    // 입력값이 state를 통해 관리되는 이런 방식을 제어 컴포넌트라고 부름

    // 만약 사용자가 입력한 모든 알파벳을 대문자로 변경시켜서 넣으려면?
    setValue(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    alert('입력한 이름: ' + value);
    e.preventDefault(); // 해당 event의 기본 동작을 막음
    // 여기서 submit 이벤트의 기본 동작은 새로 고침
  };

  return (
    // 여기서는 기존 HTML 방식과 차이를 보여주기 위해 form 태그를 그대로 사용함
    <>
      <form onSubmit={handleSubmit}>
        <label>
          이름: 
          <input type="text" value={value} onChange={handleChange} /> 
          {/* <input type="text" onChange={handleChange} />  */}
          {/* state에서 값을 가져다 넣어줌으로 항상 state에 들어있는 값이 표시됨
            (주의: 이렇게 안 하면 state에 들어가 있는 값이 아닌 내가 타이핑한 값이 보임.)
          */}
        </label>
        <button type="submit">제출</button>
      </form>
      {/* <button type='button' onClick={handleSubmit}>제출</button> */}
    </>
  );
}

export default NameForm;