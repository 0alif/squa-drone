import React from 'react';
import { useHistory } from "react-router-dom";
import './Products.css';

const Products = ({ product }) => {
    const { _id, name, description, image, price } = product;

    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/purchase/${id}`)
    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
                <img src={image} className="img-fluid card-img" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>${price}</h6>
                    <p className="card-text">{description}</p>
                    <button onClick={() => handleClick(_id)} className="btn purchase-btn">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Products;