import React from 'react';
import { useNavigate } from 'react-router';
import RatingStars from './RatingStars';
import * as styles from './ReportItem.module.css';

interface ReportItemProps {
  id: string;
  model: string;
  rating: number;
  badge: string;
}

const ReportItem: React.FC<ReportItemProps> = ({ id, model, rating, badge }) => {
  const navigate = useNavigate();

  return (
    <li 
      className={styles.reportItem} 
      onClick={() => navigate(`/model/${id}`)}
      style={{ cursor: 'pointer' }}
    >
      <div className={styles.reportImg}></div>
      <div className={styles.reportInfo}>
        <h4>{model}</h4>
        <div className={styles.reportMeta}>
          <RatingStars rating={rating} /> {badge}
        </div>
      </div>
    </li>
  );
};

export default ReportItem;
