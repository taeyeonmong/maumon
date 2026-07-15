import { Bell } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

const notifications = [
  {
    id: 1,
    title: '외출에서 돌아오셨네요 🌤️',
    body: '방금 외출 다녀오셨나요? 날씨가 많이 덥죠? 잠깐 대화 나눠볼까요?',
    time: '오후 2:30',
    unread: true,
  },
  {
    id: 2,
    title: '좋은 아침이에요 ☀️',
    body: '일어나셨나요? 오늘도 힘찬 하루 될 수 있도록 이야기 나눠봐요!',
    time: '오전 7:10',
    unread: true,
  },
  {
    id: 3,
    title: '상담 신청이 접수되었어요',
    body: '마음온 상담사가 곧 휴대폰으로 연락드려 일정을 잡아드릴 예정이에요.',
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
