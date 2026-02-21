import React from 'react';

interface RecentSubmissionProps {
  text: string;
}

const RecentSubmission: React.FC<RecentSubmissionProps> = ({ text }) => {
  return (
    <li className="recent-item">
      <span>▶</span>
      <div>{text}</div>
    </li>
  );
};

export default RecentSubmission;
