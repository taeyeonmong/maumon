import { ChevronRight } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

const notices = [
  { tag: '긴급', tagBg: '#fde8e8', tagColor: '#dc2626', date: '2026. 6. 20', title: '경로당 무더위 쉼터 운영 안내', sub: '행복복지관 · 6/20~', unread: true },
  { tag: '안내', tagBg: '#e8f1fa', tagColor: '#1a5fa8', date: '2026. 6. 15', title: '7월 상담 일정 변경 안내', sub: '마음온 상담팀', unread: true },
  { tag: '안내', tagBg: '#f1f3f5', tagColor: '#9ca3af', date: '2026. 6. 1', title: '마음온 앱 v1.2 업데이트', sub: '마음온 운영팀', unread: false },
];

function SegmentControl({ activeTab, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 0, background: '#e5e7eb', borderRadius: 14, padding: 4 }}>
      {['공지사항', 'FAQ'].map(tab => (
        <div
          key={tab}
          onClick={() => onChange(tab)}
          style={{
            flex: 1, height: 52, borderRadius: 10, cursor: 'pointer',
            background: activeTab === tab ? '#fff' : 'transparent',
            boxShadow: activeTab === tab ? '0 1px 4px rgba(0,0,0,.08)' : 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: 19, fontWeight: activeTab === tab ? 800 : 600, color: activeTab === tab ? '#1f2937' : '#9ca3af' }}>
            {tab}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function S14l_NoticeList({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S01')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>공지사항</span>
        </div>

        <SegmentControl activeTab="공지사항" onChange={t => t === 'FAQ' && navigate('S14f')} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {notices.map(({ tag, tagBg, tagColor, date, title, sub, unread }) => (
            <div
              key={title}
              onClick={() => navigate('S14')}
              style={{
                cursor: 'pointer', background: '#fff', border: '1px solid #e5e7eb',
                borderRadius: 18, padding: '20px 22px',
                display: 'flex', alignItems: 'center', gap: 14,
                boxShadow: unread ? '0 3px 10px rgba(0,0,0,.04)' : 'none',
                opacity: unread ? 1 : .7,
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: 999, background: unread ? '#1a5fa8' : '#e5e7eb', flex: 'none' }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span style={{ background: tagBg, color: tagColor, fontSize: 13, fontWeight: 800, padding: '3px 10px', borderRadius: 999 }}>{tag}</span>
                  <span style={{ fontSize: 14, color: '#9ca3af', fontWeight: 600 }}>{date}</span>
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#1f2937' }}>{title}</div>
                <div style={{ fontSize: 15, color: '#6b7280', marginTop: 4, fontWeight: 500 }}>{sub}</div>
              </div>
              <ChevronRight size={22} color="#d1d5db" style={{ flex: 'none' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
