import './Special.css';
import React from 'react';
import abrief from '../../Assets/Image/abrief.png';
import selecting from '../../Assets/Image/selecting.png';
import asteroids from '../../Assets/Image/asteroids.png';
import telescopes from '../../Assets/Image/telescopes.png';
import moongazing from '../../Assets/Image/moongazing.png';
import medicalcare from '../../Assets/Image/medicalcare.png';
import good from '../../Assets/Svg/good.svg';
import bad from '../../Assets/Svg/bad.svg';
import share from '../../Assets/Svg/share.svg';
import threedots from '../../Assets/Svg/threedots.svg';
import notifications from '../../Assets/Svg/notifications.svg';
import dollieblair from '../../Assets/Image/dollieblair.png';
import { NavLink } from 'react-router-dom';
// import asteroids from '../../Assets/Image/asteroids.png';
const Medicalcare = () => {
    return (
        <div>
            <div className="special__div">
                <nav className="special__nav">
                <img className="asteroids" src={medicalcare} alt="medicalcare" />
                <h1 className="special__title">Medical Care Is Just</h1>
                <div className="special__div">
                    <nav>
                        <p>123K views</p>
                    </nav>
                    <nav>
                        <ul className="special__list">
                            <li className="special__item">
                                <img src={good} alt="good" />
                                145k
                            </li>
                            <li className="special__item">
                                <img src={bad} alt="bad" />
                                298k
                            </li>
                            <li className="special__item">
                                <img src={share} alt="share" />
                                Share
                            </li>
                            <li className="special__item">
                                <img src={threedots} alt="threedots" />
                            </li>
                        </ul>
                </nav>
                </div>
                    <nav className="divs">
                        <nav className="profile__div">
                           <div>
                            <img src={dollieblair} alt="dollieblair" />
                           </div>
                           <div>
                           <NavLink className="header__link" to="/dollieblair">
                           <h2>Dollie Blair</h2>
                           </NavLink>
                           <p style={{color: '#C2C2C2', fontWeight: 'bold', fontSize: '18px'}}>245K subscribed</p>
                        </div>
                           </nav>
                           <nav>
                           <img src={notifications} alt="notifications" />
                    <a className="profile__btn" href="/some/valid/uri#top">Subscribe 2.3m</a>
                           </nav>
                </nav>
                           <nav>
                           <p style={{width: '600px'}} className="profile__description">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. Dollie Blair</p>
                           </nav>
                </nav>
                <nav>
                <ul style={{display: 'block', marginTop: '100px'}} className="header__list">
                    <NavLink className="header__link" to="/abriefhistory">
                <li className="header__item">
                    <img src={abrief} alt="abrief" />
                    <h3>A Brief History Of Creation</h3>
                    <p>80k views  ·  3 days ago <span>Dollie Blair</span></p>
                </li>
                    </NavLink>
                    <NavLink className="header__link" to="/selecting-dollie">
                <li className="header__item">
                    <img src={selecting} alt="selecting" />
                    <h3>Selecting The Right Hotel</h3>
                    <p>123k views  ·  1 months ago <span>Dollie Blair</span></p>
                </li>
                    </NavLink>
                <NavLink className="header__link" to="/asteroids-dollie">
                <li className="header__item">
                    <img src={asteroids} alt="asteroids" />
                    <h3>Asteroids</h3>
                    <p>43k views  ·  12 days ago <span>Dollie Blair</span></p>
                </li>
                </NavLink>
                <NavLink className="header__link" to="/telescopes-dollie">
                <li className="header__item">
                    <img src={telescopes} alt="telescopes" />
                    <h3>Telescopes 101</h3>
                    <p>11k views  ·  6 months ago  <span>Dollie Blair</span></p>
                </li>
                </NavLink>
                <NavLink className="header__link" to="/medicalcare-dollie">
                <li className="header__item">
                    <img src={medicalcare} alt="medicalcare" />
                    <h3>Medical Care Is Just</h3>
                    <p>18k views  ·  2 days ago <span>Dollie Blair</span></p>
                </li>
                </NavLink>
                <NavLink className="header__link" to="/moongazing-dollie">
                <li className="header__item">
                    <img src={moongazing} alt="moongazing" />
                    <h3>Moon Gazing</h3>
                    <p>67k views  ·  4 months ago <span>Dollie Blair</span></p>
                </li>
                </NavLink>
            </ul>
                </nav>
            </div>
        </div>
    );
}

export default Medicalcare;
