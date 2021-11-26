import './Swiper.css';
import React, { Component } from "react";
import dude from '../../Assets/Image/dude.png';
import moon from '../../Assets/Image/moon.png';
import moonred from '../../Assets/Image/moon-red.png';
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
      slidesToShow: 2,
      slidesToScroll: 1,
      // speed: 15000,
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
          <NavLink to="/dude-gussie" className="header__link">
                <li className="header__item">
                    <img src={dude} alt="" />
                    <h3>Dude You Re Getting A Telescope</h3>
                    <p>34k views  ·  5 months ago <span>Gussie French</span></p>
                </li>
          </NavLink>
          <NavLink to="/moon-edward" className="header__link">
                <li className="header__item">
                    <img src={moon} alt="" />
                    <h3>Moon Gazing</h3>
                    <p>54k views  ·  11 months ago <span>Edward Osborne</span></p>
                </li>
          </NavLink>
          <NavLink to="/moonred-dollie" className="header__link">
                <li className="header__item">
                    <img src={moonred} alt="" />
                    <h3>Moon Gazing</h3>
                    <p>125k views  ·  4 months ago<span>Dollie Blair</span></p>
                </li>
          </NavLink>
        </Slider>
            </ul>
      </div>
      </div>
    );
  }
}