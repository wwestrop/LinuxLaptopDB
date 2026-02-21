import React from 'react';

interface RatingStarsProps {
  rating: number; // 0 to 5
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const fullStars = Math.round(rating);
  const emptyStars = 5 - fullStars;

  return (
    <span className="rating-stars">
      {'★'.repeat(fullStars)}
      {'☆'.repeat(emptyStars)}
    </span>
  );
};

export default RatingStars;
