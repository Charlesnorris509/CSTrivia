import { useState, useEffect } from 'react';
import './Flashcard.css';

const Flashcard = ({ card, onNext, onPrevious, onCorrectAnswer, onWrongAnswer, onMasterCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null); // null, 'correct', or 'incorrect'

  // Reset state when card changes
  useEffect(() => {
    setIsFlipped(false);
    setUserAnswer('');
    setFeedback(null);
  }, [card]);

  // Manual flip handler
  const handleManualFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const checkAnswer = (userInput, correctAnswer) => {
    const normalize = (str) => str.toLowerCase().trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    const userNormalized = normalize(userInput);
    const correctNormalized = normalize(correctAnswer);
    
    // Check for exact match
    if (userNormalized === correctNormalized) return true;
    
    // Check if answer contains main keywords
    const correctKeywords = correctNormalized.split(' ');
    const userKeywords = userNormalized.split(' ');
    
    // Calculate matching keywords percentage
    const matchingKeywords = correctKeywords.filter(keyword => 
      userKeywords.some(userWord => 
        userWord.includes(keyword) || keyword.includes(userWord)
      )
    );
    
    return matchingKeywords.length / correctKeywords.length >= 0.7; // 70% match threshold
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    
    if (!userAnswer.trim()) return; // Don't submit empty answers
    
    const isCorrect = checkAnswer(userAnswer, card.answer);
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
      onCorrectAnswer();
    } else {
      onWrongAnswer();
    }
    
    // Flip the card to show answer after submission
    setIsFlipped(true);
  };

  const handleNextCard = () => {
    // Reset states for new card
    setIsFlipped(false);
    setUserAnswer('');
    setFeedback(null);
    onNext();
  };

  const handlePreviousCard = () => {
    // Reset states for new card
    setIsFlipped(false);
    setUserAnswer('');
    setFeedback(null);
    onPrevious();
  };

  return (
    <div className="flashcard-wrapper">
      <div 
        className={`flashcard ${card.difficulty.toLowerCase()} ${card.subject.replace(/\s+/g, '-')} ${isFlipped ? 'flipped' : ''} ${feedback ? `feedback-${feedback}` : ''}`}
        aria-label={`Flashcard: ${card.question}`}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <p>{card.question}</p>
            <span className="category">{card.subject}</span>
            <span className="difficulty">{card.difficulty}</span>
            
            {/* Add user input form */}
            <form className="answer-form" onSubmit={handleAnswerSubmit}>
              <input
                type="text"
                className="answer-input"
                placeholder="Type your answer..."
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                autoComplete="off"
                spellCheck="false"
                aria-label="Your answer"
              />
              <div className="flashcard-buttons">
                <button 
                  type="submit" 
                  className="submit-answer"
                  disabled={!userAnswer.trim()}
                >
                  Submit Answer
                </button>
                <button 
                  type="button" 
                  className="manual-flip-button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleManualFlip();
                  }}
                >
                  Flip Card
                </button>
              </div>
            </form>
            
            {/* Feedback message */}
            {feedback && (
              <div className={`feedback-message ${feedback}`}>
                {feedback === 'correct' ? 'Correct! 👍' : 'Not quite right. Try again or flip to see answer.'}
              </div>
            )}
          </div>
          <div className="flashcard-back">
            <p>{card.answer}</p>
            <div className="card-actions">
              <button 
                className="back-to-front"
                onClick={handleManualFlip}
              >
                Back to Question
              </button>
              <button 
                className="master-button"
                onClick={() => onMasterCard(card.id)}
              >
                Mark as Mastered
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="navigation-buttons">
        <button 
          className="nav-button prev-button" 
          onClick={handlePreviousCard}
          aria-label="Previous Card"
        >
          Previous Card
        </button>
        <button 
          className="nav-button next-button" 
          onClick={handleNextCard}
          aria-label="Next Card"
        >
          Next Card
        </button>
      </div>
    </div>
  );
};

export default Flashcard;