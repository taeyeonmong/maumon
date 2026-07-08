import { useEffect, useRef } from 'react';
import { Check, AlarmClock, Home } from 'lucide-react';
import StatusBar from '../components/StatusBar';

export default function S06_Complete({ navigate, active }) {
  const timerRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    timerRef.current = setTimeout(() => navigate('S01'), 5000);
    return () => clearTimeout(timerRef.current);
  }, [active]);

  return (
    <div className="mo-screen" style={{ background: '#e3f4ec', border: '1px solid #bfe3d0' }}>
      <StatusBar time="10:01" />
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: 40, gap: 30, textAlign: 'center',
      }}>
        <span style={{
          width: 160, height: 160, borderRadius: 999, background: '#2f9e6b',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(47,158,107,.35)',
        }}>
          <Check size={96} color="#fff" />
        </span>
        <div style={{ fontSize: 38, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.03em', lineHeight: 1.3 }}>
          수고하셨어요,<br />홍길동님!
        </div>
        <div style={{
          width: 480, background: '#fff', border: '1px solid #cfe7da',
          borderRadius: 24, padding: 26,
          display: 'flex', alignItems: 'center', gap: 20,
          boxShadow: '0 4px 14px rgba(0,0,0,.06)',
        }}>
          <span style={{
            width: 64, height: 64, borderRadius: 16, background: '#e8f1fa',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none',
          }}>
            <AlarmClock size={34} color="#1a5fa8" />
          </span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 17, color: '#6b7280', fontWeight: 600 }}>다음 안부콜</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>오후 4시 · 외출 안부</div>
          </div>
        </div>
      </div>
      <div style={{ padding: '0 44px 56px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <span style={{ fontSize: 17, color: '#6b7280', fontWeight: 500 }}>5초 후 자동으로 홈으로 돌아가요</span>
        <div
          onClick={() => navigate('S01')}
          className="mo-btn-primary"
          style={{ height: 80, fontSize: 26 }}
        >
          <Home size={30} color="#fff" />홈으로
        </div>
      </div>
    </div>
  );
}
