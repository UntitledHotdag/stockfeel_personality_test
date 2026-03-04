import { useEffect, useState } from 'react';
import ImageSlot from './ImageSlot';

interface Answer {
  label: string;
  score: number;
}

interface QuestionCardProps {
  questionNumber: number;
  question: string;
  answers: Answer[];
  image?: string;
  nextImage?: string;
  onAnswer: (score: number) => void;
}

export default function QuestionCard({
  questionNumber,
  question,
  answers,
  image,
  nextImage,
  onAnswer,
}: QuestionCardProps) {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setVisible(false);
    setSelected(null);
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, [questionNumber]);

  useEffect(() => {
    if (!nextImage) return;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = nextImage;
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, [nextImage]);

  function handleSelect(score: number, index: number) {
    if (selected !== null) return;
    setSelected(index);
    setTimeout(() => onAnswer(score), 380);
  }

  return (
    <div className={`question-card ${visible ? 'question-card--visible' : ''}`}>
      <p className="question-number">Question {questionNumber}</p>
      <ImageSlot src={image} alt={`Question ${questionNumber} illustration`} />
      <h2 className="question-text">{question}</h2>
      <div className="answers">
        {answers.map((answer, i) => (
          <button
            key={i}
            className={`answer-btn ${selected === i ? 'answer-btn--selected' : ''}`}
            onClick={() => handleSelect(answer.score, i)}
            disabled={selected !== null}
          >
            <span className="answer-indicator">{i === 0 ? 'A' : 'B'}</span>
            <span className="answer-label">{answer.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
