import './Header.css';
import React, {Component} from 'react';
import dollieblair from '../../Assets/Image/dollieblair.png';
import fooddrink from '../../Assets/Image/fooddrink.png';
import Swiper from '../Swiper/Swiper';
import Recomended from '../Swiper/Recomended';
import FoodDrink from '../Swiper/FoodDrink';
import { NavLink } from 'react-router-dom';

const Header = () => {
    
    return (
        <header className="header">
            <NavLink className="header__link" to="/dollieblair">
            <p className="header__text">
                <img src={dollieblair} alt="" />Dollie Blair
            </p>
            </NavLink>
            {/* <ul className="header__list">
                <li className="header__item">
                    <img src={abrief} alt="" />
                    <h3>A Brief History Of Creation</h3>
                    <p>80k views  ·  3 days ago <span>Dollie Blair</span></p>
                </li>
                <li className="header__item">
                    <img src={selecting} alt="" />
                    <h3>Selecting The Right Hotel</h3>
                    <p>123k views  ·  1 months ago <span>Dollie Blair</span></p>
                </li>
                <li className="header__item">
                    <img src={asteroids} alt="" />
                    <h3>Asteroids</h3>
                    <p>43k views  ·  12 days ago <span>Dollie Blair</span></p>
                </li>
                <li className="header__item">
                    <img src={telescopes} alt="" />
                    <h3>Telescopes 101</h3>
                    <p>11k views  ·  6 months ago  <span>Dollie Blair</span></p>
                </li>
                <li className="header__item">
                    <img src={medicalcare} alt="" />
                    <h3>Medical Care Is Just</h3>
                    <p>18k views  ·  2 days ago <span>Dollie Blair</span></p>
                </li>
                <li className="header__item">
                    <img src={moongazing} alt="" />
                    <h3>Moon Gazing</h3>
                    <p>67k views  ·  4 months ago <span>Dollie Blair</span></p>
                </li>
            </ul> */}
            <Swiper/>

            <h1>Recommended</h1>
            {/* <ul className="header__list">
                <li className="header__item">
                    <img src={dude} alt="" />
                    <h3>Dude You Re Getting A Telescope</h3>
                    <p>34k views  ·  5 months ago <span>Gussie French</span></p>
                </li>
                <li className="header__item">
                    <img src={moon} alt="" />
                    <h3>Moon Gazing</h3>
                    <p>54k views  ·  11 months ago <span>Edward Osborne</span></p>
                </li>
                <li className="header__item">
                    <img src={moonred} alt="" />
                    <h3>Moon Gazing</h3>
                    <p>125k views  ·  4 months ago<span>Dollie Blair</span></p>
                </li>
            </ul> */}
            <Recomended />
            <div className="header__div">
                <img src={fooddrink} alt="" />
                <h2>Food & Drink</h2>
                <p>Recommended channel for you</p>
            </div>
            {/* <ul className="header__list">
                <li className="header__item">
                    <img src={astronomy} alt="" />
                    <h3>Astronomy Or Astrology</h3>
                    <p>240k views  ·  4 months ago <span>Food & Drink</span></p>
                </li>
                <li className="header__item">
                    <img src={advertising} alt="" />
                    <h3>Advertising Outdoors</h3>
                    <p>13k views  ·  15 days ago <span>Food & Drink</span></p>
                </li>
                <li className="header__item">
                    <img src={radio} alt="" />
                    <h3>Radio Astronomy</h3>
                    <p>1k views  ·  11 months ago <span>Food & Drink</span></p>
                </li>
                <li className="header__item">
                    <img src={agood} alt="" />
                    <h3>A Good Autoresponder</h3>
                    <p>45k views  ·  2 months ago <span>Food & Drink</span></p>
                </li>
                <li className="header__item">
                    <img src={baby} alt="" />
                    <h3>Baby Monitor Technology</h3>
                    <p>86k views  ·  7 days ago <span>Food & Drink</span></p>
                </li>
                <li className="header__item">
                    <img src={asteroid} alt="" />
                    <h3>Asteroids</h3>
                    <p>123k views  ·  4 months ago <span>Dollie Blair</span></p>
                </li>
            </ul> */}
            <FoodDrink/>
        </header>
    );
}

export default Header;
