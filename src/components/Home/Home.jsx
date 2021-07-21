import React from "react";
import { Link } from "react-router-dom";
import location from "../../images/location.png";
import BurgerMenu from "../common/Burger-menu/Burger-menu";
import Slider from "../common/Slider/Slider";
import "./home.scss";

const Home = () => (
  <div className="home-page">
    <BurgerMenu />

    <div className="main-content">
      <div className="header">
        <span className="header-title">Need for drive</span>
        <span className="header-map">
          <img src={location} alt="location" />
          Ульяновск
        </span>
      </div>
      <div className="heading">
        <h1>Каршеринг</h1>
        <h1 className="sub-title">Need for drive</h1>
        <h4>Поминутная аренда авто твоего города</h4>

        <Link to="/car-sharing/order">
          <button type="button" className="btn heading-btn">
            Забронировать
          </button>
        </Link>
      </div>
      <div className="footer">
        <span style={{ color: "#999999" }}>© 2016-2019 «Need for drive»</span>
        <span className="footer-tel">
          <a href="tel:+74952342244">8 (495) 234-22-44</a>
        </span>
      </div>
    </div>

    <Slider />
  </div>
);

export default Home;
