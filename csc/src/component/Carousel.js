import React, { useState, useEffect } from "react";
import "./Carousel.scss";

const Carousel = () => {
  const [images] = useState([
    "./images/img1.jpeg",
    "./images/img2.jpg",
    "./images/img3.jpg",
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <div className="wrapper">
        <img src={images[currentImageIndex]} alt="" />
      </div>
    </div>
  );
};

export default Carousel;
