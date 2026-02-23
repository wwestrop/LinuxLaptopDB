import React from 'react';
import styles from './RecentSubmission.module.css';

interface RecentSubmissionProps {
  text: string;
}

const RecentSubmission: React.FC<RecentSubmissionProps> = ({ text }) => {
  return (
    <li className={styles.recentItem}>
      <span>▶</span>
      <div>{text}</div>
    </li>
  );
};

export default RecentSubmission;
