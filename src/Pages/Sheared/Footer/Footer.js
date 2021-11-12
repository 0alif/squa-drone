import React from 'react';
import { SocialIcon } from 'react-social-icons';
import map from '../../../images/map.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row m-0">
                <div className="col-sm-12 col-md-4">
                    <h5>About Us</h5>
                    <p>Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing.</p>
                </div>
                <div className="col-sm-12 col-md-2">
                    <h5>Categories</h5>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Service</p>
                    <p>News</p>
                </div>
                <div className="col-sm-12 col-md-2">
                    <SocialIcon className="ms-3 my-5" url="https://twitter.com" />
                    <SocialIcon className="ms-3 my-5" url="https://facebook.com" />
                    <SocialIcon className="ms-3 my-5" url="https://linkedin.com" />
                </div>
                <div className="col-sm-12 col-md-4">
                    <img className="img-fluid" src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;