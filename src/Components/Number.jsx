/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { } from 'react';
import '../style/Number.css';

export default function Number({ number, state, handleClick }) {
  const isClickable = state.isClicked && state.rettedNumber === number;
  const style = {
    backgroundColor: isClickable ? 'hsl(25, 97%, 53%)' : 'hsl(213, 19%, 18%)',
    color: isClickable ? '#fff' : 'hsl(216, 12%, 54%)',
  };

  return (
    <div
      className="number"
      style={style}
      onClick={() => handleClick(number)}
      role="button"
      tabIndex="0"
    >
      {number}
    </div>
  );
}
