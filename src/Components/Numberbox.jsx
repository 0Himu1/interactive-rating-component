/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import '../style/Numberbox.css';
import Number from './Number';

export default function Numberbox() {
  const state = {
    isClicked: false,
    rettedNumber: null,
  };

  const [retting, setRetting] = useState(state);

  const handleClick = (ratting) => {
    const updatedState = {
      isClicked: true,
      rettedNumber: ratting,
    };
    setRetting(updatedState);
  };

  return (
    <div className="numbers">
      <Number handleClick={handleClick} state={retting} number={1} />
      <Number handleClick={handleClick} state={retting} number={2} />
      <Number handleClick={handleClick} state={retting} number={3} />
      <Number handleClick={handleClick} state={retting} number={4} />
      <Number handleClick={handleClick} state={retting} number={5} />
    </div>
  );
}
