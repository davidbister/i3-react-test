import React, { useState } from 'react';
import { SliderData } from './SliderData';
import'./ImageSlider.scss';


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='slideshow-container'>
      <a className='prev' href onClick={prevSlide} >&#10094;</a>
     
      <a className='next' href onClick={nextSlide} >&#10095;</a>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="x" className='image' />
              
            )}
            
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;