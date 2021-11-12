import React from 'react';
import Footer from '../../Sheared/Footer/Footer';
import Navigation from '../../Sheared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Drone from '../Drone/Drone';
import Product from '../Product/Product';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Drone></Drone>
            <Product></Product>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;