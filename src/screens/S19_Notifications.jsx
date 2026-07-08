import { Bell } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

const notifications = [
  {
    id: 1,
    title: '안부콜 예약 알림',
    body: '오늘 오후 2시 안부콜이 예정되어 있어요.',
    time: '오후 1:30',
    unread: true,
  },
  {
    id: 2,
    title: '상담 예약 확정',
    body: '7월 10일 오전 10시 상담이 확정되었습니다.',
    time: '오전 10:15',
    unread: true,
  },
  {
    id: 3,
    title: '공지사항',
    body: '서비스 점검 안내 (7/12 새벽 2~4시)',
    time: '어제',
    unread: false,
  },
];

export default function S19_Notifications({ navigate }) {
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S13')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em', flex: 1 }}>알림 수신내역</span>
          {unreadCount > 0 && (
            <span style={{ background: '#dc2626', color: '#fff', fontSize: 15, fontWeight: 800, padding: '4px 12px', borderRadius: 999 }}>
              {unreadCount}개 안읽음
            </span>
          )}
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ height: 44, paddingInline: 20, borderRadius: 999, background: '#1a5fa8', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: 17, fontWeight: 700, color: '#fff' }}>전체</span>
          </div>
          <div style={{ height: 44, paddingInline: 20, borderRadius: 999, background: '#fff', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <span style={{ fontSize: 17, fontWeight: 600, color: '#374151' }}>안읽음</span>
            <span style={{ background: '#dc2626', color: '#fff', fontSize: 13, fontWeight: 800, padding: '2px 8px', borderRadius: 999 }}>{unreadCount}</span>
          </div>
        </div>

        {/* Notification list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
          {notifications.map(({ id, title, body, time, unread }) => (
            <div
              key={id}
              style={{
                background: '#fff',
                border: `1.5px solid ${unread ? '#cfe2f5' : '#e5e7eb'}`,
                borderRadius: 18,
                padding: '20px 22px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
                cursor: 'pointer',
              }}
            >
              <div style={{ position: 'relative', flex: 'none' }}>
                <div style={{ width: 46, height: 46, borderRadius: 14, background: unread ? '#e8f1fa' : '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bell size={22} color={unread ? '#1a5fa8' : '#9ca3af'} />
                </div>
                {unread && (
                  <div style={{ position: 'absolute', top: -4, right: -4, width: 12, height: 12, borderRadius: 999, background: '#dc2626', border: '2px solid #fff' }} />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontSize: 18, fontWeight: unread ? 800 : 600, color: unread ? '#1f2937' : '#6b7280' }}>{title}</span>
                  <span style={{ fontSize: 14, color: '#9ca3af', fontWeight: 500 }}>{time}</span>
                </div>
                <div style={{ fontSize: 16, color: unread ? '#374151' : '#9ca3af', fontWeight: 500, lineHeight: 1.5 }}>{body}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', fontSize: 15, color: '#9ca3af', fontWeight: 500 }}>
          최근 30일 알림만 표시됩니다
        </div>
      </div>
    </div>
  );
}
