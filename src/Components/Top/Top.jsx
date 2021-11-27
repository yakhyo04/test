import './Top.css';
import React from 'react';
import search from '../../Assets/Svg/search.svg';
import video from '../../Assets/Svg/video.svg';
import dots from '../../Assets/Svg/dots.svg';
import notifications from '../../Assets/Svg/notifications.svg';
import profilepic from '../../Assets/Svg/profilepic.svg';
import DarkMode from '../DarkMode/DarkMode';
import youtube from '../../Assets/Image/youtube.png';


const Top = () => {
    return (
        <>
        <div className="top">
            <nav className="top__nav">
            <div className="top__div">
                <input className="top__input" type="text" placeholder="Search" />
                <img src={search} alt="" />
            </div>
            <div>
                <ul className="top__list">
                    <li className="top__item">
                        <DarkMode/>
                    </li>
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
        <div className="left__bottom">
            <ul className="top__submenu">
                <li className="top__subitem"><img src={youtube} alt="" /></li>
                {/* <li className="top__subitem"></li> */}
                <li className="top__subitem"><DarkMode/><img src={search} alt="" /><img src={profilepic} alt="" /></li>
            </ul>
        </div>
        </>
    );
}

export default Top;
