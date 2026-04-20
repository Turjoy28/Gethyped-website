export default function BrandCard({ logo, altText }) {
  return (
    <div>
      <img src={logo} alt={altText} />
    </div>
  );
}
