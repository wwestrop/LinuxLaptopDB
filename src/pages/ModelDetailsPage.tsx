import React from 'react';
import { useParams } from 'react-router';
import Header from '../components/Header';

const ModelDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Header />
      <main>
        <div className="card">
          <h2>Model Details</h2>
          <p style={{ color: 'var(--text-dim)' }}>Model ID: {id}</p>
          <div style={{ marginTop: '20px', padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
            <p>This is a skeletal model details page for the laptop with ID: <strong>{id}</strong>.</p>
            <p>Full hardware specifications, compatibility status, and user reviews will be displayed here in the future.</p>
          </div>
          <button style={{ marginTop: '20px' }} onClick={() => window.history.back()}>Go Back</button>
        </div>
      </main>
    </>
  );
};

export default ModelDetailsPage;
