import './Swiper.css';
import React, { Component } from "react";

import astronomyorastrology from '../../Assets/Image/astronomyorastrology.png';
import advertisingoutdoors from '../../Assets/Image/advertisingoutdoors.png';
import radioastronomy from '../../Assets/Image/radioastronomy.png';
import autoresponder from '../../Assets/Image/autoresponder.png';
import babymonitor from '../../Assets/Image/babymonitor.png';
import astreoids2 from '../../Assets/Image/astreoids2.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
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
          <NavLink className="header__link" to="/astronomyorastrology-food">
                <li className="profile__subitem">
                    <img src={astronomyorastrology} alt="" />
                    <h3>Astronomy Or Astrology</h3>
                    <p>240k views  ·  4 months ago <span>Food & Drink</span></p>
                </li>
          </NavLink>
          <NavLink className="header__link" to="/advertisingoutdoors-food">
                <li className="profile__subitem">
                    <img src={advertisingoutdoors} alt="" />
                    <h3>Advertising Outdoors</h3>
                    <p>13k views  ·  15 days ago <span>Food & Drink</span></p>
                </li>
                </NavLink>
                <NavLink className="header__link" to="/radioastronomy-food">
                <li className="profile__subitem">
                    <img src={radioastronomy} alt="" />
                    <h3>Radio Astronomy</h3>
                <p>1k views  ·  11 months ago <span>Food & Drink</span></p>
                </li>
                </NavLink>
                <NavLink className="header__link" to="/autoresponder-food">
                <li className="profile__subitem">
                    <img src={autoresponder} alt="" />
                    <h3>A Good Autoresponder</h3>
                <p>45k views  ·  2 months ago <span>Food & Drink</span></p>
                </li>
                </NavLink>
                <NavLink className="header__link" to="/babymonitor-food">
                <li className="profile__subitem">
                    <img src={babymonitor} alt="" />
                    <h3>Baby Monitor Technology</h3>
                <p>86k views  ·  7 days ago <span>Food & Drink</span></p>
                </li>
                </NavLink>
                <NavLink className="header__link" to="/astreoids2-food">
                <li className="profile__subitem">
                    <img src={astreoids2} alt="" />
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