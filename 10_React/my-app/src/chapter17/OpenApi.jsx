import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const MovieBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MovieItem = styled.div`
  width: 300px;
  height: 200px;
  border: 2px solid;
  margin: 10px;
`

const DateButton = styled.button`
  
`;

function OpenApi(props) {
  const [movies, setMovies] = useState([]);
  const [clickedButton, setClickedButton] = useState(false);

  useEffect(() => {
    const handleMovieApi = async () => {
      try {
        const response = await axios.get(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=3b6b08e276337cb14e688e2449c99322&targetDt=20230601`);
        setMovies(response.data.boxOfficeResult.dailyBoxOfficeList);
        // console.log(movies);
      } catch (error) {
        console.error(error);
      }
    }
    handleMovieApi();
  },[]);

  return (
    <MovieBox>
      <button onClick={() => {
        prompt(`원하는 일별 박스오피스 날짜를 입력하세요!`);
        setClickedButton(!clickedButton);
      }}
      >
        날짜 입력하기
      </button>
      {clickedButton && movies.map((movie) => {
        console.log(movie);
        return (
          <MovieItem key={movie.rnum}>
          <div className='movieCard'>
            <h2>{movie.movieNm}</h2>
            <p>개봉일: {movie.openDt}</p>
          </div>
          </MovieItem>
        )
      })}
    </MovieBox>
  );
}

export default OpenApi;