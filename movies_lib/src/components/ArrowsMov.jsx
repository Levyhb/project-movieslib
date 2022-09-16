import React from 'react';
import arrow from "../img/arrow.png";


export default function ArrowsMov({carousel}) {
  const handleLeftClick = (e, ref) => {
    e.preventDefault();
    ref.current.scrollLeft -= ref.current.offsetWidth;
  };

  const handleRightClick = (e, ref) => {
    e.preventDefault();
    console.log(ref)
    ref.current.scrollLeft += ref.current.offsetWidth;
  };

  return (
    <div className="buttons">
          <button
            className="arrow left"
            onClick={(e) => handleLeftClick(e, carousel)}
          >
            <img src={arrow} alt="arrow-icon" />
          </button>
          <button
            className="arrow right"
            onClick={(e) => handleRightClick(e, carousel)}
          >
            <img src={arrow} alt="arrow-icon" />
          </button>
        </div>
  )
}
