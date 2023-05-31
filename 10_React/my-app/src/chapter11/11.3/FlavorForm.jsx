import React, { useState } from 'react';

function FlavorForm(props) {
  const [value, setValue] = useState('lime');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    alert('가장 좋아하는 맛: ' + value);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        좋아하는 맛 선택:
        <select value={value} onChange={handleChange}>
          <option value="grapefruit">자몽</option>
          <option value="lime">라임</option>
          <option value="coconut">코코넛</option>
          <option value="mango">망고</option>
        </select>

        {/* HTML DOM 요소에서는 option 태그에 selected 속성을 사용했지만 React에서는 select 태그에 value 속성을 사용 */}
        {/* <select>
          <option value="grapefruit">자몽</option>
          <option value="lime">라임</option>
          <option value="coconut" selected>코코넛</option>
          <option value="mango">망고</option>
        </select> */}
      </label>
      <button type='submit'>제출</button>
    </form>
  );
}

export default FlavorForm;