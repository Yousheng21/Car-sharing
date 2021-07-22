import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./slider.scss";

import classNames from "classnames";
import components from "../../../reducers/data/dataSlider";

const Slider = () => {
  const burgerStatus = useSelector((state) => state.app.burger_status);

  const [slideIndex, setSlideIndex] = useState(0);

  function handleClick(value) {
    if (value > components.length - 1) {
      setSlideIndex(0);
    } else if (value < 0) {
      setSlideIndex(components.length - 1);
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
    <aside
      className={classNames({
        slider: true,
        slider__open: burgerStatus,
      })}
    >
      <main className="slider-container">
        <div className="mySlides fade">
          <img src={components[slideIndex].img} alt="" />
          <section className="text">
            <h1>{components[slideIndex].title}</h1>
            <p>{components[slideIndex].par}</p>
            <Link to="/car-sharing/order">
              <button
                type="button"
                style={{ background: components[slideIndex].button__bg }}
              >
                Подробнее
              </button>
            </Link>
          </section>
        </div>

        <button
          type="button"
          className="prev-bg"
          aria-label="prev"
          onClick={minusSlides}
        />
        <span className="prev">❮</span>

        <button
          type="button"
          className="next-bg"
          aria-label="next"
          onClick={plusSlides}
        />
        <span className="next">❯</span>
      </main>
      <section className="dots">
        {components.map((el, index) => (
          <button
            type="button"
            aria-label="dots"
            key={el.img}
            className={classNames({
              dot: true,
              active: index === slideIndex,
            })}
            value={index}
            onClick={(event) =>
              currentSlide(event.target.attributes.value.value)
            }
          />
        ))}
      </section>
    </aside>
  );
};
export default Slider;
