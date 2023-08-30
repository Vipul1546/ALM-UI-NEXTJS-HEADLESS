'use client';
import { useEffect, useRef, useState } from 'react';

const Counter = ({ startValue, endValue }) => {
  const [count, setCount] = useState(startValue);
  const countRef = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Percentage of the element's visibility needed to trigger the callback
  };

  const handleIntersection = entries => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      // Increment the counter until the endValue is reached
      const interval = setInterval(() => {
        setCount(prevState => {
          if (prevState < endValue) {
            return prevState + 1;
          } else {
            return prevState;
          }
        });
      }, 120); // Adjust the interval time as needed

      if (count >= endValue) {
        clearInterval(interval);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [countRef, options]);

  return (
    <span className="counter" ref={countRef}>
      {count}
    </span>
  );
};

export default Counter;
