import React, { use } from 'react';
import ReportItem from './ReportItem';
import RecentSubmission from './RecentSubmission';
import { Report, Submission } from '../services/reportService';

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
    <div className="dashboard-grid">
      <div className="card trending">
        <h3>Trending Compatibility Reports</h3>
        {data.trendingReports.map((report, index) => (
          <ReportItem 
            key={index}
            model={report.model} 
            rating={report.rating} 
            badge={report.badge} 
          />
        ))}
      </div>

      <div className="card recent">
        <h3>Recent Submissions</h3>
        {data.recentSubmissions.map((submission, index) => (
          <RecentSubmission key={index} text={submission.text} />
        ))}
      </div>
    </div>
  );
};

export default DashboardGrid;
