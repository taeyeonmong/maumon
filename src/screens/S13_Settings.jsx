import { UserRound, Bell, Volume2, Shield, UserX, LogOut, ChevronRight } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

const menuItems = [
  { icon: <UserRound size={24} color="#1a5fa8" />, label: '내 정보', target: 'S13i' },
  { icon: <Bell size={24} color="#1a5fa8" />, label: '알림 설정', target: 'S13n' },
  { icon: <Volume2 size={24} color="#1a5fa8" />, label: '음성 설정', target: 'S13v' },
  { icon: <Shield size={24} color="#1a5fa8" />, label: '개인정보처리방침', target: 'S20' },
];

export default function S13_Settings({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S01')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>설정</span>
        </div>

        {/* Main settings */}
        <div className="mo-card">
          {menuItems.map(({ icon, label, target }, i) => (
            <div
              key={label}
              onClick={() => navigate(target)}
              style={{
                cursor: 'pointer', height: 72, padding: '0 24px',
                display: 'flex', alignItems: 'center', gap: 16,
                borderBottom: i < menuItems.length - 1 ? '1px solid #f3f4f6' : 'none',
              }}
            >
              <span style={{ width: 44, height: 44, borderRadius: 12, background: '#e8f1fa', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                {icon}
              </span>
              <span style={{ fontSize: 20, fontWeight: 600, color: '#1f2937', flex: 1 }}>{label}</span>
              <ChevronRight size={22} color="#d1d5db" />
            </div>
          ))}
        </div>

        {/* Danger zone */}
        <div className="mo-card">
          <div style={{ cursor: 'pointer', height: 72, padding: '0 24px', display: 'flex', alignItems: 'center', gap: 16, borderBottom: '1px solid #f3f4f6' }}>
            <span style={{ width: 44, height: 44, borderRadius: 12, background: '#fde8e8', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
              <UserX size={24} color="#dc2626" />
            </span>
            <span style={{ fontSize: 20, fontWeight: 600, color: '#dc2626', flex: 1 }}>서비스 탈퇴</span>
            <ChevronRight size={22} color="#fca5a5" />
          </div>
          <div
            onClick={() => navigate('S16')}
            style={{ cursor: 'pointer', height: 72, padding: '0 24px', display: 'flex', alignItems: 'center', gap: 16 }}
          >
            <span style={{ width: 44, height: 44, borderRadius: 12, background: '#fde8e8', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
              <LogOut size={24} color="#dc2626" />
            </span>
            <span style={{ fontSize: 20, fontWeight: 600, color: '#dc2626', flex: 1 }}>로그아웃</span>
            <ChevronRight size={22} color="#fca5a5" />
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 'auto' }}>
          <span style={{ fontSize: 15, color: '#9ca3af', fontWeight: 500 }}>마음온 v1.0.0 · 이닛케어(주)</span>
        </div>
      </div>
    </div>
  );
}
