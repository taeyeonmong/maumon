import { Ear, PhoneCall, PhoneOff, Siren, Timer, Mic } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import WaveBar from '../components/WaveBar';

export default function S04_UserTalking({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#eef1f5', border: '1px solid #cdd2d8' }}>
      <StatusBar time="9:54" />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 32px 0' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 20, fontWeight: 700, color: '#1f2937' }}>
          <PhoneCall size={24} color="#1a5fa8" />점심 안부콜
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
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
          <span
            onClick={() => navigate('S08')}
            style={{
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
              background: '#dc2626', color: '#fff', fontWeight: 800, fontSize: 16,
              padding: '0 14px', height: 46, borderRadius: 999,
            }}
          >
            <Siren size={20} color="#fff" />SOS
          </span>
        </span>
      </div>
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: '24px 40px', gap: 40,
      }}>
        <div style={{ position: 'relative', width: 260, height: 260, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{
            width: 200, height: 200, borderRadius: 999, background: '#eef4ef',
            border: '4px dashed #2f9e6b',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Ear size={90} color="#2f9e6b" />
          </span>
          <span style={{
            position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)',
            background: '#2f9e6b', color: '#fff', fontSize: 15, fontWeight: 700,
            padding: '5px 14px', borderRadius: 999, whiteSpace: 'nowrap',
          }}>
            듣는 중
          </span>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          background: '#fff', border: '1px solid #e5e7eb',
          borderRadius: 999, padding: '12px 22px',
          boxShadow: '0 3px 10px rgba(0,0,0,.05)',
        }}>
          <Timer size={24} color="#6b7280" />
          <span style={{ fontSize: 18, color: '#374151', fontWeight: 500 }}>
            편하게 말씀하세요 · 응답 대기 <b style={{ color: '#1a5fa8' }}>28초</b>
          </span>
        </div>
      </div>
      <div style={{ padding: '0 40px 56px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <WaveBar color="#2f9e6b" count={4} />
        <span
          onClick={() => navigate('S05')}
          style={{
            cursor: 'pointer', width: 84, height: 84, borderRadius: 999,
            background: '#2f9e6b', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(47,158,107,.4)',
          }}
        >
          <Mic size={40} color="#fff" />
        </span>
      </div>
    </div>
  );
}
