import './Special.css';
import React from 'react';
import abrief from '../../Assets/Image/abrief.png';
import selecting from '../../Assets/Image/selecting.png';
import asteroids from '../../Assets/Image/asteroids.png';
import telescopes from '../../Assets/Image/telescopes.png';
import moongazing from '../../Assets/Image/moongazing.png';
import medicalcare from '../../Assets/Image/medicalcare.png';
// import asteroids from '../../Assets/Image/asteroids.png';
const Asteroids = () => {
    return (
        <div>
            <div className="special__div">
                <nav className="special__nav">
                <img className="asteroids" src={asteroids} alt="" />
                <h1 className="special__title">Asteroids</h1>
                <div>
                    <nav>
                        <p>123K views</p>
                    </nav>
                    <nav>
                        <ul className="special__list">
                            <li className="special__item"></li>
                            <li className="special__item"></li>
                            <li className="special__item"></li>
                            <li className="special__item"></li>
                        </ul>
                    </nav>
                </div>
                </nav>
                <nav>
                <ul style={{display: 'block', marginTop: '100px'}} className="header__list">
                <li className="header__item">
                    <img src={abrief} alt="" />
                    <h3>A Brief History Of Creation</h3>
                    <p>80k views  ·  3 days ago <span>Dollie Blair</span></p>
                </li>
                <li className="header__item">
                    <img src={selecting} alt="" />
                    <h3>Selecting The Right Hotel</h3>
                    <p>123k views  ·  1 months ago <span>Dollie Blair</span></p>
                </li>
                <li className="header__item">
                    <img src={asteroids} alt="" />
                    <h3>Asteroids</h3>
                    <p>43k views  ·  12 days ago <span>Dollie Blair</span></p>
                </li>
                <li className="header__item">
                    <img src={telescopes} alt="" />
                    <h3>Telescopes 101</h3>
                    <p>11k views  ·  6 months ago  <span>Dollie Blair</span></p>
                </li>
                <li className="header__item">
                    <img src={medicalcare} alt="" />
                    <h3>Medical Care Is Just</h3>
                    <p>18k views  ·  2 days ago <span>Dollie Blair</span></p>
                </li>
                <li className="header__item">
                    <img src={moongazing} alt="" />
                    <h3>Moon Gazing</h3>
                    <p>67k views  ·  4 months ago <span>Dollie Blair</span></p>
                </li>
            </ul>
                </nav>
            </div>
        </div>
    );
}

export default Asteroids;
