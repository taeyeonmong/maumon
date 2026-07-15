import { Bot, CalendarCheck, Sparkles, CalendarHeart, Megaphone, Bell, Settings, MessageCircle } from 'lucide-react';
import StatusBar from '../components/StatusBar';

export default function S01_Home({ navigate, fontMode, setFontMode }) {
  // 카드 크기는 고정, 글씨 크기만 모드에 따라 커진다.
  const sizes = { '보통': [16, 22, 28], '크게': [18, 25, 32], '아주 크게': [20, 28, 36] };
  const [s1, s2, s3] = sizes[fontMode] || sizes['보통'];

  const quick = [
    { id: 'S09', icon: <CalendarCheck size={30} color="#1a5fa8" />, title: '상담 신청' },
    { id: 'S11', icon: <Sparkles size={30} color="#1a5fa8" />, title: '오늘의 활동' },
    { id: 'S12', icon: <CalendarHeart size={30} color="#1a5fa8" />, title: '감정 기록' },
  ];

  return (
    <div className="mo-screen" style={{ height: 1024, background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', padding: '22px 28px 24px', gap: 18 }}>
        {/* Header */}
        <div style={{ flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 30, fontWeight: 800, color: '#1a5fa8', letterSpacing: '-0.03em' }}>마음온</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
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

        {/* 안부콜 히어로 카드 — 캐릭터 강조, 탭하면 바로 대화 연결 (확인 페이지 없이) */}
        <div
          onClick={() => navigate('S02')}
          style={{
            flex: 1, minHeight: 0, cursor: 'pointer', position: 'relative', overflow: 'hidden',
            background: 'linear-gradient(160deg, #1a5fa8 0%, #14467a 100%)',
            borderRadius: 28, padding: '28px 32px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
            boxShadow: '0 12px 30px rgba(26,95,168,.32)',
          }}
        >
          {/* 큰 캐릭터 */}
          <div style={{ position: 'relative', width: 230, height: 230, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <span style={{ position: 'absolute', inset: 0, borderRadius: 999, border: '4px solid rgba(255,255,255,.4)', animation: 'mo-pulse 1.8s ease-out infinite' }} />
            <span style={{ position: 'absolute', inset: 0, borderRadius: 999, border: '4px solid rgba(255,255,255,.4)', animation: 'mo-pulse 1.8s ease-out infinite', animationDelay: '.9s' }} />
            <span style={{
              width: 188, height: 188, borderRadius: 999, background: 'rgba(255,255,255,.16)',
              border: '3px solid rgba(255,255,255,.6)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Bot size={110} color="#fff" />
            </span>
          </div>

          {/* 문구 */}
          <div style={{ fontSize: s3, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.35, marginTop: 24 }}>
            홍길동님, 날씨가 많이 덥죠?<br />집에 돌아오셨으니 잠깐 대화 나눠요
          </div>

          {/* CTA */}
          <div style={{
            marginTop: 24, width: '100%', maxWidth: 560, height: 92, borderRadius: 20, background: '#fff', flex: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
            boxShadow: '0 6px 16px rgba(0,0,0,.15)',
          }}>
            <MessageCircle size={34} color="#1a5fa8" />
            <span style={{ fontSize: s2, fontWeight: 800, color: '#1a5fa8' }}>대화 시작하기</span>
          </div>
        </div>

        {/* 퀵메뉴 (한 줄 3개) */}
        <div style={{ flex: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
          {quick.map(({ id, icon, title }) => (
            <div
              key={id}
              onClick={() => navigate(id)}
              style={{
                cursor: 'pointer', background: '#fff', border: '1px solid #e5e7eb',
                borderRadius: 20, height: 160, padding: 20,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                boxShadow: '0 3px 10px rgba(0,0,0,.04)',
              }}
            >
              <span style={{ width: 60, height: 60, borderRadius: 16, background: '#e8f1fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {icon}
              </span>
              <div style={{ fontSize: s1 + 4, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>{title}</div>
            </div>
          ))}
        </div>

        {/* 공지 배너 */}
        <div
          onClick={() => navigate('S14l')}
          style={{
            flex: 'none', cursor: 'pointer', background: '#e8f1fa',
            border: '1px solid #cfe2f5', borderRadius: 16, height: 62,
            padding: '0 22px', display: 'flex', alignItems: 'center', gap: 14,
          }}
        >
          <Megaphone size={24} color="#1a5fa8" style={{ flex: 'none' }} />
          <span style={{ flex: 1, fontSize: s1, color: '#1f2937', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            경로당 무더위 쉼터 운영 안내 (6/20~)
          </span>
        </div>
      </div>
    </div>
  );
}
