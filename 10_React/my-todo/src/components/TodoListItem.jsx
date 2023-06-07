import React from 'react';
import styled, { css } from 'styled-components';
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

  svg {
    /* 아이콘 스타일링 */
    font-size: 1.5rem;
    color: ${props => props.checked && '#22b8cf'};
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; // 차지할 수 있는 모든 영역 차지

  ${props => props.checked &&
    css`
      color: #adb6bd;
      text-decoration: line-through;
    `
  }
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
function TodoListItem(props) {
  // props로 받았을 경우 한번에 구조 분해 할당 하는 법 
  const { todo: { id, text, checked } , onRemove, onToggle } = props;

  // todo로 먼저 한 번 분해해서 받았을 경우
  // const { id, text, checked } = todo;

  console.log(id, text);

  return (
    <TodoListItemWrapper>
      <CheckBox checked={checked} 
        onClick={() => { onToggle(id); }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </CheckBox>
      <Text checked={checked}>{text}</Text>
      <Remove
        onClick={() => { onRemove(id); }}
      >
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItemWrapper>
  );
}

// export default TodoListItem;
export default React.memo(TodoListItem);