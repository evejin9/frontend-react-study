import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAdd as AddIcon } from "react-icons/md";
// Tip: as를 사용하여 별칭을 붙여 사용하면 추후 아이콘이 바꿀 때 한 곳만 바꾸면 되서 편함!


const TodoInsertWrapper = styled.form`
  display: flex;
  background: #495057;
`;

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1;

  &::placeholder {
    color: #dee2e6;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;

  &:hover {
    background: #adb5bd;
  }
`;

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 input의 상태를 관리
function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    onInsert(value);
    setValue(''); // value값 초기화

    // submit 이벤트가 발생시키는 새로고침 방지
    e.preventDefault();
  };

  return (
    // form 태그 사용 시 input에서 엔터키를 눌렀을 때도 submit 이벤트가 발생
    // 일반적으로 keyup 이벤트를 통해 엔터키를 감지하는 로직을 작성
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledInput type='text' 
        placeholder='할 일을 입력하세요.' 
        value={value} 
        onChange={handleChange}
      />
      <StyledButton type='submit'>
        <AddIcon/>
      </StyledButton>
    </TodoInsertWrapper>
  );
}

export default TodoInsert;