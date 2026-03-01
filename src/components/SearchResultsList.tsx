import {use} from "react";
import {SearchResult} from "../services/searchService";
import SearchResultCard from "./SearchResultCard";
import { useNavigate } from "react-router";
import * as styles from "./SearchResultsList.module.css"

interface SearchResultsListProps {
  dataPromise: Promise<SearchResult[]>;
  query: string;
}

export const SearchResultsList: React.FC<SearchResultsListProps> = ({ dataPromise, query }) => {
  const data = use(dataPromise);
  const navigate = useNavigate();

  if (data.length === 0) {
    return (
      <section className={styles.noResults}>
        <h2>Results for "{query}"</h2>
        <div className="card no-results">
          <p>We currently have no information about this computer.</p>
          <p>Please double check your spelling, or <a href={`/submit?model=${encodeURIComponent(query)}`}>submit a report</a> for this model.</p>
        </div>
      </section>
    );
  }
  

    return (
    <section className="results-section">
      <h2>Results for "{query}"</h2>

      <ul className="item-list">
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
      </ul>
    </section>
  );
};