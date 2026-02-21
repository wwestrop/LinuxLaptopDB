import React from 'react';
import RatingStars from './RatingStars';

interface ResultCardProps {
  model: string;
  rating: number;
  badge: string;
  knownIssues: string;
  distros?: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ model, rating, badge, knownIssues, distros }) => {
  return (
    <div className="result-card">
      <div className="result-img"></div>
      <div className="result-content">
        <h3>{model}</h3>
        <div className="report-meta">
          <RatingStars rating={rating} /> {badge}
        </div>
        <hr style={{ opacity: 0.1, margin: '15px 0' }} />
        <div className="known-issues">
          <em>Known Issues:</em> {knownIssues}
        </div>
        {distros && (
          <div className="known-issues">
            <em>Most Used Distros:</em> {distros}
          </div>
        )}
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
};

export default ResultCard;
