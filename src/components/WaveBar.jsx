export default function WaveBar({ color = '#1a5fa8', count = 6 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 72 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="mo-wave-bar"
          style={{
            background: color,
            animation: `mo-wave ${color === '#2f9e6b' ? '.9s' : '1s'} ease-in-out infinite`,
            animationDelay: `${i * (color === '#2f9e6b' ? 0.15 : 0.12)}s`,
          }}
        />
      ))}
    </div>
  );
}
