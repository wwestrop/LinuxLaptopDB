import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router';
import InteractiveRatingStars from '../components/InteractiveRatingStars';

const SubmitReportPage = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(5);

  return (
    <div className="app">
      <Header />
      <main className="results-section">
        <h2>Submit Compatibility Report</h2>
        <div className="card">
          <form onSubmit={(e) => { e.preventDefault(); alert(`Report submitted with rating ${rating} (simulated)`); navigate('/'); }}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Laptop Model:</label>
              <input type="text" placeholder="e.g. Lenovo ThinkPad T14" style={{ width: '100%', padding: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--card-border)', color: 'white', borderRadius: '4px' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Your Rating:</label>
              <InteractiveRatingStars value={rating} onChange={setRating} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Details / Known Issues:</label>
              <textarea placeholder="Describe your experience..." style={{ width: '100%', padding: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--card-border)', color: 'white', borderRadius: '4px', minHeight: '100px' }}></textarea>
            </div>
            <button type="submit">Submit Report</button>
          </form>
        </div>
        <button onClick={() => navigate(-1)} style={{ marginTop: '20px' }}>Go Back</button>
      </main>
    </div>
  );
};

export default SubmitReportPage;
