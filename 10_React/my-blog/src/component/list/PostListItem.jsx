import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  &:hover {
    background: lightgrey;
  }
`;

// 글의 제목만 표시해주는 컴포넌트
const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

function PostListItem(props) {
  const { post } = props;

  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => {
      navigate(`/post/${post.id}`); // id 값은 URL 파라미터로 사용할 예정
    }}>
      <TitleText>{post.title}</TitleText>
    </Wrapper>
  );
}

export default PostListItem;