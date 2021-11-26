import React from 'react';
import food from '../../Assets/Image/foodanddrink.jpg';
import FoodDrink from '../Swiper/FoodDrink';
import notifications from '../../Assets/Svg/notifications.svg';
import fooddrink from '../../Assets/Image/fooddrink.png';
import advertising from '../../Assets/Image/advertising.png';
import search from '../../Assets/Svg/search.svg';
import { NavLink } from 'react-router-dom';

const Foodprofile = () => {
    return (
        <div>
            <img className="food__img" src={food} alt="food" />
            <div className="profile__div">
                <nav className="profile__nav">
                <div>
                        <img src={fooddrink} alt="fooddrink" />
                    </div>
                    <div>
                        <h2>Food & Drink</h2>
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
                    <NavLink className="profile__link" to="/foodanddrink">Home</NavLink>
                </li>
                <li className="profile__item"><a className="profile__link" href="/some/valid/uri#top">Videos</a></li>
                <li className="profile__item"><a className="profile__link" href="/some/valid/uri#top">Playlists</a></li>
                <li className="profile__item"><a className="profile__link" href="/some/valid/uri#top">Channels</a></li>
                <li className="profile__item"><a className="profile__link" href="/some/valid/uri#top">Discussion</a></li>
                <li className="profile__item"><a className="profile__link" href="/some/valid/uri#top">About</a></li>
                <li className="profile__item"><img src={search} alt="search" /></li>
            </ul>

            <div className="profile__div2">
                <nav>
                <img width="500px" src={advertising} alt="advertising" />
                </nav>
                <nav className="profile__navv">
                    <h3 className="profile__title2">Advertising Outdoors</h3>
                    <p className="profile__description">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. <span>Dollie Blair</span></p>
                </nav>
            </div>
            <h1>Food & Drink Videos</h1>
            <FoodDrink/>
        </div>
    );
}

export default Foodprofile;
