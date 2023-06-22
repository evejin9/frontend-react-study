// 상품과 관련된 api 요청 함수들을 정의
// 가독성도 좋고 여러 곳에서 재사용할 수 있도록 함수로 만듦

import axios from "axios";

// 상품 목록 조회
// export const getProducts = () => {
  // axios.get(`https://my-json-server.typicode.com/evejin9/db-shop/products`)
  //   .then((response) => {
  //     // console.log(response.data);
  //     dispatch(getMoreProducts(response.data))
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // });
// };

// 리팩터링 
export const getProducts = async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/evejin9/db-shop/products');
    
    if (response.status === 200) { // 요청에 대한 응답의 상태가 200 OK 일 때만 결과를 리턴 
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error;
  }
};

// 개인 연습
export const getUser = async () => {
  try {
    const response = await axios.get(`https://my-json-server.typicode.com/evejin9/db-shop/user`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


// 특정 상품 조회
export const getProductsById = async (id) => {
  try {
    const response = await axios.get(`https://my-json-server.typicode.com/evejin9/db-shop/products/${id}`);
    
    if (response.status === 200) { // 요청에 대한 응답의 상태가 200 OK 일 때만 결과를 리턴 
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error;
  }
};

// 만약 서버로 데이터를 보내야 한다면?
// json-server 이용하면 테스트 가능
export const addProduct = async (product) => {
  try {
    // 일반적으로 백엔드 개발자가 api 주소와 양식을 정해줌
    const response = await axios.post(`http://localhost:3000/products`, { product });
    
    if (response.status === 200) { // 요청에 대한 응답의 상태가 200 OK 일 때만 결과를 리턴 
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error;
  }
};

export const orderProduct = async (productId, orderCount) => {
  try {
    const response = await axios.post(`http://localhost:3000/products-order`, { productId, orderCount });
    
    if (response.status === 200) { // 요청에 대한 응답의 상태가 200 OK 일 때만 결과를 리턴 
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error;
  }
};