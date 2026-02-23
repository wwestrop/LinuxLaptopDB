import React from 'react';
import { useNavigate } from 'react-router';
import RatingStars from './RatingStars';
import styles from './SearchResultCard.module.css';

interface ResultCardProps {
  id: string;
  model: string;
  rating: number;
  badge: string;
  knownIssues: string;
  distros?: string;
}

const SearchResultCard: React.FC<ResultCardProps> = ({ id, model, rating, badge, knownIssues, distros }) => {
  const navigate = useNavigate();

  return (
    <li className={styles['result-card']}>
      <div className={styles['result-img']}></div>
      <div className={styles['result-content']}>
        <h3>{model}</h3>
        <div className={styles['report-meta']}>
          <RatingStars rating={rating} /> {badge}
        </div>
        <hr style={{ opacity: 0.1, margin: '15px 0' }} />
        <div className={styles['known-issues']}>
          <em>Known Issues:</em> {knownIssues}
        </div>
        {distros && (
          <div className={styles['known-issues']}>
            <em>Most Used Distros:</em> {distros}
          </div>
        )}
        <button 
          style={{ marginTop: '15px' }} 
          onClick={() => navigate(`/model/${id}`)}
        >
          View Details
        </button>
      </div>
    </li>
  );
};

export default SearchResultCard;
