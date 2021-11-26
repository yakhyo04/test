import React from 'react';
import astronomyorastrology from '../../Assets/Image/astronomyorastrology.png';
import advertisingoutdoors from '../../Assets/Image/advertisingoutdoors.png';
import radioastronomy from '../../Assets/Image/radioastronomy.png';
import autoresponder from '../../Assets/Image/autoresponder.png';
import babymonitor from '../../Assets/Image/babymonitor.png';
import astreoids2 from '../../Assets/Image/astreoids2.png';
import Margaret from '../../Assets/Image/margaret.png';
import good from '../../Assets/Svg/good.svg';
import bad from '../../Assets/Svg/bad.svg';
import share from '../../Assets/Svg/share.svg';
import threedots from '../../Assets/Svg/threedots.svg';
import notifications from '../../Assets/Svg/notifications.svg';

import { NavLink } from 'react-router-dom';

const Radioastronomy = () => {
    return (
        <div>
            <div className="special__div">
                <nav className="special__nav">
                <img className="asteroids" src={radioastronomy} alt="" />
                <h1 className="special__title">Radio Astronomy</h1>
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
                            <img src={Margaret} alt="" />
                           </div>
                           <div>
                           <NavLink className="header__link" to="/margaret">
                           <h2>Margaret Phelps</h2>
                           </NavLink>
                           <p style={{color: '#C2C2C2', fontWeight: 'bold', fontSize: '18px'}}>245K subscribed</p>
                        </div>
                           </nav>
                           <nav>
                           <img src={notifications} alt="" />
                    <a className="profile__btn" href="/some/valid/uri#top">Subscribe 2.3m</a>
                           </nav>
                </nav>
                           <nav>
                           <p style={{width: '600px'}} className="profile__description">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. Dollie Blair</p>
                           </nav>
                </nav>
                <nav>
                <ul style={{display: 'block', marginTop: '100px'}} className="header__list">
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
            </ul>
                </nav>
            </div>
        </div>
    );
}

export default Radioastronomy;
