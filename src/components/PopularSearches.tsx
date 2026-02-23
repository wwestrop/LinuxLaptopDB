import React, { use } from 'react';
import SearchLink from './SearchLink';

interface PopularSearchesProps {
  dataPromise: Promise<string[]>;
}

const PopularSearches: React.FC<PopularSearchesProps> = ({ dataPromise }) => {
  const searches = use(dataPromise);

  if (!searches || searches.length === 0) {
    return <>&nbsp;</>
  }

  return (
    <>
      Popular Searches: 
      {searches.map((text, index) => (
        <React.Fragment key={text}>
          <SearchLink text={text} />
          {index < searches.length - 1 && ' | '}
        </React.Fragment>
      ))}
    </>
  );
};

export default PopularSearches;
