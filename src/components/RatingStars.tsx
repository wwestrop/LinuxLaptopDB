import React from 'react';
import styles from './RatingStars.module.css';

interface RatingStarsProps {
  rating: number; // 0 to 5
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const fullStars = Math.round(rating);
  const emptyStars = 5 - fullStars;

  return (
    <span className={styles.ratingStars}>
      {'★'.repeat(fullStars)}
      {'☆'.repeat(emptyStars)}
    </span>
  );
};

export default RatingStars;
