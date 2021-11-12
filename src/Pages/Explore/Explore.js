import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Sheared/Footer/Footer';
import Navigation from '../Sheared/Navigation/Navigation';
import bg from '../../images/Over.jpg';
import './Explore.css';

const exploreImg = {
    backgroundImage: `url(${bg})`,
    "height": "70vh",
    "width": "100%",
    "backgroundPosition": "center",
    "backgroundRepeat": "noRepeat",
    "backgroundSize": "cover"
}

const Explore = () => {
    const [data, setData] = useState([]);
    const { isLoading } = useAuth();
    const history = useHistory();

    // load data
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(result => setData(result))
    }, [])

    const handleClick = (id) => {
        history.push(`/purchase/${id}`)
    }

    // if loading show spinner
    if (isLoading) { <CircularProgress /> }

    return (
        <div>
            <Navigation></Navigation>
            <div className="bg-container" style={exploreImg}>
                <div className="explore">
                    <h1>Get Your <span>Drone</span></h1>
                    <p>If you’re buying a drone for the first time, you may want to consider the features, flight time, camera resolution, accessories and easy of use.</p>
                </div>
            </div>
            <div className="row g-5 m-0 mb-5">
                {
                    data.map(product => (
                        <div key={product._id} className="col-sm-12 col-md-6 col-lg-4">
                            <div className="card">
                                <img src={product.image} className="img-fluid card-img" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <h6>${product.price}</h6>
                                    <p className="card-text">{product.description}</p>
                                    <button onClick={() => handleClick(product._id)} className="btn purchase-btn">Purchase</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;