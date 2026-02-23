import React from 'react';
import { useNavigate } from 'react-router';
import RatingStars from './RatingStars';
import styles from './ReportItem.module.css';

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
      className={styles['report-item']} 
      onClick={() => navigate(`/model/${id}`)}
      style={{ cursor: 'pointer' }}
    >
      <div className={styles['report-img']}></div>
      <div className={styles['report-info']}>
        <h4>{model}</h4>
        <div className={styles['report-meta']}>
          <RatingStars rating={rating} /> {badge}
        </div>
      </div>
    </li>
  );
};

export default ReportItem;
