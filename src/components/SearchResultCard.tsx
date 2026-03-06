import React from 'react';
import { useNavigate } from 'react-router';
import RatingStars from './RatingStars';
import * as styles from './SearchResultCard.module.css';
import { ModelId } from "../types/identifiers";

interface ResultCardProps {
  id: ModelId;
  model: string;
  rating: number;
  badge: string;
  knownIssues: string;
  distros?: string;
}

const SearchResultCard: React.FC<ResultCardProps> = ({ id, model, rating, badge, knownIssues, distros }) => {
  const navigate = useNavigate();

  return (
    <li className={`${styles.resultCard} card`}>
      <div className={styles.resultImg}></div>
      <div className={styles.resultContent}>
        <h3>{model}</h3>
        <div style={{ fontSize: "0.8rem", color: "var(--text-dim)"}}>
          <RatingStars rating={rating} /> {badge}
        </div>
        <hr style={{ opacity: 0.1, margin: '15px 0' }} />
        <div className={styles.knownIssues}>
          <em>Known Issues:</em> {knownIssues}
        </div>
        {distros && (
          <div className={styles.knownIssues}>
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
