import React, { Suspense, useMemo } from 'react';
import { useParams } from 'react-router';
import Header from '../components/Header';
import ModelDetails from '../components/ModelDetails';
import Spinner from '../components/Spinner';
import { getModelSummary } from '../services/searchService';

const ModelDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const dataPromise = useMemo(() => {
    if (!id) return Promise.reject("No ID provided");
    return getModelSummary(id);
  }, [id]);

  return (
    <>
      <Header />
      <main>
          <div className="card">
              <Suspense fallback={<Spinner message="Loading model details" />}>
                  <ModelDetails dataPromise={dataPromise} />
              </Suspense>

              <button style={{ marginTop: '20px' }} onClick={() => window.history.back()}>Go Back</button>
          </div>
      </main>
    </>
  );
};

export default ModelDetailsPage;
