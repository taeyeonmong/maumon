import { Smile, Meh, Frown, ChevronLeft, ChevronRight } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

// 감정 기록: 안부콜을 한 날의 감정이 달력에 남는다.
// 하루에 안부콜이 여러 번일 수 있어 → 달력엔 그날의 '대표 감정'만 얼굴로 보여주고,
// 날짜를 누르면 그날의 안부콜 목록(각각의 감정)이 아래에 펼쳐진다.
const MOODS = {
  good: { face: Smile, color: '#1a5fa8', bg: '#e8f1fa', label: '좋음' },
  soso: { face: Meh, color: '#6b7280', bg: '#f3f4f6', label: '보통' },
  hard: { face: Frown, color: '#dc2626', bg: '#fde8e8', label: '힘듦' },
};

// day → 그날의 안부콜들 (시간순). 대표 감정은 가장 자주 나온 감정.
const records = {
  1: [{ time: '오전 8:40', mood: 'good', trigger: '기상', summary: '잘 주무셨다고 하셨어요.' }],
  2: [{ time: '오후 12:10', mood: 'soso', trigger: '식사', summary: '입맛이 없다고 하셨어요.' }],
  4: [
    { time: '오전 8:30', mood: 'good', trigger: '기상', summary: '개운하게 일어나셨어요.' },
    { time: '오후 6:20', mood: 'good', trigger: '외출 복귀', summary: '경로당 다녀오셨대요.' },
  ],
  5: [{ time: '오후 9:10', mood: 'hard', trigger: '취침 전', summary: '무릎이 아프다고 하셨어요.' }],
  8: [{ time: '오후 12:30', mood: 'soso', trigger: '식사', summary: '점심 혼자 드셨대요.' }],
  10: [{ time: '오전 8:20', mood: 'good', trigger: '기상', summary: '기분 좋게 시작하셨어요.' }],
  11: [{ time: '오후 3:00', mood: 'hard', trigger: '외출 복귀', summary: '더위에 지치셨다고 해요.' }],
  13: [{ time: '오후 7:40', mood: 'good', trigger: '외출 복귀', summary: '손주가 다녀갔대요.' }],
  14: [
    { time: '오전 7:10', mood: 'good', trigger: '기상', summary: '오늘도 힘차게 시작하셨어요.' },
    { time: '오후 2:30', mood: 'good', trigger: '외출 복귀', summary: '병원 잘 다녀오셨대요.' },
    { time: '오후 8:00', mood: 'soso', trigger: '취침 전', summary: '조금 피곤하다고 하셨어요.' },
  ],
};

function dominant(calls) {
  const cnt = {};
  calls.forEach(c => { cnt[c.mood] = (cnt[c.mood] || 0) + 1; });
  return Object.keys(cnt).sort((a, b) => cnt[b] - cnt[a])[0];
}

const WEEK = ['일', '월', '화', '수', '목', '금', '토'];
const FIRST_OFFSET = 3; // 2026-07-01 = 수요일
const DAYS = 31;
const TODAY = 14;

export default function S12_History({ navigate }) {
  const selected = TODAY;
  const cells = [...Array(FIRST_OFFSET).fill(null), ...Array.from({ length: DAYS }, (_, i) => i + 1)];
  const selCalls = records[selected] || [];

  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 28px 28px', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S01')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>감정 기록</span>
        </div>

        {/* 범례 */}
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          {Object.values(MOODS).map(({ face: Face, color, bg, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 30, height: 30, borderRadius: 999, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Face size={19} color={color} />
              </span>
              <span style={{ fontSize: 16, color: '#6b7280', fontWeight: 700 }}>{label}</span>
            </div>
          ))}
        </div>

        {/* 달력 */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 20, padding: '18px 18px 10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginBottom: 14 }}>
            <ChevronLeft size={26} color="#9ca3af" />
            <span style={{ fontSize: 22, fontWeight: 800, color: '#1f2937' }}>2026년 7월</span>
            <ChevronRight size={26} color="#9ca3af" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', marginBottom: 6 }}>
            {WEEK.map((d, i) => (
              <div key={d} style={{ textAlign: 'center', fontSize: 15, fontWeight: 700, color: i === 0 ? '#dc2626' : i === 6 ? '#1a5fa8' : '#9ca3af' }}>{d}</div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 4 }}>
            {cells.map((day, idx) => {
              if (day === null) return <div key={`e${idx}`} />;
              const calls = records[day];
              const isSel = day === selected;
              const mood = calls ? MOODS[dominant(calls)] : null;
              const Face = mood?.face;
              return (
                <div
                  key={day}
                  style={{
                    height: 74, borderRadius: 14, position: 'relative',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, paddingTop: 6,
                    background: isSel ? '#eef4fb' : 'transparent',
                    border: isSel ? '2px solid #1a5fa8' : '2px solid transparent',
                    cursor: calls ? 'pointer' : 'default',
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: isSel ? 800 : 600, color: isSel ? '#1a5fa8' : '#9ca3af' }}>{day}</span>
                  {mood && (
                    <span style={{ position: 'relative', width: 38, height: 38, borderRadius: 999, background: mood.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Face size={24} color={mood.color} />
                      {calls.length > 1 && (
                        <span style={{ position: 'absolute', top: -5, right: -5, minWidth: 20, height: 20, padding: '0 5px', borderRadius: 999, background: '#1f2937', color: '#fff', fontSize: 12, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid #fff' }}>
                          {calls.length}
                        </span>
                      )}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 선택한 날의 안부콜 목록 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ fontSize: 21, fontWeight: 800, color: '#1f2937' }}>7월 14일 (화) · 오늘</span>
            <span style={{ fontSize: 16, color: '#6b7280', fontWeight: 600 }}>안부콜 {selCalls.length}번</span>
          </div>

          {selCalls.map((c, i) => {
            const m = MOODS[c.mood];
            const Face = m.face;
            return (
              <div
                key={i}
                onClick={() => navigate('S12d')}
                style={{ cursor: 'pointer', background: '#fff', border: '1px solid #e5e7eb', borderRadius: 18, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16 }}
              >
                <span style={{ width: 52, height: 52, borderRadius: 14, background: m.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <Face size={30} color={m.color} />
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 18, fontWeight: 800, color: '#1f2937' }}>{c.time}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#1a5fa8', background: '#e8f1fa', padding: '3px 10px', borderRadius: 999 }}>{c.trigger}</span>
                  </div>
                  <div style={{ fontSize: 17, color: '#374151', fontWeight: 500, marginTop: 3 }}>{c.summary}</div>
                </div>
                <ChevronRight size={22} color="#d1d5db" style={{ flex: 'none' }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
