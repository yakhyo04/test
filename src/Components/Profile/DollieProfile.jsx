import React from 'react';
import plaincover from '../../Assets/Image/plain-cover.jpg';
import notifications from '../../Assets/Svg/notifications.svg';
import dollieblair from '../../Assets/Image/dollieblair.png';
import asteroids from '../../Assets/Image/asteroids.png';
import search from '../../Assets/Svg/search.svg';
import Swiper from '../Swiper/Swiper';
import { NavLink } from 'react-router-dom';

const DollieProfile = () => {
    return (
        <div className="dollie__profile">
            <img className="plaincover" src={plaincover} alt="plaincover" />
            <div className="profile__div">
                <nav className="profile__nav">
                    <div>
                        <img src={dollieblair} alt="dollieblair" />
                    </div>
                    <div>
                        <h2>Dollie Blair</h2>
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
                    <NavLink className="profile__link" to="/dollieblair">Home</NavLink>
                </li>
                <li className="profile__item"><a href="/some/valid/uri#top" className="profile__link">Videos</a></li>
                <li className="profile__item"><a className="profile__link" href="/some/valid/uri#top">Playlists</a></li>
                <li className="profile__item"><a className="profile__link" href="/some/valid/uri#top">Channels</a></li>
                <li className="profile__item"><a className="profile__link" href="/some/valid/uri#top">Discussion</a></li>
                <li className="profile__item"><a className="profile__link" href="/some/valid/uri#top">About</a></li>
                <li className="profile__item"><img src={search} alt="" /></li>
            </ul>

            <div className="profile__div2">
                <nav>
                <NavLink to="/asteroids-dollie">
                <img className="maxwidth__img" width="500px" src={asteroids} alt="asteroids" />
                </NavLink>
                </nav>
                <nav className="profile__navv">
                <h1 className="profile__title2">Asteroids</h1>
                    <p className="profile__description">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. <span>Dollie Blair</span></p>
                </nav>
            </div>

            <h1>Dollie Blair Videos</h1>
            <Swiper/>
        </div>
    );
}

export default DollieProfile;
