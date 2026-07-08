import { Images, Brain, Music, CloudSun, ChevronRight, Check } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

export default function S11_Activity({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S01')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>오늘의 활동</span>
        </div>

        <div style={{ background: '#1a5fa8', borderRadius: 24, padding: 28, boxShadow: '0 6px 18px rgba(26,95,168,.25)', display: 'flex', alignItems: 'center', gap: 22 }}>
          <span style={{ width: 90, height: 90, borderRadius: 20, background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <Images size={48} color="#fff" />
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, color: 'rgba(255,255,255,.85)', fontWeight: 700 }}>오늘의 추천</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginTop: 2 }}>옛날 사진으로<br />추억 나누기</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { icon: <Brain size={32} color="#1a5fa8" />, bg: '#e8f1fa', title: '추억 퀴즈', sub: '5분 · 인지 활동', done: false },
            { icon: <Music size={32} color="#1a5fa8" />, bg: '#e8f1fa', title: '옛 노래 듣기', sub: '회상 대화', done: false },
            { icon: <CloudSun size={32} color="#2f9e6b" />, bg: '#dcefe4', title: '오늘 날씨·생활정보', sub: '완료했어요', done: true },
          ].map(({ icon, bg, title, sub, done }) => (
            <div
              key={title}
              style={{
                cursor: done ? 'default' : 'pointer',
                background: done ? '#eef4ef' : '#fff',
                border: done ? '1px solid #cfe7da' : '1px solid #e5e7eb',
                borderRadius: 18, padding: '22px 24px',
                display: 'flex', alignItems: 'center', gap: 18,
              }}
            >
              <span style={{ width: 60, height: 60, borderRadius: 15, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                {icon}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 23, fontWeight: 700, color: '#1f2937' }}>{title}</div>
                <div style={{ fontSize: 16, color: done ? '#2f9e6b' : '#6b7280', marginTop: 2, fontWeight: done ? 600 : 400 }}>{sub}</div>
              </div>
              {done
                ? <span style={{ width: 40, height: 40, borderRadius: 999, background: '#2f9e6b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Check size={26} color="#fff" /></span>
                : <ChevronRight size={26} color="#9ca3af" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
