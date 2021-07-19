import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './slider.css';

import components from './data';

const Slider = () => {
  const burgerStatus = useSelector((state) => state.app.burger_status);

  const slidesRef = useRef(null);
  const dotsRef = useRef(null);

  let slides;
  let dots;

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    slides = slidesRef.current.children;
    dots = dotsRef.current.children;
  });

  function showSlides() {
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'none';
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex].style.display = 'block';
    dots[slideIndex].className += ' active';
  }

  useEffect(() => {
    showSlides();
  }, [slideIndex]);

  function handleClick(value) {
    if (value > slides.length - 1) {
      setSlideIndex(0);
    } else if (value < 0) {
      setSlideIndex(slides.length - 1);
    } else setSlideIndex(value);
  }

  function plusSlides() {
    handleClick(slideIndex + 1);
  }

  function minusSlides() {
    handleClick(slideIndex - 1);
  }

  function currentSlide(n) {
    handleClick(Number(n));
  }

  return (
    <div className={`${
      burgerStatus === 'open' ? 'slider slider__open' : 'slider'
    }`}
    >
      <div className="slideshow-container">
        <div ref={slidesRef}>
          {
                        components.map((element, index) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <div key={index} className="mySlides fade">
                            <img src={element.img} alt="" />
                            <div className="text">
                              <h1>{element.title}</h1>
                              <p>{element.par}</p>
                              <Link to="/order">
                                <button type="button" style={{ background: element.button__bg }}>
                                  Подробнее
                                </button>
                              </Link>
                            </div>
                          </div>
                        ))
                    }

        </div>

        <div role="button" tabIndex={0} onKeyDown={() => ''} className="prev-bg" onClick={() => minusSlides()}>
          <span className="prev">❮</span>
        </div>
        <div role="link" tabIndex={0} onKeyDown={() => ''} className="next-bg" onClick={() => plusSlides()}>
          <span className="next">❯</span>
        </div>

      </div>
      <div ref={dotsRef} className="dots">
        {
                    components.map((el, index) => (
                      <span
                        role="button"
                        tabIndex={0}
                        onKeyDown={() => ''}
                        aria-label="dots"
                            // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        className="dot"
                        onClick={(event) => currentSlide(event.target.attributes.value.value)}
                      />
                    ))
                }

      </div>
    </div>
  );
};
export default Slider;
