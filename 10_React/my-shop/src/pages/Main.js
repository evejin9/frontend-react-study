import React from 'react';
import styled from "styled-components";
import { Col, Container, Row } from 'react-bootstrap';

// 리액트(JS)에서 이미지 파일 import 하는법
import yonexImg from "../images/yonex.jpg";

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, selectProductList } from '../features/product/productSlice';
import ProductListItem from '../components/ProductListItem';

const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yonexImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Main(props) {
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);

  // 처음 마운트 됐을 때 서버에 상품 목록 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 전역 상태로 저장
  useEffect(() => {
    // 서버에 데이터 요청했다고 가정
    // ... api call ...
    dispatch(getAllProducts(data));

  },[]);

  return (
    <>
      {/* 메인 이미지 섹션 */}
      <section>
        <MainBackground />
        {/* <img src={yonexImg} /> */}
      </section>

      {/* 상품 목록 레이아웃 섹션 */}
      <section>
        <Container>
          <Row>
            {/* 부트스트랩을 이용한 반응형 작업 */}
            {/* md >= 768px 이상에서 전체 12등분 중 4:4:4로 보여줌 */}
            {/* <Col md={4}>
              <img src="https://www.yonexmall.com/shop/data/goods/1645767865278s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4}>
              <img src="https://www.yonexmall.com/shop/data/goods/1659329583483s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4}>
              <img src="https://www.yonexmall.com/shop/data/goods/1667190100104s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col> */}

            {/* Quiz:
              1) 반복적인 상품 아이템을 scr/components/ProductListItem 컴포넌트화 시키기
              2) productList 배열을 반복하여 ProductListItem을 렌더링하기
              3) 상품 정보를 props로 넘겨서 데이터 바인딩하기
            */}

            {productList.map((product) => <ProductListItem key={product.id} product={product} />)}

          </Row>
        </Container>
      </section>
    </>
  );
}

export default Main;