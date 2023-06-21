import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pushProductList, selectProductList } from './productSlice';
import styled from "styled-components";

const ProductBox = styled.div`
  margin-top: 20px;

  h4 {
    padding: 10px;
    font-weight: 500;
  }

  li {
    font-size: 18px;
  }
`

function ProductList(props) {
  const [newProduct, setNewProduct] = useState('');

  // const product = useSelector((state) => state.product.value);
  const product = useSelector(selectProductList);

  const dispatch = useDispatch();

  const handlePushProduct = () => (
    dispatch(pushProductList(newProduct)),
    setNewProduct('')
  )

  return (
    <ProductBox>
      상품 추가: 
      <input 
        type='text'
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handlePushProduct();
          }
        }}
      />
      <button
        onClick={() => handlePushProduct()}
      >
        상품 추가
      </button>
      <h4>상품 목록</h4>
      <ul>
        {product.map((p) =>
          <li key={p.id}>{p.productName}</li>
        )}
      </ul>
    </ProductBox>
  );
}

export default ProductList;