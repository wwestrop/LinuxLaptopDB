import {use} from "react";
import {SearchResult} from "../services/searchService";
import SearchResultCard from "./ResultCard";

interface SearchResultsListProps {
  dataPromise: Promise<SearchResult[]>;
  query: string;
}

export const SearchResultsList: React.FC<SearchResultsListProps> = ({ dataPromise, query }) => {
  const data = use(dataPromise);

  return (
    <section className="results-section">
      <h2>Results for "{query}"</h2>

      {data.map(d => (
          <SearchResultCard
            id={d.id}
            key={d.id} 
            model={d.model} 
            rating={d.rating} 
            badge={d.badge}
            knownIssues={d.knownIssues}
          />
      ))}
    </section>
  );
};