import React, { useState, useEffect } from 'react';

const Carousel = ({ delay = 1000, children }) => {
  const items = React.Children.toArray(children);

  if (items.length === 0) return null;

  const [current, setCurrent] = useState(0);

  // Using modulus operator to avoid going out of bounds.
  const goNext = () => setCurrent((current + 1) % items.length);
  const goPrevious = () => setCurrent((current - 1 + items.length) % items.length);

  useEffect(() => {
    const timer = setInterval(goNext, delay);
    return () => clearInterval(timer);
  }, [current]); // In a dynamic scenario I should add delay and items.length as array dependices. For this case just current is enough.

  return (
    <div className="carousel">
      <div className="current">{items[current]}</div>
      {items.length > 1 && (
        <div className="buttons">
          <button className="button-previous" onClick={goPrevious}>
            Previous
          </button>
          <button className="button-next" onClick={goNext}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
