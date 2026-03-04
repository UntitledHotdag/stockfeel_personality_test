import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import Header from '../components/Header';
import questions from '../data/questions.json';

interface TestPageProps {
  currentIndex: number;
  onAnswer: (score: number) => void;
}

export default function TestPage({ currentIndex, onAnswer }: TestPageProps) {
  const question = questions[currentIndex];
  const nextQuestion = questions[currentIndex + 1];

  return (
    <div className="test-page">
      <Header />
      <div className="test-page__inner">
        <ProgressBar current={currentIndex + 1} total={questions.length} />
        <QuestionCard
          questionNumber={currentIndex + 1}
          question={question.question}
          answers={question.answers}
          image={question.image}
          nextImage={nextQuestion?.image}
          onAnswer={onAnswer}
        />
      </div>
    </div>
  );
}
