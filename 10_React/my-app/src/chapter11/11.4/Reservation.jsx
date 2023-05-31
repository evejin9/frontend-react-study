import React, { useState } from 'react';

// 교재 코드
function Reservation(props) {
  // 여러 개의 입력 제어하기 => 여러 개의 state 선언
  const [breakfast, setBreakfast] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState(2);
  const [roomType, setRoomType] = useState('TWIN');
  const [parking, setParking] = useState('CAR');
  const [date, setDate] = useState('');

  const handleBreakfastChange = (e) => {
    setBreakfast(e.target.checked);
  };
  
  const handleGuestsChange = (e) => {
    setNumberOfGuests(e.target.value);
  };

  const handleRoomChange = (e) => {
    setRoomType(e.target.value)
  };

  const handleParkingChange = (e) => {
    setParking(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const handleSubmit = (e) => {
    alert(`조식 여부: ${breakfast}, 투숙객 수: ${numberOfGuests}, 룸 타입: ${roomType}, 주차 여부: ${parking}, 투숙 날짜: ${date}`);
    e.preventDefault();
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        조식 여부:
        <input 
          type="checkbox"
          // checked 속성은 checkbox랑 radio 타입에 존재하고 boolean 값
          checked={breakfast}
          onChange={handleBreakfastChange}
        />
      </label>
      <br />
      <label>
        투숙객 수:
        <input 
          type="number"
          value={numberOfGuests}
          onChange={handleGuestsChange}
        />
      </label>

      {/* 예제 */}
      <br />
      룸 타입:
      <label>
        <input 
          type="radio" 
          name="roomType" 
          value="SINGLE"
          checked={roomType === 'SINGLE'}
          onChange={handleRoomChange}
        />
        싱글
      </label>
      <label>
        <input 
          type="radio" 
          name="roomType" 
          value="TWIN"
          checked={roomType === 'TWIN'}
          onChange={handleRoomChange}
        />
        트윈
      </label>
      <label>
        <input 
          type="radio" 
          name="roomType" 
          value="DOUBLE"
          checked={roomType === 'DOUBLE'}
          onChange={handleRoomChange}
        />
        더블
      </label>

      {/* 연습 */}
      <br />
      주차 여부: 
      <label>
        <input 
        type="radio"
        name='parking'
        value='CAR'
        checked={parking === 'CAR'}
        onChange={handleParkingChange}
        />
        자차  
      </label>
      <label>
        <input 
        type="radio"
        name='parking'
        value='WALK'
        checked={parking === 'WALK'}
        onChange={handleParkingChange}
        />
        도보  
      </label>
      <br />
      <label>
        투숙 날짜:
        <input type="date" 
        value={date}
        onChange={handleDateChange}
        />
      </label>
      <br />
      <button type='submit'>제출</button>
    </form>
  );
}

export default Reservation;