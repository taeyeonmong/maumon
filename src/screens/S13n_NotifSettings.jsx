import { Bot, CalendarCheck, Megaphone, Info } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

const settings = [
  { icon: <Bot size={24} color="#1a5fa8" />, label: '안부콜 10분 전 알림', sub: '안부콜 시작 10분 전 푸시 알림', on: true },
  { icon: <CalendarCheck size={24} color="#1a5fa8" />, label: '상담 예약 10분 전 알림', sub: '상담 시작 10분 전 푸시 알림', on: true },
  { icon: <Megaphone size={24} color="#1a5fa8" />, label: '공지사항 업데이트', sub: '새 공지사항 등록 시 알림', on: false },
];

export default function S13n_NotifSettings({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S13')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>알림 설정</span>
        </div>

        <div className="mo-card">
          {settings.map(({ icon, label, sub, on }, i) => (
            <div
              key={label}
              style={{
                padding: '24px 24px',
                display: 'flex', alignItems: 'center', gap: 14,
                borderBottom: i < settings.length - 1 ? '1px solid #f3f4f6' : 'none',
              }}
            >
              <span style={{ width: 44, height: 44, borderRadius: 12, background: '#e8f1fa', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                {icon}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#1f2937' }}>{label}</div>
                <div style={{ fontSize: 15, color: '#6b7280', marginTop: 2 }}>{sub}</div>
              </div>
              <span className={`mo-toggle ${on ? 'on' : 'off'}`} />
            </div>
          ))}
        </div>

        <div style={{ background: '#e8f1fa', border: '1px solid #cfe2f5', borderRadius: 16, padding: '18px 20px', display: 'flex', gap: 10 }}>
          <Info size={20} color="#1a5fa8" style={{ flex: 'none', marginTop: 2 }} />
          <span style={{ fontSize: 16, color: '#1a5fa8', fontWeight: 500, lineHeight: 1.55 }}>
            알림은 기기 설정에서도 관리할 수 있어요. 중요한 안부콜 알림은 꺼지지 않도록 해주세요.
          </span>
        </div>

        <div
          onClick={() => navigate('S13')}
          className="mo-btn-primary"
          style={{ marginTop: 'auto' }}
        >
          저장하기
        </div>
      </div>
    </div>
  );
}
