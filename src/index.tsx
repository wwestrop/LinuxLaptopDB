import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './style.css';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import ModelDetailsPage from './pages/ModelDetailsPage';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/model/:id" element={<ModelDetailsPage />} />
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
