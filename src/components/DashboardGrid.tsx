import React, { use } from 'react';
import ReportItem from './ReportItem';
import RecentSubmission from './RecentSubmission';
import { Report, Submission } from '../services/reportService';
import * as styles from './DashboardGrid.module.css';

interface DashboardData {
  trendingReports: Report[];
  recentSubmissions: Submission[];
}

interface DashboardGridProps {
  dataPromise: Promise<DashboardData>;
}

const DashboardGrid: React.FC<DashboardGridProps> = ({ dataPromise }) => {
  const data = use(dataPromise);

  return (
    <div className={styles.dashboardGrid}>
      <div className="card trending">
        <h3>Trending Compatibility Reports</h3>
        <ul className="item-list">
          {data.trendingReports.map(report=> (
            <ReportItem
              id={report.id} 
              key={report.id}
              model={report.model} 
              rating={report.rating} 
              badge={report.badge} 
            />
          ))}
        </ul>
      </div>

      <div className="card recent">
        <h3>Recent Submissions</h3>
        <ul className="item-list">
          {data.recentSubmissions.map((submission, index) => (
            <RecentSubmission key={index} text={submission.text} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardGrid;
