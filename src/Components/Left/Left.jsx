import './Left.css';
import React from 'react';
import menu from '../../Assets/Svg/menu.svg';
import youtube from '../../Assets/Image/youtube.png';
import home from '../../Assets/Svg/home.svg';
import trending from '../../Assets/Svg/trending.svg';
import subscribtions from '../../Assets/Svg/subscribtions.svg';
import library from '../../Assets/Svg/library.svg';
import history from '../../Assets/Svg/history.svg';
import watch from '../../Assets/Svg/watch.svg';
import favourites from '../../Assets/Svg/favourites.svg';
import likedvideos from '../../Assets/Svg/likedvideos.svg';
import music from '../../Assets/Svg/music.svg';
import games from '../../Assets/Svg/games.svg';
import showmore from '../../Assets/Svg/showmore.svg';
import setting from '../../Assets/Svg/setting.svg';
import margaret from '../../Assets/Image/margaret.png';
import {NavLink} from 'react-router-dom';

const Left = () => {
    return (
        <div>
            <ul className="left__list">
                <li className="left__item"><img src={menu} alt="" /><img src={youtube} alt="" /></li>
                <li className="left__item">
                    <NavLink className="left__link" to="/"><img src={home} alt="" />Home</NavLink>
                </li>
                <li className="left__item">
                    <NavLink className="left__link" to="/trending"><img src={trending} alt="" />Trending</NavLink>
                </li>
                <li className="left__item">
                    <NavLink className="left__link" to="/picture"><img src={subscribtions} alt="" />Subscribtions</NavLink>
                </li>
                <li className="left__item">
                    <NavLink className="left__link" to="/library"><img src={library} alt="" />Library</NavLink>
                </li>
                <li className="left__item">
                    <NavLink className="left__link" to="/history"><img src={history} alt="" />History</NavLink>
                </li>
                <li className="left__item"><NavLink className="left__link" to="/watch-later"><img src={watch} alt="" />Watch later</NavLink></li>
                <li className="left__item"><NavLink className="left__link" to="/favourites"><img src={favourites} alt="" />Favourites</NavLink></li>
                <li className="left__item"><NavLink className="left__link" to="likedvideos"><img src={likedvideos} alt="" />Liked videos</NavLink></li>
                <li className="left__item"><NavLink className="left__link" to="music"><img src={music} alt="" />Music</NavLink></li>
                <li className="left__item"><NavLink className="left__link" to="games"><img src={games} alt="" />Games</NavLink></li>
                <li className="left__item"><NavLink className="left__link" to="showmore"><img src={showmore} alt="" />Show more</NavLink></li>
                <li className="left__item"><h2>Subscribtions</h2></li>
                <li className="left__item"><NavLink className="left__link" to="margaret"><img src={margaret} className="margaret__img" alt="" /><span className="margaret__span">Margaret Phelps</span></NavLink></li>
                <li className="left__item"><NavLink className="left__link" to="setting"><img src={setting} alt="" />Setting</NavLink></li>
            </ul>
        </div>
    );
}

export default Left;