import { useEffect, useRef } from 'react';
import { Bot, Siren, Play } from 'lucide-react';
import StatusBar from '../components/StatusBar';

export default function S02_CallEntry({ navigate, active }) {
  const barRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const bar = barRef.current;
    if (bar) {
      bar.className = '';
      void bar.offsetWidth;
      bar.className = 's02-counting';
    }
    timerRef.current = setTimeout(() => navigate('S03'), 3000);
    return () => clearTimeout(timerRef.current);
  }, [active]);

  return (
    <div className="mo-screen" style={{ background: '#14467a', border: '1px solid #0e3157' }}>
      <button
        className="mo-sos"
        onClick={() => navigate('S08')}
        style={{ background: '#fff', color: '#dc2626', boxShadow: '0 3px 8px rgba(0,0,0,.25)' }}
      >
        <Siren size={22} color="#dc2626" />SOS
      </button>
      <StatusBar dark time="9:53" />
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: 40, gap: 36, textAlign: 'center',
      }}>
        <div style={{ position: 'relative', width: 240, height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{
            position: 'absolute', inset: 0, borderRadius: 999,
            border: '4px solid rgba(255,255,255,.5)',
            animation: 'mo-pulse 1.8s ease-out infinite',
          }} />
          <span style={{
            position: 'absolute', inset: 0, borderRadius: 999,
            border: '4px solid rgba(255,255,255,.5)',
            animation: 'mo-pulse 1.8s ease-out infinite',
            animationDelay: '.9s',
          }} />
          <span style={{
            width: 200, height: 200, borderRadius: 999, background: '#2f6cae',
            border: '3px solid rgba(255,255,255,.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Bot size={96} color="#fff" />
          </span>
        </div>
        <div style={{ fontSize: 38, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.3 }}>
          홍길동님,<br />점심 안부 드릴게요
        </div>
        <div style={{ width: 420 }}>
          <div style={{ fontSize: 18, color: 'rgba(255,255,255,.85)', marginBottom: 12, fontWeight: 500 }}>
            3초 후 자동으로 시작해요
          </div>
          <div style={{ width: '100%', height: 14, borderRadius: 999, background: 'rgba(255,255,255,.25)', overflow: 'hidden' }}>
            <div ref={barRef} style={{ height: '100%', borderRadius: 999, background: '#fff', width: '100%' }} />
          </div>
        </div>
      </div>
      <div style={{ padding: '0 40px 56px' }}>
        <div
          onClick={() => navigate('S03')}
          style={{
            cursor: 'pointer', height: 76, borderRadius: 18,
            border: '2px solid rgba(255,255,255,.7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          }}
        >
          <Play size={26} color="#fff" />
          <span style={{ fontSize: 24, fontWeight: 700, color: '#fff' }}>바로 시작할게요</span>
        </div>
      </div>
    </div>
  );
}
