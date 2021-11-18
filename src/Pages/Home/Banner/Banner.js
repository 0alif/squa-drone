import React from 'react';
import bg from '../../../images/hero.jpg';
import './Banner.css';

const heroImg = {
    backgroundImage: `url(${bg})`,
    "height": "100vh",
    "width": "100%",
    "backgroundPosition": "center",
    "backgroundRepeat": "noRepeat",
    "backgroundSize": "cover"
}

const Banner = () => {
    return (
        <div className="m-0">
            <div className="hero-container" style={heroImg}>
                <div className="hero">
                    <h1>We Can Make Your <br />
                        Celebration <span>Marvelous</span></h1>
                    <p className="hero-text">While they might seem like toys, a high-quality drone is a serious investment. We've flown plenty and there are a lot of good performers that we use.</p>
                    <button className="btn hero-btn rounded-pill">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;