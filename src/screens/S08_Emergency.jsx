import { TriangleAlert, UserRound, CheckCheck, CalendarPlus } from 'lucide-react';
import StatusBar from '../components/StatusBar';

export default function S08_Emergency({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#dc2626', border: '1px solid #b91c1c' }}>
      <StatusBar dark time="10:01" />
      <div style={{
        margin: '8px 32px 0', background: 'rgba(255,255,255,.18)',
        border: '1.5px solid rgba(255,255,255,.5)', borderRadius: 14, height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      }}>
        <TriangleAlert size={26} color="#fff" />
        <span style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>위기 감지 · Lv.3</span>
      </div>
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: '32px 40px', gap: 28, textAlign: 'center',
      }}>
        <div style={{ position: 'relative', width: 180, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{
            position: 'absolute', inset: 0, borderRadius: 999,
            border: '5px solid rgba(255,255,255,.5)',
            animation: 'mo-pulse 1.5s ease-out infinite',
          }} />
          <span style={{
            width: 140, height: 140, borderRadius: 999, background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <UserRound size={72} color="#dc2626" />
          </span>
        </div>
        <div style={{ fontSize: 32, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.4 }}>
          걱정이 되어<br />선생님께 연락 드릴게요
        </div>
        <div style={{
          background: 'rgba(255,255,255,.18)', border: '1.5px solid rgba(255,255,255,.45)',
          borderRadius: 18, padding: '18px 24px',
          display: 'flex', alignItems: 'center', gap: 12, width: '100%', maxWidth: 520,
        }}>
          <CheckCheck size={26} color="#fff" style={{ flex: 'none' }} />
          <span style={{ fontSize: 19, fontWeight: 600, color: '#fff', textAlign: 'left' }}>
            담당 선생님께 알림을 보냈습니다
          </span>
        </div>
        <div style={{ width: '100%', maxWidth: 520, display: 'flex', flexDirection: 'column', gap: 16, marginTop: 4 }}>
          <div
            onClick={() => navigate('S09n')}
            style={{
              cursor: 'pointer', height: 84, borderRadius: 18, background: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
              boxShadow: '0 6px 16px rgba(0,0,0,.2)',
            }}
          >
            <CalendarPlus size={30} color="#dc2626" />
            <span style={{ fontSize: 25, fontWeight: 800, color: '#dc2626' }}>방문 상담 예약하기</span>
          </div>
          <span
            onClick={() => navigate('S01')}
            style={{ cursor: 'pointer', fontSize: 19, color: 'rgba(255,255,255,.85)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 4, display: 'block', padding: '10px 0' }}
          >
            건너뛰기
          </span>
          <span
            onClick={() => navigate('S08b')}
            style={{ cursor: 'pointer', fontSize: 15, color: 'rgba(255,255,255,.5)', fontWeight: 600, display: 'block', padding: '6px 0', textDecoration: 'underline', textUnderlineOffset: 3 }}
          >
            데모: Lv.4 화면 확인 →
          </span>
        </div>
      </div>
    </div>
  );
}
