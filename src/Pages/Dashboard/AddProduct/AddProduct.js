import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const [success, setSuccess] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://quiet-brushlands-60225.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setSuccess(data.insertedId)
                reset();
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="add-product">
                <h2>Add A Product</h2>
                <input className="product-input" type="text" placeholder="Name" {...register("name", { required: true })} />
                <input className="product-input" type="number" placeholder="Price" {...register("price", { required: true })} />
                <textarea className="product-input" type="text" placeholder="Description" {...register("description", { required: true })} />
                <input className="product-input" type="text" placeholder="Img url" {...register("image", { required: true })} />
                <button className="btn add-btn" type="submit">Add</button>
            </form>
            {success && <Alert severity="success">Product added successfully!</Alert>}
        </div>
    );
};

export default AddProduct;