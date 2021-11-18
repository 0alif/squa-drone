import { Rating, Stack } from '@mui/material';
import React from 'react';
import './ReviewList.css';

const ReviewsList = ({ data }) => {
    const { name, review, rating } = data;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="review-card">{name}</h5>
                    <Stack spacing={1}>
                        <Rating sx={{ mx: "auto" }} name="half-rating-read" value={parseFloat(rating)} precision={0.5} readOnly />
                    </Stack>
                    <p className="review-card">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewsList;