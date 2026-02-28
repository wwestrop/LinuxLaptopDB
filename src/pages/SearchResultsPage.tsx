import React, {Suspense, useMemo} from 'react';
import { useSearchParams } from 'react-router';
import Header from '../components/Header';
import SearchSection from '../components/SearchSection';
import Spinner from '../components/Spinner';
import { basicSearch } from "../services/searchService";
import {SearchResultsList} from "../components/SearchResultsList";



const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const dataPromise = useMemo(() => basicSearch(query), [query]);

  return (
    <>
      <Header />
      <SearchSection initialQuery={query} />

      <Suspense key={query} fallback={<Spinner message="Searching" />}>
        <SearchResultsList dataPromise={dataPromise} query={query} />
      </Suspense>
    </>
  );
};

export default SearchResultsPage;
