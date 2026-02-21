import React from 'react';
import { useNavigate } from 'react-router';
import RatingStars from './RatingStars';

interface ReportItemProps {
  id: string;
  model: string;
  rating: number;
  badge: string;
}

const ReportItem: React.FC<ReportItemProps> = ({ id, model, rating, badge }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="report-item" 
      onClick={() => navigate(`/model/${id}`)}
      style={{ cursor: 'pointer' }}
    >
      <div className="report-img"></div>
      <div className="report-info">
        <h4>{model}</h4>
        <div className="report-meta">
          <RatingStars rating={rating} /> {badge}
        </div>
      </div>
    </div>
  );
};

export default ReportItem;
