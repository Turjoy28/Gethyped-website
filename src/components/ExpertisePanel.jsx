export default function ExpertisePanel({ number, title, desc, bgColor, video }) {
  return (
    <div style={{ backgroundColor: bgColor }}>
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
      <video src={video} />
    </div>
  );
}
