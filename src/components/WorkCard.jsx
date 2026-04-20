const ArrowUpRightIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
  >
    <path
      d="M6 14L14 6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 6H14V12.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WorkCard = ({ title, brand, video, colorClass, cardClass = '' }) => {
  return (
    <article className={`work-card ${cardClass}`}>
      <a href="#work" className="work-card__link" aria-label={title} />
      <div className={`work-card__media ${colorClass}`}>
        <video
          className="h-full w-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className={`work-card__caption ${colorClass}`}>
        <p className="work-card__title">{title}</p>
        <span className="work-card__brand">{brand}</span>
      </div>
      <span className="work-card__arrow" aria-hidden="true">
        <ArrowUpRightIcon />
      </span>
    </article>
  );
};

export default WorkCard;
