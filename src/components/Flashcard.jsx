import { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`flashcard ${card.difficulty.toLowerCase()} ${card.subject.replace(/\s+/g, '-')} ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      aria-label={`Flashcard: ${card.question}`}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <p>{card.question}</p>
          <span className="category">{card.subject}</span>
          <span className="difficulty">{card.difficulty}</span>
        </div>
        <div className="flashcard-back">
          <p>{card.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;