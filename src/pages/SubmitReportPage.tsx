import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate, useSearchParams } from 'react-router';
import InteractiveRatingStars from '../components/InteractiveRatingStars';

const SubmitReportPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialModel = searchParams.get('model') || '';
  const [model, setModel] = useState(initialModel);
  const [rating, setRating] = useState(0);
  
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault(); 
    alert(`Validation handled here too`);
    // TODO sensible validation
    // minimum length
    // ASCII only
    // rate limiting
    
    alert(`Report submitted with rating ${rating} (simulated)`);
    navigate('/');
  }

  return (
    <>
      <Header />
      <main className="results-section">
        <h2>Submit Compatibility Report</h2>
        <div className="card">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Laptop Model:</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Lenovo ThinkPad T14" 
                value={model}
                onChange={(e) => setModel(e.target.value)}
                style={{ width: '100%', padding: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--card-border)', color: 'white', borderRadius: '4px' }} 
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Your Rating:</label>
              <InteractiveRatingStars value={rating} onChange={setRating} />
              {rating === 0 && <span style={{ color: 'var(--accent-red)', fontSize: '0.8rem', marginLeft: '10px' }}>Please select a rating</span>}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Details / Known Issues:</label>
              <textarea
                placeholder="Describe your experience..." 
                style={{ width: '100%', padding: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--card-border)', color: 'white', borderRadius: '4px', minHeight: '100px' }}
              ></textarea>
            </div>
            <button type="submit" disabled={rating === 0}>Submit Report</button>
          </form>
        </div>
        {/*// TODO other sensible questions (see proton DB queries)*/}
        {/*// works out of the box*/}
        {/*// any tweaks*/}
        {/*// what doesnt work at all*/}
        {/*// what doesnt work well*/}
        {/*// other*/}
        <button onClick={() => navigate(-1)} style={{ marginTop: '20px' }}>Go Back</button>
      </main>
    </>
  );
};

export default SubmitReportPage;
