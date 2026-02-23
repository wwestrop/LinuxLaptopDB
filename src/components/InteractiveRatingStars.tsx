import React, { useState } from 'react';

interface InteractiveRatingStarsProps {
  value: number;
  onChange: (value: number) => void;
}

const InteractiveRatingStars: React.FC<InteractiveRatingStarsProps> = ({ value, onChange }) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const displayValue = hoverValue !== null ? hoverValue : value;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <div className="stars" style={{ cursor: 'pointer', fontSize: '1.2rem', color: 'var(--accent-gold)' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => onChange(star)}
            onMouseEnter={() => setHoverValue(star)}
            onMouseLeave={() => setHoverValue(null)}
          >
            {star <= displayValue ? '★' : '☆'}
          </span>
        ))}
      </div>
      <span style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
        ({value})
      </span>
    </div>
  );
};

export default InteractiveRatingStars;
