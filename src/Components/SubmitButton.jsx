/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/SubmitButton.css';

export default function SubmitButton() {
  const handelSubmit = () => {

  };
  return (
    <div>
      <Link to="submited">
        <button type="submit" onClick={handelSubmit}>SUBMIT</button>
      </Link>
    </div>
  );
}
