import './Profile.css';
import React from 'react';
import greenCover from '../../Assets/Image/greenCover.png';
import choosing from '../../Assets/Image/choosing.png';
import margaret from '../../Assets/Image/margaret.png';
import notifications from '../../Assets/Svg/notifications.svg';
import search from '../../Assets/Svg/search.svg';
import left from '../../Assets/Svg/left.svg';
import right from '../../Assets/Svg/right.svg';
import {NavLink} from 'react-router-dom';
import MargaretPhelps from '../Swiper/MargaretPhelps';

const Profile = () => {
    return (
        <div className="profile">
            <img className="profile__greencover" src={greenCover} alt="" />
            <div className="profile__div">
                <nav className="profile__nav">
                    <div>
                        <img src={margaret} alt="margaret" />
                    </div>
                    <div>
                        <h2>Margaret Phelps</h2>
                        <p style={{color: '#C2C2C2', fontWeight: 'bold', fontSize: '18px'}}>245K subscribed</p>
                    </div>
                </nav>
                <nav className="profile__navbar">
                    <img src={notifications} alt="notifications" />
                    <a className="profile__btn" href="/some/valid/uri#top">Subscribe 2.3m</a>
                </nav>
            </div>
            <ul className="profile__list">
                <li className="profile__item">
                    <NavLink className="profile__link" to="/margaret">Home</NavLink>
                    </li>
                <li className="profile__item"><a className="profile__link" href="/some/valid/uri#top">Videos</a></li>
                <li className="profile__item"><a className="profile__link" href="/some/valid/uri#top">Playlists</a></li>
                <li className="profile__item"><a className="profile__link" href="/some/valid/uri#top">Channels</a></li>
                <li className="profile__item"><a className="profile__link" href="/some/valid/uri#top">Discussion</a></li>
                <li className="profile__item"><a className="profile__link" href="/some/valid/uri#top">About</a></li>
                <li className="profile__item"><img src={search} alt="" /></li>
            </ul>

            <div className="profile__div2">
                <nav>
                    <NavLink to="/choosing" className="header__link">
                <img className="maxwidth__img" src={choosing} alt="choosing" />
                    </NavLink>
                </nav>
                <nav className="profile__navv">
                <h3 className="profile__title">Choosing The Best Audio Player Software For Your Computer</h3>
                <p className="profile__description">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
                <span className="profile__span">11k views  ·  6 months ago</span>
                </nav>
            </div>


            <div className="profile__div">
                <nav>
                <h1>Margaret Phelps videos</h1>
                </nav>
                <nav className="profile__icons">
                    <img src={left} alt="left" />
                    <img src={right} alt="right" />
                </nav>
            </div>
            {/* <ul className="profile__submenu">
                <li className="profile__subitem">
                    <img src={astronomyorastrology} alt="" />
                    <h3>Astronomy Or Astrology</h3>
                    <p>240k views  ·  4 months ago <span>Food & Drink</span></p>
                </li>
                <li className="profile__subitem">
                    <img src={advertisingoutdoors} alt="" />
                    <h3>Advertising Outdoors</h3>
                    <p>13k views  ·  15 days ago <span>Food & Drink</span></p>
                </li>
                <li className="profile__subitem">
                    <img src={radioastronomy} alt="" />
                    <h3>Radio Astronomy</h3>
                <p>1k views  ·  11 months ago <span>Food & Drink</span></p>
                </li>
                <li className="profile__subitem">
                    <img src={autoresponder} alt="" />
                    <h3>A Good Autoresponder</h3>
                <p>45k views  ·  2 months ago <span>Food & Drink</span></p>
                </li>
                <li className="profile__subitem">
                    <img src={babymonitor} alt="" />
                    <h3>Baby Monitor Technology</h3>
                <p>86k views  ·  7 days ago <span>Food & Drink</span></p>
                </li>
                <li className="profile__subitem">
                    <img src={astreoids2} alt="" />
                    <h3>Asteroids</h3>
                <p>123k views  ·  4 months ago <span>Dollie Blair</span></p>
                </li>
            </ul> */}
            <MargaretPhelps/>
        </div>
    );
}

export default Profile;