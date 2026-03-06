import React, {use} from 'react';
import {SearchResult} from '../services/searchService';
import RatingStars from './RatingStars';

interface ModelDetailsProps {
    dataPromise: Promise<SearchResult>;
}

const ModelDetails: React.FC<ModelDetailsProps> = ({dataPromise}) => {
    const data = use(dataPromise);

    return (
        <>
            <h2>{data.model}</h2>

            <RatingStars rating={data.rating}/> <span style={{marginLeft: '10px'}}>{data.badge}</span>

            {/* TODO factor out this "section" subcard style */}
            <div
                style={{marginTop: '20px', padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'}}>

                <div style={{marginBottom: '15px'}}>
                    <strong>Known Issues:</strong>
                    <p>{data.knownIssues}</p>
                </div>

                {data.popularDistros && (
                    <div style={{marginBottom: '15px'}}>
                        <strong>Popular Distributions:</strong>
                        <p>{data.popularDistros}</p>
                    </div>
                )}

                <p><span style={{color: "var(--accent-red", fontWeight: "bold"}}>TODO: </span> Full hardware specifications and user reviews will be displayed here in the future.</p>
            </div>
        </>
    );
};

export default ModelDetails;
