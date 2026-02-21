import React from 'react';

interface RecentSubmissionProps {
  text: string;
}

const RecentSubmission: React.FC<RecentSubmissionProps> = ({ text }) => {
  return (
    <div className="recent-item">
      <span>▶</span>
      <div>{text}</div>
    </div>
  );
};

export default RecentSubmission;
