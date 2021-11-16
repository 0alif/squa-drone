import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Sheared/Footer/Footer';
import Navigation from '../Sheared/Navigation/Navigation';
import { Button, TextField } from '@mui/material';
import './Purchase.css';

const Purchase = () => {
    const [product, setProduct] = useState({});
    const [orders, setOrders] = useState({});
    const { id } = useParams();

    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...orders, productName: product.name, productPrice: product.price, productId: product._id, description: product.description, img: product.image };
        newData[field] = value;
        setOrders(newData);
    }

    // load add products
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id])

    // sent order to DB
    const handleOrder = e => {
        e.preventDefault();
        fetch('http://localhost:5000/allOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Purchased successful!')
                }
            })
    }

    return (
        <div>
            <Navigation></Navigation>
            <div className="row m-0 py-5">
                <div className="col-sm-12 col-md-6">
                    <div className="product">
                        <img src={product.image} className="img-fluid" alt="" />
                        <div>
                            <h5>{product.name}</h5>
                            <h6>${product.price}</h6>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <form onSubmit={handleOrder} className="mt-5 py-5">
                        <TextField onBlur={handleOnBlur} required className="mb-3 w-50" type="text" name="name" label="Name" variant="standard" />
                        <br />
                        <TextField onBlur={handleOnBlur} required className="mb-3 w-50" type="email" name="email" label="Email" variant="standard" />
                        <br />
                        <TextField onBlur={handleOnBlur} required className="mb-3 w-50" type="text" name="address" label="Address" variant="standard" />
                        <br />
                        <TextField onBlur={handleOnBlur} required className="mb-3 w-50" type="tel" name="phone" label="Phone" variant="standard" />
                        <br />
                        <Button className="mb-3" type="submit" variant="outlined">Confirm Purchase</Button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;