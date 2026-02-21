import React from 'react';
import ReportItem from './ReportItem';
import RecentSubmission from './RecentSubmission';

const DashboardGrid = () => {
  return (
    <div className="dashboard-grid">
      <div className="card trending">
        <h3>Trending Compatibility Reports</h3>
        <ReportItem 
          model="Lenovo ThinkPad T14 Gen 4 (AMD)" 
          rating={5} 
          badge="Platinum" 
        />
        <ReportItem 
          model="Dell XPS 13 9310" 
          rating={5} 
          badge="Gold" 
        />
        <ReportItem 
          model="HP Spectre x360 14" 
          rating={3} 
          badge="Silver" 
        />
        <ReportItem 
          model="Asus Zephyrus G14 (2023)" 
          rating={2} 
          badge="Bronze" 
        />
      </div>

      <div className="card recent">
        <h3>Recent Submissions</h3>
        <RecentSubmission text="T480, Fedora 40: everything works except fingerprint" />
        <RecentSubmission text="XPS 15 9520, Ubuntu 24.04: suspend flaky, needs kernel tweak" />
      </div>
    </div>
  );
};

export default DashboardGrid;
