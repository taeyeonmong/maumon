import { Siren, UserRound, Phone } from 'lucide-react';
import StatusBar from '../components/StatusBar';

export default function S08b_Emergency4({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#7f1d1d', border: '1px solid #6b1515' }}>
      <StatusBar dark time="10:01" />
      <div style={{
        margin: '8px 32px 0', background: 'rgba(255,255,255,.15)',
        border: '1.5px solid rgba(255,255,255,.4)', borderRadius: 14, height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      }}>
        <Siren size={26} color="#fef2f2" />
        <span style={{ fontSize: 22, fontWeight: 800, color: '#fef2f2', letterSpacing: '-0.02em' }}>긴급 · Lv.4</span>
      </div>
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: '32px 40px', gap: 28, textAlign: 'center',
      }}>
        <div style={{ fontSize: 34, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.4 }}>
          빠른 시일 내에<br />방문하겠습니다
        </div>
        <div style={{ fontSize: 20, color: 'rgba(255,255,255,.8)', fontWeight: 500, lineHeight: 1.55, maxWidth: 500 }}>
          걱정하지 마세요. 담당 복지사 선생님이 곧 찾아뵙겠습니다.
        </div>
        <div style={{
          background: 'rgba(255,255,255,.12)', border: '1.5px solid rgba(255,255,255,.35)',
          borderRadius: 22, padding: '24px 28px', width: '100%', maxWidth: 520,
        }}>
          <div style={{ fontSize: 16, color: 'rgba(255,255,255,.7)', fontWeight: 600, marginBottom: 16 }}>담당 복지사</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{
              width: 64, height: 64, borderRadius: 999, background: 'rgba(255,255,255,.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none',
            }}>
              <UserRound size={36} color="#fff" />
            </span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>박정희 복지사</div>
              <div style={{ fontSize: 17, color: 'rgba(255,255,255,.8)', marginTop: 2 }}>행복복지관 담당</div>
            </div>
          </div>
          <div style={{
            height: 76, borderRadius: 16, background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14,
            marginTop: 20, boxShadow: '0 4px 12px rgba(0,0,0,.3)',
          }}>
            <Phone size={28} color="#7f1d1d" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 13, color: '#9ca3af', fontWeight: 600 }}>전화 연결</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: '#7f1d1d', letterSpacing: '0.01em' }}>02-1234-5678</div>
            </div>
          </div>
        </div>
        <span
          onClick={() => navigate('S01')}
          style={{ cursor: 'pointer', fontSize: 19, color: 'rgba(255,255,255,.7)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 4, marginTop: 8 }}
        >
          홈으로 돌아가기
        </span>
      </div>
    </div>
  );
}
