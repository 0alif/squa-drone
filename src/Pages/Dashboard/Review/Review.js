import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Alert } from '@mui/material';
import './Review.css';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const [success, setSuccess] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const newData = { ...data, name: user.displayName }
        fetch('https://quiet-brushlands-60225.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                setSuccess(data.insertedId)
                reset()
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="review">
                <h2>Please Give Us Review</h2>
                <textarea className="review-input" type="text" placeholder="Write your review here" {...register("review", { required: true })} />
                <input className="review-input" type="text" placeholder="Rating" {...register("rating", { required: true })} />
                <button className="btn review-btn" type="submit">Submit</button>
            </form>
            {success && <Alert severity="success">Review added successfully!</Alert>}
        </div>
    );
};

export default Review;