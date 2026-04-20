export default function WorkCard({ image, title, brand, overlayColor }) {
  return (
    <div style={{ backgroundColor: overlayColor }}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{brand}</p>
    </div>
  );
}
