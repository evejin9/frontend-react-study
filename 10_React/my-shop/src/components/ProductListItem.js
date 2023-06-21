import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// 방법 1: 스타일드 컴포넌트로 스타일 확장
const StyledCol = styled(Col)`
  cursor: pointer;
`;
// 방법 2: 공통 스타일로 작성 (공통 스타일로 만든 클래스 네임 사용)

function ProductListItem(props) {
  const { product } = props;

  const formatter = new Intl.NumberFormat('ko-KR');

  // 이동 경로 설정하기
  const navigate = useNavigate();

  return (
    <>
      <StyledCol md={4} className='cursor-pointer'>
        <img src={product.imagePath} width="80%" 
          onClick={() => {
            navigate(`/detail/${product.id}`);
          }}
        />
        <h4>{product.title}</h4>
        <p>{formatter.format(product.price)}원</p>
      </StyledCol>
    </>
  );
}

export default ProductListItem;