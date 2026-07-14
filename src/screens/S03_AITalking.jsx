import { Bot, PhoneCall, PhoneOff } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import WaveBar from '../components/WaveBar';

export default function S03_AITalking({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#eef1f5', border: '1px solid #cdd2d8' }}>
      <StatusBar time="9:54" />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 32px 0' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 20, fontWeight: 700, color: '#1f2937' }}>
          <PhoneCall size={24} color="#1a5fa8" />외출 후 안부콜
        </span>
        <span
          onClick={() => navigate('S01')}
          style={{
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
            background: '#fee2e2', border: '1.5px solid #dc2626', color: '#dc2626',
            fontWeight: 700, fontSize: 17, padding: '0 16px', height: 46, borderRadius: 12,
          }}
        >
          <PhoneOff size={20} color="#dc2626" />종료
        </span>
      </div>
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: '24px 40px', gap: 40,
      }}>
        <div style={{ position: 'relative', width: 260, height: 260, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{
            position: 'absolute', inset: 20, borderRadius: 999,
            border: '5px solid rgba(26,95,168,.5)',
            animation: 'mo-pulse 1.5s ease-out infinite',
          }} />
          <span style={{
            position: 'absolute', inset: 20, borderRadius: 999,
            border: '5px solid rgba(26,95,168,.5)',
            animation: 'mo-pulse 1.5s ease-out infinite',
            animationDelay: '.75s',
          }} />
          <span style={{
            width: 200, height: 200, borderRadius: 999, background: '#e8f1fa',
            border: '4px solid #1a5fa8', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Bot size={96} color="#1a5fa8" />
          </span>
          <span style={{
            position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)',
            background: '#1a5fa8', color: '#fff', fontSize: 15, fontWeight: 700,
            padding: '5px 14px', borderRadius: 999, whiteSpace: 'nowrap',
          }}>
            말하는 중
          </span>
        </div>
        <div style={{
          maxWidth: 560, background: '#fff', border: '1px solid #e5e7eb',
          borderRadius: 24, borderTopLeftRadius: 6,
          padding: '26px 30px', boxShadow: '0 4px 14px rgba(0,0,0,.07)',
        }}>
          <div style={{ fontSize: 30, fontWeight: 600, color: '#1f2937', lineHeight: 1.4, letterSpacing: '-0.02em' }}>
            더운데 다녀오시느라 고생하셨어요. 🌤️<br />어디 다녀오셨는지 궁금해요.
          </div>
        </div>
      </div>
      <div
        onClick={() => navigate('S04')}
        style={{ cursor: 'pointer', padding: '0 40px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}
      >
        <WaveBar color="#1a5fa8" count={6} />
        <span style={{ fontSize: 17, color: '#6b7280', fontWeight: 500 }}>
          마음온이 이야기하고 있어요 · 탭하여 계속
        </span>
      </div>
    </div>
  );
}
