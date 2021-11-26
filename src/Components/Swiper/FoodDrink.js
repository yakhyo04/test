import './Swiper.css';
import React, { Component } from "react";
import astronomy from '../../Assets/Image/astronomy.png';
import advertising from '../../Assets/Image/advertising.png';
import radio from '../../Assets/Image/radio.png';
import agood from '../../Assets/Image/agood.png';
import baby from '../../Assets/Image/baby.png';
import asteroid from '../../Assets/Image/asteroid.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 4000,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
      <div>
        <ul className="header__list">
        <Slider className="slider" {...settings}>
          <NavLink to="/astronomy-food" className="header__link">
                <li className="header__item">
                    <img src={astronomy} alt="" />
                    <h3>Astronomy Or Astrology</h3>
                    <p>240k views  ·  4 months ago <span>Food & Drink</span></p>
                </li>
          </NavLink>
          <NavLink to="/advertising-food" className="header__link">
                <li className="header__item">
                    <img src={advertising} alt="" />
                    <h3>Advertising Outdoors</h3>
                    <p>13k views  ·  15 days ago <span>Food & Drink</span></p>
                </li>
          </NavLink>
          <NavLink to="/radio-food" className="header__link">
                <li className="header__item">
                    <img src={radio} alt="" />
                    <h3>Radio Astronomy</h3>
                    <p>1k views  ·  11 months ago <span>Food & Drink</span></p>
                </li>
          </NavLink>
          <NavLink to="/agood-food" className="header__link">
                <li className="header__item">
                    <img src={agood} alt="" />
                    <h3>A Good Autoresponder</h3>
                    <p>45k views  ·  2 months ago <span>Food & Drink</span></p>
                </li>
          </NavLink>
          <NavLink to="/baby-food" className="header__link">
                <li className="header__item">
                    <img src={baby} alt="" />
                    <h3>Baby Monitor Technology</h3>
                    <p>86k views  ·  7 days ago <span>Food & Drink</span></p>
                </li>
          </NavLink>
          <NavLink to="/asteroid-food" className="header__link">
                <li className="header__item">
                    <img src={asteroid} alt="" />
                    <h3>Asteroids</h3>
                    <p>123k views  ·  4 months ago <span>Dollie Blair</span></p>
                </li>
          </NavLink>
        </Slider>
            </ul>
      </div>
      </div>
    );
  }
}