import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Products from '../Products/Products';

const Product = () => {
    const [data, setData] = useState([]);
    const { isLoading } = useAuth();

    // load data
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(result => setData(result))
    }, [])

    // if loading show spinner
    if (isLoading) { <CircularProgress /> }

    return (
        <div>
            <div className="row g-5 m-0 mb-5">
                {
                    data.slice(6).map(product => <Products key={product._id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default Product;