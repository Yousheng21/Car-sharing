import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import BurgerMenu from '../../utils/tempates/Burger-menu/Burger-menu.jsx';
// eslint-disable-next-line import/extensions
import Slider from '../../utils/Slider/Slider.jsx';
import './home.css';

const Home = () => (
  <div className="home-page">

    <BurgerMenu />

    <div className="main-content">
      <div className="header">
        <span className="header-title">Need for drive</span>
        <span className="header-map">
          <img src="https://img.icons8.com/plumpy/24/000000/google-maps-new.png" alt="" />
          Ульяновск
        </span>
      </div>
      <div className="heading">
        <h1>Каршеринг</h1>
        <h1 style={{ color: '#0EC261' }}>Need for drive</h1>
        <h4 style={{ color: '#999999' }}>
          Поминутная аренда авто твоего города
        </h4>

        <Link to="/order">
          <button type="button" className="btn heading-btn">
            Забронировать
          </button>
        </Link>

      </div>
      <div className="footer">
        <span style={{ color: '#999999' }}>© 2016-2019 «Need for drive»</span>
        <span className="footer-tel">
          <a href="tel:+74952342244">8 (495) 234-22-44</a>
        </span>
      </div>
    </div>

    <Slider />

  </div>
);

export default Home;
