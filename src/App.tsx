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
        <div className="start-badge">大人大考驗！</div>
        <h1 className="start-title">初級大人 你準備好升級了嗎？</h1>
        <p className="start-description">
          用最直覺的方式，回答10個問題，看看你是不是已經準備好成為高級大人了！
        </p>
        <div className="start-meta">
          <span>10個生活大哉問</span>
          <span className="start-meta__dot" />
          <span>測驗時間約2分鐘 </span>
        </div>
        <button className="start-btn" onClick={handleStart}>
          成為高級大人
        </button>
        <p className="start-disclaimer">高級大人是不會作弊的喔</p>
      </div>
    </div>
  );
}
