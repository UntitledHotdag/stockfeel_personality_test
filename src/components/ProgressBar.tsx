interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = (current / total) * 100;

  return (
    <div className="progress-wrapper">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
        />
      </div>
      <span className="progress-label">
        {current} / {total}
      </span>
    </div>
  );
}
