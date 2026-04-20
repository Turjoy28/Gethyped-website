export default function VideoStatCard({ stat, label, video, color }) {
  return (
    <div style={{ borderColor: color }}>
      <video src={video} />
      <p>{stat}</p>
      <p>{label}</p>
    </div>
  );
}
