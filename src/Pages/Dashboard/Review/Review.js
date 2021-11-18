import React from 'react';
import { useForm } from "react-hook-form";
import './Review.css';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="review">
                <h2>Please Give Us Review</h2>
                <textarea className="review-input" type="text" placeholder="Write your review here" {...register("review", { required: true })} />
                <input className="review-input" type="number" placeholder="Rating" {...register("rating", { required: true })} />
                <button className="btn review-btn" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Review;