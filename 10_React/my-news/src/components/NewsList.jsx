import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import NewsItem from './NewsItem';
import axios from "axios";
import { useParams } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  height: 100vh;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

// react-spinners 적용 스타일
const LoadingBlock = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

// api를 요청하고 뉴스 데이터가 들어있는 배열을 리액트 컴포넌트 배열로 변환하여 렌더링해주는 컴포넌트
function NewsList(props) {
  const { category = 'all' } = useParams();
  // console.log(category);

  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false); // 로딩을 상태로 관리하여 API 요청이 대기 중인지 판별

  // NewsList 컴포넌트가 화면에 보이는 시점에 API를 요청
  // how? useEffect()를 사용하여 컴포넌트가 처음 렌더링 됐을 때 요청
  useEffect(() => {
    // async 함수 선언
    const fetchNewsData = async () => {
      setLoading(true);
      try {
        // 카테고리가 all일때는 아무것도 들어가면 안 되고, 그 외엔 &category=해당 카테고리 값 넣기
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = 
          await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=969d0eb82c63463292fbc9001a64d5ec`);

        // console.log(response.data);
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchNewsData();
  }, [category]);

  // 로딩 중일 때
  // 추천: react-spinners 또는 Lottie Files 사용
  if (loading) {
    return <NewsListBlock>
      <LoadingBlock>
        {/* react-spinners 적용 */}
        <SyncLoader
          color="#4a80bf"
          speedMultiplier={1}
        />
      </LoadingBlock>
    </NewsListBlock>
  }

  // 아직 articles 값이 없을 때
  // if (!articles) {
  //   return null;
  // }

  return (
    <NewsListBlock>
      {/* <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} /> */}

      {/* map() 함수로 반복 렌더링하기 */}
      {articles && articles.map(article => 
        <NewsItem key={article.url} article={article} />
      )}
    </NewsListBlock>
  );
}

export default NewsList;