import React from 'react';
import RatingStars from './RatingStars';

interface ReportItemProps {
  model: string;
  rating: number;
  badge: string;
}

const ReportItem: React.FC<ReportItemProps> = ({ model, rating, badge }) => {
  return (
    <div className="report-item">
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
