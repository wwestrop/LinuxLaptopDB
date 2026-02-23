import React, { Suspense } from 'react';
import Header from '../components/Header';
import SearchSection from '../components/SearchSection';
import DashboardGrid from '../components/DashboardGrid';
import Spinner from '../components/Spinner';
import { fetchDashboardData } from '../services/reportService';
import styles from './HomePage.module.css';

const dashboardDataPromise = fetchDashboardData();

const HomePage = () => {
  return (
    <>
      <Header />
      <SearchSection />
      
      <div className={styles.browseNav}>
        Browse by: 
        <a href="#">Laptop Models</a> | 
        <a href="#">Wi-Fi Chips</a> | 
        <a href="#">GPUs</a> | 
        <a href="#">Fingerprint Readers</a> | 
        <a href="#">Docking Stations</a>
      </div>

      <Suspense fallback={<Spinner message="Loading grid" />}>
        <DashboardGrid dataPromise={dashboardDataPromise} />
      </Suspense>
    </>
  );
};

export default HomePage;
