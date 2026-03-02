import ImageSlot from './ImageSlot';

interface Article {
  title: string;
  url: string;
}

interface ResultCardProps {
  color: string;
  title: string;
  subtitle: string;
  description: string;
  articles: Article[];
  image?: string;
  onRetake: () => void;
}

export default function ResultCard({
  color,
  title,
  subtitle,
  description,
  articles,
  image,
  onRetake,
}: ResultCardProps) {
  return (
    <div className="result-page">
      <div className="result-hero" style={{ backgroundColor: color }}>
        <p className="result-hero__label">Your Investor Type</p>
        <h1 className="result-hero__title">{title}</h1>
        <p className="result-hero__subtitle">{subtitle}</p>
        <ImageSlot src={image} alt={`${title} illustration`} variant="result" />
      </div>

      <div className="result-body">
        <div className="result-description-card">
          <p className="result-description">{description}</p>
        </div>

        <div className="result-articles">
          <h3 className="result-articles__heading">Recommended Reading</h3>
          <ul className="article-list">
            {articles.map((article, i) => (
              <li key={i} className="article-item">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-link"
                  style={{ borderColor: color }}
                >
                  <span className="article-link__text">{article.title}</span>
                  <span className="article-link__arrow" style={{ color }}>→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button className="retake-btn" onClick={onRetake}>
          Take the test again
        </button>
      </div>
    </div>
  );
}
