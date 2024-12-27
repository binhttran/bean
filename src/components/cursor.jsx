import style from 'styled-components';
import {useState, useEffect} from 'react';

const Cursor = style.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50px; 
  height: 50px;
  border-radius: 50%;
  background-color: #f4dcc3; 
  border: 2px solid white; 
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  border-color: #f4dcc3;
  opacity: 0.5;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 20px;
    border-radius: 50%;
    background-color: #f4dcc3; 
    border-color: #f4dcc3;
    transform: translate(-50%, -50%);
  }
`;

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <Cursor id="custom-cursor" />;
};

export default CustomCursor;
