import { UserRound, User, Cake, VenusAndMars, Phone, UserCheck, Info } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

const fields = [
  { icon: <User size={22} color="#6b7280" />, label: '이름', value: '홍길동' },
  { icon: <Cake size={22} color="#6b7280" />, label: '생년월일', value: '1950. 03. 15' },
  { icon: <Phone size={22} color="#6b7280" />, label: '성별', value: '남성' },
  { icon: <Phone size={22} color="#6b7280" />, label: '휴대폰', value: '010-1234-5678' },
  { icon: <UserCheck size={22} color="#6b7280" />, label: '아이디', value: 'hong1950' },
];

export default function S13i_MyInfo({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S13')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>내 정보</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, padding: '20px 0' }}>
          <span style={{ width: 96, height: 96, borderRadius: 999, background: '#e8f1fa', border: '3px solid #1a5fa8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <UserRound size={52} color="#1a5fa8" />
          </span>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1f2937' }}>홍길동</div>
            <div style={{ fontSize: 16, color: '#6b7280', marginTop: 4 }}>행복복지관 담당 · 박정희 복지사</div>
          </div>
        </div>

        <div className="mo-card">
          {fields.map(({ icon, label, value }, i) => (
            <div
              key={label}
              style={{
                padding: '20px 24px',
                display: 'flex', alignItems: 'center', gap: 14,
                borderBottom: i < fields.length - 1 ? '1px solid #f3f4f6' : 'none',
              }}
            >
              <span style={{ flex: 'none' }}>{icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, color: '#9ca3af', fontWeight: 600 }}>{label}</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#1f2937', marginTop: 2 }}>{value}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: '#e8f1fa', border: '1px solid #cfe2f5', borderRadius: 16, padding: '16px 20px', display: 'flex', gap: 10 }}>
          <Info size={18} color="#1a5fa8" style={{ flex: 'none', marginTop: 2 }} />
          <span style={{ fontSize: 16, color: '#1a5fa8', fontWeight: 500, lineHeight: 1.55 }}>
            정보 수정이 필요하시면 담당 복지사 선생님께 말씀해 주세요.
          </span>
        </div>

        <div
          onClick={() => navigate('S13')}
          style={{ cursor: 'pointer', marginTop: 'auto', height: 80, borderRadius: 18, background: '#fff', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <span style={{ fontSize: 22, fontWeight: 700, color: '#6b7280' }}>돌아가기</span>
        </div>
      </div>
    </div>
  );
}
