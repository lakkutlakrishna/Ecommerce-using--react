import React from "react";
import "../../styles/Reviews.css";

const Reviews = () => {
  // Sample reviews data
  const reviews = [
    { id: 1, product: "Product A", rating: 5, comment: "Great product!" },
    { id: 2, product: "Product B", rating: 4, comment: "Good quality." },
  ];

  return (
    <div className="reviews">
      <h2>Reviews & Ratings</h2>
      <div className="reviews-list">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="review-card">
              <p><strong>Product:</strong> {review.product}</p>
              <p><strong>Rating:</strong> {review.rating}/5</p>
              <p><strong>Comment:</strong> {review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews submitted yet.</p>
        )}
      </div>
      <button>Write a Review</button>
    </div>
  );
};

export default Reviews;