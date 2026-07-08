import { Bot, CalendarCheck, Sparkles, History, Plus, Megaphone, Bell, Settings, ChevronRight } from 'lucide-react';
import StatusBar from '../components/StatusBar';

export default function S01_Home({ navigate, fontMode, setFontMode }) {
  const sizes = { '보통': [16, 22, 28], '크게': [19, 27, 34], '아주 크게': [23, 33, 41] };
  const [s1, s2, s3] = sizes[fontMode] || sizes['보통'];

  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '28px 32px', gap: 22 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 30, fontWeight: 800, color: '#1a5fa8', letterSpacing: '-0.03em' }}>마음온</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {/* Font size control */}
            <span className="mo-fontseg">
              <span style={{ fontSize: 14, fontWeight: 600, color: '#6b7280', padding: '0 4px 0 6px' }}>글씨</span>
              {['보통', '크게', '아주 크게'].map((m, i) => (
                <button
                  key={m}
                  className={`mo-fontseg-btn${fontMode === m ? ' active' : ''}`}
                  onClick={() => setFontMode(m)}
                  style={{ fontSize: [16, 22, 28][i] }}
                >
                  가
                </button>
              ))}
            </span>
            <button className="mo-back" onClick={() => navigate('S19')}>
              <Bell size={26} color="#6b7280" />
            </button>
            <button className="mo-back" onClick={() => navigate('S13')}>
              <Settings size={26} color="#6b7280" />
            </button>
          </span>
        </div>

        {/* AI Call card */}
        <div
          onClick={() => navigate('S02')}
          style={{
            cursor: 'pointer', position: 'relative', background: '#fff',
            border: '1px solid #e5e7eb', borderRadius: 24, padding: 26,
            display: 'flex', alignItems: 'center', gap: 22,
            boxShadow: '0 4px 14px rgba(26,95,168,.07)',
          }}
        >
          <span style={{
            width: 84, height: 84, borderRadius: 999, background: '#e8f1fa',
            border: '2px solid #1a5fa8', display: 'flex', alignItems: 'center',
            justifyContent: 'center', flex: 'none',
          }}>
            <Bot size={46} color="#1a5fa8" />
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: s1, color: '#6b7280', fontWeight: 600 }}>AI 안부콜</div>
            <div style={{ fontSize: s2, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em', marginTop: 2 }}>
              다음 안부콜 <span style={{ color: '#1a5fa8' }}>12분</span> 후
            </div>
            <div style={{ fontSize: s1, color: '#6b7280', marginTop: 4 }}>오늘 대화 2번 · 점심 안부 예정</div>
          </div>
        </div>

        {/* Quick menu grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          {[
            { id: 'S09', icon: <CalendarCheck size={32} color="#1a5fa8" />, title: '상담 예약', sub: '예약 1건 · D-2' },
            { id: 'S11', icon: <Sparkles size={32} color="#1a5fa8" />, title: '오늘의 활동', sub: '추억 퀴즈 외 2개' },
            { id: 'S12', icon: <History size={32} color="#1a5fa8" />, title: '대화 기록', sub: '최근 7일' },
          ].map(({ id, icon, title, sub }) => (
            <div
              key={id}
              onClick={() => navigate(id)}
              style={{
                cursor: 'pointer', background: '#fff', border: '1px solid #e5e7eb',
                borderRadius: 20, height: 196, padding: 24,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                boxShadow: '0 3px 10px rgba(0,0,0,.04)',
              }}
            >
              <span style={{
                width: 60, height: 60, borderRadius: 16, background: '#e8f1fa',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {icon}
              </span>
              <div>
                <div style={{ fontSize: s2 - 4, fontWeight: 700, color: '#1f2937', letterSpacing: '-0.02em' }}>{title}</div>
                <div style={{ fontSize: s1, color: '#6b7280', marginTop: 2 }}>{sub}</div>
              </div>
            </div>
          ))}
          {/* Placeholder */}
          <div style={{
            background: '#f9fafb', border: '1.5px dashed #d1d5db', borderRadius: 20,
            height: 196, padding: 24, display: 'flex', flexDirection: 'column',
            justifyContent: 'space-between', opacity: .7,
          }}>
            <span style={{
              width: 60, height: 60, borderRadius: 16, background: '#f3f4f6',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Plus size={32} color="#9ca3af" />
            </span>
            <div>
              <div style={{ fontSize: s2 - 4, fontWeight: 700, color: '#9ca3af', letterSpacing: '-0.02em' }}>준비 중</div>
              <div style={{ fontSize: s1, color: '#d1d5db', marginTop: 2 }}>곧 추가될 기능</div>
            </div>
          </div>
        </div>

        {/* Notice banner */}
        <div
          onClick={() => navigate('S14l')}
          style={{
            cursor: 'pointer', marginTop: 'auto', background: '#e8f1fa',
            border: '1px solid #cfe2f5', borderRadius: 16, height: 64,
            padding: '0 22px', display: 'flex', alignItems: 'center', gap: 14,
          }}
        >
          <Megaphone size={24} color="#1a5fa8" />
          <span style={{ flex: 1, fontSize: s1, color: '#1f2937', fontWeight: 500 }}>
            경로당 무더위 쉼터 운영 안내 (6/20~)
          </span>
          <ChevronRight size={24} color="#6b7280" />
        </div>
      </div>
    </div>
  );
}
