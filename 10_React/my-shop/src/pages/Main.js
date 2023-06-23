import React from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from "axios";
import { PacmanLoader } from "react-spinners";

// 리액트(JS)에서 이미지 파일 import 하는법
import yonexImg from "../images/yonex.jpg";

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";
import { useEffect } from 'react';
import { getAllProducts, getMoreProducts, getMoreProductsAsync, selectProductList, selectStatus } from '../features/product/productSlice';
import ProductListItem from '../components/ProductListItem';
import { getProducts, getUser } from '../api/productAPI';
import LatestView from '../components/LatestView';

const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yonexImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const NewPacmanLoader = styled(PacmanLoader)`
  margin: 0 auto;
`

function Main(props) {
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);
  const status = useSelector(selectStatus); // API 요청 상태(로딩 상태)

  // 처음 마운트 됐을 때 서버에 상품 목록 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 전역 상태로 저장
  useEffect(() => {
    // 서버에 데이터 요청했다고 가정
    // ... api call ...
    dispatch(getAllProducts(data));
  },[]);

  const handleGetMoreProducts = async () => {
    const result = await getProducts();
    if (!result) return; // 결과값이 없으면 함수 종료

    dispatch(getMoreProducts(result));
  };

  const handleGetMoreProductsAsync = () => {
    dispatch(getMoreProductsAsync());
  };

  // 개인 연습
  const handleUserInfo = async () => {
    const result = await getUser();
    console.log(result);

    if (!result) return;

    alert(`${result.name}(${result.email})님, 환영합니다!`);
  };

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

            {/* 로딩 만들어보기 */}
            {status === 'loading' && 
              <div>
                <NewPacmanLoader
                  color="#36d7b7"
                  margin={2}
                  size={40}
                />
              </div>
            }
          </Row>
        </Container>

        {/* 상품 더보기 버튼 */}
        <Button variant='secondary' className='my-4'
          onClick={() => {
            axios.get(`https://my-json-server.typicode.com/evejin9/db-shop/products`)
              .then((response) => {
                // console.log(response.data);
                dispatch(getMoreProducts(response.data));
              })
              .catch((error) => {
                console.error(error);
              });
          }}
        >
          더보기
        </Button>

        {/* 위 HTTP 요청 코드를 함수로 만들어서 api 폴더로 추출하고, async/await로 바꾸기 */}
        <Button variant='secondary' className='my-4' onClick={handleGetMoreProducts}>
          더보기
        </Button>

        {/* thunk를 이용한 비동기 작업 처리하기 */}
        <Button variant='secondary' className='my-4' onClick={handleGetMoreProductsAsync}>
          더보기 {status}
        </Button>

        {/* 개인 연습 */}
        {/* <hr />
        <Button variant='outline-info' className='mb-4' onClick={handleUserInfo}>유저 정보</Button> */}

        {/* 최근 본 상품 */}
        <LatestView />
      </section>
    </>
  );
}

export default Main;

// 가짜(Fake) API 서버 만들기
// 실무와 비슷한 느낌으로 하기 위해 가짜(Fake) API 서버를 만들거임

// 1. json-server (혼자 CRUD 연습하기 좋음)
// 이 도구를 사용하면 json 파일 하나만 있으면 로컬에 연습용 서버를 쉽게 구성 할 수 있음
// (즉, 사용하려는 컴퓨터에서 매번 로컬 서버를 띄워야 함)

// json-server 사용법
// ./src/data2.json 이라는 파일을 작성
// npx json-server ./src/data2.json --port 4000
// 또는 
// npm i -g json-server
// json-server --watch ./src/data2.json --port 4000

// 더 자세한 사용법 참고
// https://github.com/typicode/json-server
// https://redux-advanced.vlpt.us/3/01.html

// 2. My JSON Server (Read만 가능)
// 이 서비스를 사용하면 GitHub와 연동하여 연습용 서버를 쉽게 구성 할 수 있음

// My JSON Server 사용법
// GitHub에 저장소 생성(<your-username>/<your-repo>)
// db.json파일 만들기
// 서버에 액세스하려면 https://my-json-server.typicode.com/<your-username>/<your-repo>를 방문

// 사용 예
// https://my-json-server.typicode.com/geoblo/db-shop
// https://my-json-server.typicode.com/geoblo/db-shop/products
// https://my-json-server.typicode.com/geoblo/db-shop/products/1