const ArrowRightIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="expertise-cta__icon-svg h-4 w-4"
  >
    <path
      d="M4.16699 10H15.8337"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.833 5L15.833 10L10.833 15"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExpertisePanel = ({
  theme = 'social',
  number,
  title,
  heading,
  desc,
  buttonText,
  video,
  href = '#expertises',
}) => {
  const isSocial = theme === 'social';
  const mediaClasses = [
    'expertise-media',
    isSocial ? 'expertise-media--accent' : 'expertise-media--outline',
    theme === 'activation' ? 'expertise-media--tilt' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const ctaClasses = [
    'expertise-cta',
    'pointer-events-auto',
    'mt-5',
    isSocial ? 'expertise-cta--orange' : 'expertise-cta--light',
  ].join(' ');

  return (
    <article className={`expertise-panel expertise-panel--${theme} relative`}>
      <div className="expertise-content text-ink">
        <a href={href} className="expertise-link" aria-label={buttonText} />

        <div className="relative z-[2] flex h-full min-h-0 flex-col justify-between pointer-events-none">
          <div className="expertise-panel__head relative shrink-0">
            <span className="expertise-tag">Expertise</span>

            <h3 className="expertise-title">{title}</h3>

            <span className="expertise-number" aria-hidden="true">
              {number}
            </span>
          </div>

          <div className="expertise-panel__body relative mt-4 flex min-h-0 flex-1 flex-row items-end justify-between gap-4 min-[640px]:mt-0 min-[640px]:gap-8">
            <div className="expertise-copy min-w-0 flex-1 max-w-[min(100%,22rem)] min-[640px]:max-w-[28rem] min-[80rem]:max-w-[36rem]">
              <p className="expertise-heading">{heading}</p>
              <p className="expertise-desc">{desc}</p>

              <button type="button" className={ctaClasses}>
                <span className="expertise-cta__label">{buttonText}</span>
                <span className="expertise-cta__icon" aria-hidden="true">
                  <ArrowRightIcon />
                </span>
              </button>
            </div>

            <div className="expertise-panel__media-wrap pointer-events-auto flex shrink-0 justify-end items-end">
              <div className={mediaClasses}>
                <video
                  className="h-full w-full object-cover"
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExpertisePanel;
