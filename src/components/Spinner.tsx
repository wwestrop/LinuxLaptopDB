import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Loading dashboard reports...</p>
    </div>
  );
};

export default Spinner;
