import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const reviewData = [
        {
            name : "shubho",
            img : "https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1618487109~hmac=d95bdac1cdc2ec42d08eec0c1e24200e",
            title : "Hello world"
        },
        {
            name : "shubho",
            img : "https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1618487109~hmac=d95bdac1cdc2ec42d08eec0c1e24200e",
            title : "Hello world"
        },
        {
            name : "shubho",
            img : 'https://www.flaticon.com/svg/vstatic/svg/1077/1077012.svg?token=exp=1618488442~hmac=6bb9f65d7e92376957c9317df9dd6328',
            title : "Hello world"
        },
        {
            name : "shubho",
            img : 'https://www.flaticon.com/svg/vstatic/svg/1077/1077012.svg?token=exp=1618488442~hmac=6bb9f65d7e92376957c9317df9dd6328',
            title : "Hello world"
        },
        {
            name : "shubho",
            img : null,
            title : "Hello world"
        },
        {
            name : "shubho",
            img : null,
            title : "Hello world"
        }
    ]
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