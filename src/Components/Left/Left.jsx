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
import dollieblair from '../../Assets/Image/dollieblair.png';
import setting from '../../Assets/Svg/setting.svg';
import fooddrink from '../../Assets/Image/fooddrink.png';
import margaret from '../../Assets/Image/margaret.png';
import {NavLink} from 'react-router-dom';

const Left = () => {
    return (
        <div>
            <ul className="left__list">
                <li className="left__item"><img src={menu} alt="menu" /><img src={youtube} alt="youtube" /></li>
                <li className="left__item">
                    <NavLink className="left__link" to="/"><img src={home} alt="home" />Home</NavLink>
                </li>
                <li className="left__item">
                    <NavLink className="left__link" to="/trending"><img src={trending} alt="trending" />Trending</NavLink>
                </li>
                <li className="left__item">
                    <NavLink className="left__link" to="/picture"><img src={subscribtions} alt="subscribtions" />Subscribtions</NavLink>
                </li>
                <li className="left__item">
                    <NavLink className="left__link" to="/library"><img src={library} alt="library" />Library</NavLink>
                </li>
                <li className="left__item">
                    <NavLink className="left__link" to="/history"><img src={history} alt="history" />History</NavLink>
                </li>
                <li className="left__item"><NavLink className="left__link" to="/watch-later"><img src={watch} alt="watch" />Watch later</NavLink></li>
                <li className="left__item"><NavLink className="left__link" to="/favourites"><img src={favourites} alt="favourites" />Favourites</NavLink></li>
                <li className="left__item"><NavLink className="left__link" to="likedvideos"><img src={likedvideos} alt="likedvideos" />Liked videos</NavLink></li>
                <li className="left__item"><NavLink className="left__link" to="music"><img src={music} alt="music" />Music</NavLink></li>
                <li className="left__item"><NavLink className="left__link" to="games"><img src={games} alt="games" />Games</NavLink></li>
                <li className="left__item"><NavLink className="left__link" to="showmore"><img src={showmore} alt="showmore" />Show more</NavLink></li>
                <li className="left__item"><h2>Subscribtions</h2></li>


                <li className="left__item"><NavLink className="left__link" to="margaret"><img src={margaret} className="margaret__img" alt="margaret" /><span className="margaret__span">Margaret Phelps</span></NavLink></li>
                <li className="left__item"><NavLink className="left__link" to="dollieblair"><img src={dollieblair} className="margaret__img" alt="margaret" /><span className="margaret__span">Dollie Blair</span></NavLink></li>
                <li className="left__item"><NavLink className="left__link" to="foodanddrink"><img src={fooddrink} className="margaret__img" alt="margaret" /><span className="margaret__span">Food & Drink</span></NavLink></li>
                <li className="left__item"><NavLink className="left__link" to="setting"><img src={setting} alt="setting" />Setting</NavLink></li>
            </ul>
        </div>
    );
}

export default Left;