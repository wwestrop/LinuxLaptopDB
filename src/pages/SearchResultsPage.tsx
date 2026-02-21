import React, { Suspense } from 'react';
import { useSearchParams } from 'react-router';
import Header from '../components/Header';
import SearchSection from '../components/SearchSection';
import ResultCard from '../components/ResultCard';
import Spinner from '../components/Spinner';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <>
      <Header />
      <SearchSection initialQuery={query} />

      <Suspense fallback={<Spinner message="Searching" />}>
        <section className="results-section">
          <h2>Results for "{query}"</h2>
          
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
      </Suspense>
    </>
  );
};

export default SearchResultsPage;
