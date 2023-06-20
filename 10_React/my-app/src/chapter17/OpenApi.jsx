import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const MovieBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MovieItem = styled.div`
  width: 400px;
  height: 200px;
  border: 2px solid;
  margin: 10px;
  padding: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 20px;
  }
`

const DateButton = styled.button`
  margin: 10px;
`;

function OpenApi(props) {
  const [movies, setMovies] = useState([]);
  const [clickedButton, setClickedButton] = useState(false);
  const [movieDate, setMovieDate] = useState('');

  useEffect(() => {
    const handleMovieApi = async () => {
      try {
        const response = await axios.get(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=3b6b08e276337cb14e688e2449c99322&targetDt=${movieDate}`);
        movieDate !== '' && setMovies(response.data.boxOfficeResult.dailyBoxOfficeList);
      } catch (error) {
        console.error(error);
      }
    };
    handleMovieApi();
  },[movieDate]);
  
  return (
    <>
        {clickedButton ? 
        <DateButton onClick={() => {
          alert('정말 지우시겠습니까?');
          setClickedButton(!clickedButton);
        }}>
          지우기
        </DateButton>
        : 
        <DateButton onClick={() => {
          const datePrompt = prompt(`원하는 일별 박스오피스 날짜를 8자리로 입력하세요!`, '20230619');
          setMovieDate(datePrompt);
          setClickedButton(!clickedButton);
        }}
        >
          날짜 입력하기
        </DateButton>
        
        }
      <MovieBox>
        {clickedButton && movies.map((movie) => {
          console.log(movie);
          return (
            <MovieItem key={movie.rnum}>
            <div className='movieCard'>
              <h3>{movie.rank}위</h3>
              <h2>{movie.movieNm}</h2>
              <p>개봉일: {movie.openDt}</p>
              <p>누적 관객수: {movie.audiAcc}명</p>
            </div>
            </MovieItem>
          )
        })}
      </MovieBox>
    </>
  );
}

export default OpenApi;