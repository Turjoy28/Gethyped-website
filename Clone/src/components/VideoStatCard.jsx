const VideoStatCard = ({ stat, label, video, color, className = '' }) => {
  const isStatCard = Boolean(stat);
  const labelTitle = typeof label === 'object' && label !== null ? label.title : label;
  const labelCaption = typeof label === 'object' && label !== null ? label.caption : '';
  const toneClassNames = {
    blue: 'bg-card-blue',
    green: 'bg-card-green',
  };

  return (
    <article
      className={[
        'hero-card relative box-border overflow-hidden rounded-[clamp(0.75rem,2vw,2.35rem)] shadow-[0_20px_45px_rgba(17,17,17,0.08)]',
        isStatCard ? 'flex' : 'bg-card-tan',
        color ? toneClassNames[color] : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {isStatCard ? (
        <div className="hero-card__stat-content">
          <div className="hero-card__stat-value">
            {stat}
          </div>

          <div className="hero-card__stat-body">
            <h2 className="hero-card__stat-title">
              {labelTitle}
            </h2>
            <div className="hero-card__stat-divider"></div>
            {labelCaption ? (
              <p className="hero-card__stat-caption">
                {labelCaption}
              </p>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="hero-card__media">
          <video
            className="block h-full w-full object-cover"
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
          <div className="hero-card__video-scrim"></div>
          {typeof label === 'string' && label ? (
            <div className="hero-card__video-label">
              {label}
            </div>
          ) : null}
        </div>
      )}
    </article>
  );
};

export default VideoStatCard;
