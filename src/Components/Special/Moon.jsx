import React from 'react';
import dude from '../../Assets/Image/dude.png';
import moon from '../../Assets/Image/moon.png';
import moonred from '../../Assets/Image/moon-red.png';
import good from '../../Assets/Svg/good.svg';
import bad from '../../Assets/Svg/bad.svg';
import share from '../../Assets/Svg/share.svg';
import threedots from '../../Assets/Svg/threedots.svg';
import notifications from '../../Assets/Svg/notifications.svg';
import edward from '../../Assets/Image/edward.png';

import { NavLink } from 'react-router-dom';

const Moon = () => {
    return (
        <div>
            <div className="special__div">
                <nav className="special__nav">
                <img className="asteroids" src={moon} alt="" />
                <h1 className="special__title">Moon Gazing</h1>
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
                            <img src={edward} alt="" />
                           </div>
                           <div>
                           <h2>Recomended</h2>
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
                    <NavLink className="header__link" to="/dude-gussie">
                    <li className="header__item">
                    <img style={{width: '280px'}} src={dude} alt="" />
                    <h3>Dude You Re Getting A Telescope</h3>
                    <p>34k views  ·  5 months ago <span>Gussie French</span></p>
                </li>
                    </NavLink>
                    <NavLink className="header__link" to="/moon-edward">
                    <li className="header__item">
                    <img style={{width: '280px'}} src={moon} alt="" />
                    <h3>Moon Gazing</h3>
                    <p>54k views  ·  11 months ago <span>Edward Osborne</span></p>
                </li>
                    </NavLink>
                <NavLink className="header__link" to="/moonred-dollie">
                <li className="header__item">
                    <img style={{width: '280px'}} src={moonred} alt="" />
                    <h3>Moon Gazing</h3>
                    <p>125k views  ·  4 months ago<span>Dollie Blair</span></p>
                </li>
                </NavLink>
            </ul>
                </nav>
            </div>
        </div>
    );
}

export default Moon;
