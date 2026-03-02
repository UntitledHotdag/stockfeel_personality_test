import ImageSlot from './ImageSlot';

interface Article {
  title: string;
  url: string;
  ogImage?: string;
}

interface Brand {
  logo: string;
  intro: string;
  buttonText: string;
  buttonUrl: string;
}

interface ResultCardProps {
  color: string;
  title: string;
  subtitle: string;
  description: string;
  articles: Article[];
  image?: string;
  brand?: Brand;
  onRetake: () => void;
}

export default function ResultCard({
  color,
  title,
  subtitle,
  description,
  articles,
  image,
  brand,
  onRetake,
}: ResultCardProps) {
  return (
    <div className="result-page">
      <div className="result-hero" style={{ backgroundColor: color }}>
        <p className="result-hero__label">在大人的路上，你...</p>
        <h1 className="result-hero__title">{title}</h1>
        <p className="result-hero__subtitle">{subtitle}</p>
        <ImageSlot src={image} alt={`${title} illustration`} variant="result" />
      </div>

      <div className="result-body">
        <div className="result-description-card">
          <p className="result-description">{description}</p>
        </div>

        <div className="result-articles">
          <h3 className="result-articles__heading">延伸閱讀</h3>
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
                  {article.ogImage && (
                    <img
                      src={article.ogImage}
                      alt=""
                      className="article-link__og-image"
                    />
                  )}
                  <div className="article-link__footer">
                    <span className="article-link__text">{article.title}</span>
                    <span className="article-link__arrow" style={{ color }}>→</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {brand && (
          <div className="brand-section">
            <img src={brand.logo} alt="Brand logo" className="brand-section__logo" />
            <p className="brand-section__intro">{brand.intro}</p>
            <a
              href={brand.buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-section__btn"
              style={{ backgroundColor: color }}
            >
              {brand.buttonText}
            </a>
          </div>
        )}

        <button className="retake-btn" onClick={onRetake}>
          再測一次
        </button>
      </div>
    </div>
  );
}
