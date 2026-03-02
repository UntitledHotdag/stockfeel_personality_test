import ResultCard from '../components/ResultCard';
import results from '../data/results.json';

interface ResultPageProps {
  score: number;
  onRetake: () => void;
}

export default function ResultPage({ score, onRetake }: ResultPageProps) {
  const result = results.find(
    (r) => score >= r.scoreRange[0] && score <= r.scoreRange[1]
  ) ?? results[0];

  return (
    <ResultCard
      color={result.color}
      title={result.title}
      subtitle={result.subtitle}
      description={result.description}
      articles={result.articles}
      image={result.image}
      onRetake={onRetake}
    />
  );
}
