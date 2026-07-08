import { Siren } from 'lucide-react';

export default function SosBtn({ onClick, dark = false }) {
  if (dark) {
    return (
      <button
        className="mo-sos"
        onClick={onClick}
        style={{ background: '#dc2626', color: '#fff', boxShadow: '0 3px 8px rgba(220,38,38,.35)' }}
      >
        <Siren size={22} color="#fff" />SOS
      </button>
    );
  }
  return (
    <button
      className="mo-sos"
      onClick={onClick}
      style={{ background: '#fff', color: '#dc2626', boxShadow: '0 3px 8px rgba(0,0,0,.25)' }}
    >
      <Siren size={22} color="#dc2626" />SOS
    </button>
  );
}
