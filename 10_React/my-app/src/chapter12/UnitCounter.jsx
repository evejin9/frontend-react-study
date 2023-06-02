import React from 'react';
import { useState } from 'react';

function UnitCounter(props) {
  const { length, onLengthChange } = props;

  return (
    <>
      <button type='button' onClick={() => onLengthChange(length - 1)}>-</button>
      {length}
      <button type='button' onClick={() => onLengthChange(length + 1)}>+</button>
    </>
  );
}

export default UnitCounter;