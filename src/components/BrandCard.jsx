const BrandCard = ({ logo, altText }) => {
  return (
    <article className="brand-card" aria-label={altText}>
      <img className="brand-card__logo" src={logo} alt={altText} loading="lazy" />
    </article>
  );
};

export default BrandCard;
