import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './style.css';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import ModelDetailsPage from './pages/ModelDetailsPage';
import SubmitReportPage from './pages/SubmitReportPage';

const App = () => {
  return (
    <div className="app">
      <div className="alpha-badge">ALPHA</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/model/:id" element={<ModelDetailsPage />} />
          <Route path="/submit" element={<SubmitReportPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
