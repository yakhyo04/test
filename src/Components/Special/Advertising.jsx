import './Special.css';
import React, { Component } from "react";
import astronomy from '../../Assets/Image/astronomy.png';
import advertising from '../../Assets/Image/advertising.png';
import radio from '../../Assets/Image/radio.png';
import agood from '../../Assets/Image/agood.png';
import baby from '../../Assets/Image/baby.png';
import asteroid from '../../Assets/Image/asteroid.png';
import good from '../../Assets/Svg/good.svg';
import bad from '../../Assets/Svg/bad.svg';
import share from '../../Assets/Svg/share.svg';
import threedots from '../../Assets/Svg/threedots.svg';
import notifications from '../../Assets/Svg/notifications.svg';
import fooddrink from '../../Assets/Image/fooddrink.png';
import { NavLink } from 'react-router-dom';

const Advertising = () => {
    return (
        <div>
            <div className="special__div">
                <nav className="special__nav">
                <img className="asteroids" src={advertising} alt="" />
                <h1 className="special__title">Advertising Outdoors</h1>
                <div className="special__div">
                    <nav>
                        <p>123K views</p>
                    </nav>
                    <nav>
                        <ul className="special__list">
                            <li className="special__item">
                                <img src={good} alt="" />
                                145k
                            </li>
                            <li className="special__item">
                                <img src={bad} alt="" />
                                298k
                            </li>
                            <li className="special__item">
                                <img src={share} alt="" />
                                Share
                            </li>
                            <li className="special__item">
                                <img src={threedots} alt="" />
                            </li>
                        </ul>
                </nav>
                </div>
                    <nav className="divs">
                        <nav className="profile__div">
                           <div>
                            <img src={fooddrink} alt="" />
                           </div>
                           <div>
                           <h2>Food & Drink</h2>
                           <p style={{color: '#C2C2C2', fontWeight: 'bold', fontSize: '18px'}}>245K subscribed</p>
                        </div>
                           </nav>
                           <nav>
                           <img src={notifications} alt="" />
                    <a className="profile__btn" href="#">Subscribe 2.3m</a>
                           </nav>
                </nav>
                           <nav>
                           <p style={{width: '600px'}} className="profile__description">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. Dollie Blair</p>
                           </nav>
                </nav>
                <nav>
                <ul style={{display: 'block', marginTop: '100px'}} className="header__list">
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
            </ul>
                </nav>
            </div>
        </div>
    );
}

export default Advertising;
