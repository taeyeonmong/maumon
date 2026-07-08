import { HeartHandshake, Phone } from 'lucide-react';
import StatusBar from '../components/StatusBar';

export default function S16_Login({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 44px 48px', gap: 0 }}>
        <div style={{ textAlign: 'center', marginTop: 32, marginBottom: 40 }}>
          <div style={{ width: 100, height: 100, borderRadius: 28, background: '#1a5fa8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <HeartHandshake size={58} color="#fff" />
          </div>
          <div style={{ fontSize: 42, fontWeight: 800, color: '#1a5fa8', letterSpacing: '-0.03em' }}>마음온</div>
          <div style={{ fontSize: 18, color: '#6b7280', marginTop: 8, fontWeight: 500 }}>시니어 안부 대화 서비스</div>
        </div>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 19, fontWeight: 700, color: '#374151' }}>아이디</div>
            <div style={{ height: 68, borderRadius: 16, background: '#fff', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', padding: '0 22px', fontSize: 21, color: '#9ca3af' }}>
              아이디를 입력하세요
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 19, fontWeight: 700, color: '#374151' }}>비밀번호</div>
            <div style={{ height: 68, borderRadius: 16, background: '#fff', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', padding: '0 22px', fontSize: 21, color: '#9ca3af' }}>
              비밀번호를 입력하세요
            </div>
          </div>
          <div style={{ height: 56, borderRadius: 14, background: '#fff', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', padding: '0 22px', gap: 14 }}>
            <span style={{ flex: 1, fontSize: 19, fontWeight: 600, color: '#1f2937' }}>자동 로그인</span>
            <span className="mo-toggle on" />
          </div>
        </div>

        <div
          onClick={() => navigate('S01')}
          className="mo-btn-primary"
          style={{ marginTop: 32, height: 84, fontSize: 27 }}
        >
          로그인
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 24 }}>
          <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
          <span style={{ fontSize: 15, color: '#9ca3af', fontWeight: 600 }}>또는</span>
          <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
        </div>

        <div
          onClick={() => navigate('S17')}
          style={{ cursor: 'pointer', width: '100%', height: 76, borderRadius: 18, background: '#fff', border: '1.5px solid #1a5fa8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}
        >
          <span style={{ fontSize: 23, fontWeight: 700, color: '#1a5fa8' }}>회원가입</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto', paddingTop: 24 }}>
          <Phone size={20} color="#6b7280" />
          <span style={{ fontSize: 17, color: '#6b7280', fontWeight: 500 }}>도움이 필요하면 <b style={{ color: '#1f2937' }}>1588-0000</b></span>
        </div>
      </div>
    </div>
  );
}
