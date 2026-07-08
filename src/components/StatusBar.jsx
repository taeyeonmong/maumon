import { Wifi, BatteryFull, WifiOff } from 'lucide-react';

export default function StatusBar({ time = '9:41', dark = false, offline = false }) {
  const c = dark ? '#fff' : '#1f2937';
  return (
    <div className="mo-statusbar" style={{ color: c }}>
      <span>{time}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {offline
          ? <WifiOff size={18} color="#dc2626" />
          : <Wifi size={18} color={c} />}
        <BatteryFull size={22} color={c} />
      </span>
    </div>
  );
}
