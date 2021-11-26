import './Top.css';
import React from 'react';
import search from '../../Assets/Svg/search.svg';
import video from '../../Assets/Svg/video.svg';
import dots from '../../Assets/Svg/dots.svg';
import notifications from '../../Assets/Svg/notifications.svg';
import profilepic from '../../Assets/Svg/profilepic.svg';
const Top = () => {
    return (
        <div className="top">
            <nav className="top__nav">
            <div className="top__div">
                <input className="top__input" type="text" placeholder="Search" />
                <img src={search} alt="" />
            </div>
            <div>
                <ul className="top__list">
                    <li className="top__item">
                        <img src={video} alt="" />
                    </li>
                    <li className="top__item">
                        <img src={dots} alt="" />
                    </li>
                    <li className="top__item">
                        <img src={notifications} alt="" />
                    </li>
                    <li className="top__item">
                        <img src={profilepic} alt="" />
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    );
}

export default Top;
