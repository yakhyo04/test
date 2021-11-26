import './Swiper.css';
import React, { Component } from "react";
import abrief from '../../Assets/Image/abrief.png';
import selecting from '../../Assets/Image/selecting.png';
import asteroids from '../../Assets/Image/asteroids.png';
import telescopes from '../../Assets/Image/telescopes.png';
import moongazing from '../../Assets/Image/moongazing.png';
import medicalcare from '../../Assets/Image/medicalcare.png';
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
      // speed: 10000,
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
          <NavLink to="/abriefhistory" className="header__link" >
                <li className="header__item">
                    <img src={abrief} alt="" />
                    <h3>A Brief History Of Creation</h3>
                    <p>80k views  ·  3 days ago <span>Dollie Blair</span></p>
                </li>
          </NavLink>
          <NavLink to="/selecting-dollie" className="header__link" >
                <li className="header__item">
                    <img src={selecting} alt="" />
                    <h3>Selecting The Right Hotel</h3>
                    <p>123k views  ·  1 months ago <span>Dollie Blair</span></p>
                </li>
                </NavLink>
                  <NavLink className="header__link" to="/asteroids-dollie">
                <li className="header__item">
                    <img src={asteroids} alt="" />
                    <h3>Asteroids</h3>
                    <p>43k views  ·  12 days ago <span>Dollie Blair</span></p>
                </li>
                  </NavLink>
          <NavLink to="/telescopes-dollie" className="header__link" >
                <li className="header__item">
                    <img src={telescopes} alt="" />
                    <h3>Telescopes 101</h3>
                    <p>11k views  ·  6 months ago  <span>Dollie Blair</span></p>
                </li>
                </NavLink>
          <NavLink to="/medicalcare-dollie" className="header__link" >
                <li className="header__item">
                    <img src={medicalcare} alt="" />
                    <h3>Medical Care Is Just</h3>
                    <p>18k views  ·  2 days ago <span>Dollie Blair</span></p>
                </li>
                </NavLink>
          <NavLink to="/moongazing-dollie" className="header__link" >
                <li className="header__item">
                    <img src={moongazing} alt="" />
                    <h3>Moon Gazing</h3>
                    <p>67k views  ·  4 months ago <span>Dollie Blair</span></p>
                </li>
                </NavLink>
        </Slider>
            </ul>
      </div>
      </div>
    );
  }
}