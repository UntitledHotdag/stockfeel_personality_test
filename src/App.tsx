import { useState } from 'react';
import questions from './data/questions.json';
import TestPage from './pages/TestPage';
import ResultPage from './pages/ResultPage';
import ImageSlot from './components/ImageSlot';

const START_IMAGE = '/images/start.png';

type AppState = 'start' | 'test' | 'result';

export default function App() {
  const [appState, setAppState] = useState<AppState>('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  function handleStart() {
    setAppState('test');
    setCurrentIndex(0);
    setScore(0);
  }

  function handleAnswer(answerScore: number) {
    const newScore = score + answerScore;
    if (currentIndex + 1 >= questions.length) {
      setScore(newScore);
      setAppState('result');
    } else {
      setScore(newScore);
      setCurrentIndex((i) => i + 1);
    }
  }

  function handleRetake() {
    setAppState('start');
    setCurrentIndex(0);
    setScore(0);
  }

  if (appState === 'test') {
    return <TestPage currentIndex={currentIndex} onAnswer={handleAnswer} />;
  }

  if (appState === 'result') {
    return <ResultPage score={score} onRetake={handleRetake} />;
  }

  return (
    <div className="start-page">
      <div className="start-page__inner">
        <ImageSlot src={START_IMAGE} alt="Personality test illustration" variant="start" />
        <div className="start-badge">Investor Profile</div>
        <h1 className="start-title">What Kind of Investor Are You?</h1>
        <p className="start-description">
          Answer 10 quick questions and discover your unique investment personality — along with curated articles to help you invest smarter.
        </p>
        <div className="start-meta">
          <span>10 questions</span>
          <span className="start-meta__dot" />
          <span>~2 minutes</span>
        </div>
        <button className="start-btn" onClick={handleStart}>
          Start the Test
        </button>
        <p className="start-disclaimer">No sign-up required</p>
      </div>
    </div>
  );
}
