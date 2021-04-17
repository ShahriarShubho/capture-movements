import React, { useEffect } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
   const [reviewData, setReviewData] = React.useState([])
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
        .then(response => response.json())
        .then(data => setReviewData(data))
    }, [])
    return (
        <div className="container">
            <h1 className="text-center mt-5">User Review</h1>
            <div className="row">
                {
                    reviewData.map(review => <ReviewCard review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;