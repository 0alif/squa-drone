import React from 'react';
import Footer from '../../Sheared/Footer/Footer';
import Navigation from '../../Sheared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Product></Product>
            <Footer></Footer>
        </div>
    );
};

export default Home;