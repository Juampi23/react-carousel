import React, { useState, useEffect } from 'react';
import CarouselButton from './CarouselButton';

const Carousel = ({ delay = 1000, children }) => {
  const items = React.Children.toArray(children);

  if (items.length === 0) return null;

  const [current, setCurrent] = useState(0);

  // Using modulus operator to avoid going out of bounds.
  const goPrevious = () => setCurrent((current - 1 + items.length) % items.length);
  const goNext = () => setCurrent((current + 1) % items.length);

  useEffect(() => {
    if (items.length < 2) return;
    
    const timer = setInterval(goNext, delay);
    return () => clearInterval(timer);
  }, [current]); // In a dynamic scenario I should add delay and items.length as array dependencies. For this case just current is enough.

  return (
    <div className="carousel">
      <div className="current">{items[current]}</div>
      {items.length > 1 && (
        <div className="buttons">
          <CarouselButton className="button-previous" move={goPrevious} label="Previous" />
          <CarouselButton className="button-next" move={goNext} label="Next" />
        </div>
      )}
    </div>
  );
};

export default Carousel;
