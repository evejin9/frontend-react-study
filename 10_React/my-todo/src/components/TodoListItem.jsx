import React from 'react';
import styled from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";

const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const CheckBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; // 차지할 수 있는 모든 영역 차지
`

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`
// 각 할일 항목에 대한 정보를 보여주는 컴포넌트
// todo 객체를 props로 받아와 상태에 따라 다른 스타일의 UI를 보여줌
function TodoListItem({ todo }) {
  // props로 받았을 경우 한번에 구조 분해 할당 하는 법 
  // const { todo: { id, text, checked } } = props;

  // todo로 먼저 한 번 분해해서 받았을 경우
  const { id, text, checked } = todo;

  return (
    <TodoListItemWrapper>
      <CheckBox>
        <MdCheckBoxOutlineBlank />
      </CheckBox>
      <Text>{text}</Text>
      <Remove>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItemWrapper>
  );
}

export default TodoListItem;