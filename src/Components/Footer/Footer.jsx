import './Footer.css';
import React from 'react';
import home from '../../Assets/Svg/home.svg';
import trending from '../../Assets/Svg/trending.svg';
import subscribtions from '../../Assets/Svg/subscribtions.svg';
import library from '../../Assets/Svg/library.svg';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer__list">
            <NavLink to="/" className="header__link" >
                <li className="footer__item"><img src={home} alt="" /></li>
                </NavLink>
            <NavLink to="/trending" className="header__link" >
                <li className="footer__item"><img src={trending} alt="" /></li>
                </NavLink>
            <NavLink to="/subscribtions" className="header__link" >
                <li className="footer__item"><img src={subscribtions} alt="" /></li>
                </NavLink>
            <NavLink to="/library" className="header__link" >
                <li className="footer__item"><img src={library} alt="" /></li>
                </NavLink>
            </ul>
        </div>
    );
}

export default Footer;
