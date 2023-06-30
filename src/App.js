import React, { useState } from "react";
import './index.css'

const images = [
  'https://via.placeholder.com/150x150',
  'https://via.placeholder.com/200x200',
  'https://via.placeholder.com/250x250',
];

const Slider = () => {
  const [Image, setImage] = useState(0);

  const nextImage = () => {
    if (Image === images.length - 1) {
      setImage(0);
    } else {
      setImage(Image + 1);
    }
  };

  const backImage = () => {
    if (Image === 0) {
      setImage(images.length - 1);
    } else {
      setImage(Image - 1);
    }
  };

  return (
    <div className="slider">
      <img src={images[Image]} alt='Fotographiya' />
      <div className="buttons">
        <button onClick={backImage}> Назад </button>
        <button onClick={nextImage}> Вперед </button>
      </div>
    </div>
  );
};

export default Slider;
