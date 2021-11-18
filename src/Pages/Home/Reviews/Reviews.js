import React, { useEffect, useState } from 'react';
import ReviewsList from '../ReviewsList/ReviewsList';
import './Reviews.css';

const Reviews = () => {
    const [review, setReview] = useState([]);

    // load reviews
    useEffect(() => {
        fetch('https://quiet-brushlands-60225.herokuapp.com/review')
            .then(res => res.json())
            .then(result => setReview(result))
    }, [])

    return (
        <div className="container">
            <h2 className="user-review">User Reviews</h2>
            <div className="row m-0 mb-5">
                {
                    review.map(data => <ReviewsList key={data._id} data={data}></ReviewsList>)
                }
            </div>
        </div>
    );
};

export default Reviews;