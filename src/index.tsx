import React, { Suspense, use } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import DashboardGrid from './components/DashboardGrid';
import Spinner from './components/Spinner';
import ResultCard from './components/ResultCard';
import { fetchDashboardData } from './services/reportService';

const dashboardDataPromise = fetchDashboardData();

const App = () => {
  return (
    <div className="app">
      <Header />

      <SearchSection />

      <div className="browse-nav">
        Browse by: 
        <a href="#">Laptop Models</a> | 
        <a href="#">Wi-Fi Chips</a> | 
        <a href="#">GPUs</a> | 
        <a href="#">Fingerprint Readers</a> | 
        <a href="#">Docking Stations</a>
      </div>

      <Suspense fallback={<Spinner />}>
        <DashboardGrid dataPromise={dashboardDataPromise} />
      </Suspense>

      <section className="results-section">
        <h2>Results for "XPS 15 9520"</h2>
        
        <ResultCard 
          model="Dell XPS 15 9520 (2022)"
          rating={5}
          badge="Gold"
          knownIssues="Suspend, Hybrid GPU Switching, Webcam IR"
          distros="Ubuntu 24.04, Fedora 40, Arch"
        />

        <ResultCard 
          model="Dell XPS 15 9510 (2021)"
          rating={3}
          badge="Silver"
          knownIssues="Audio crackle, Thunderdock issues"
        />
      </section>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
