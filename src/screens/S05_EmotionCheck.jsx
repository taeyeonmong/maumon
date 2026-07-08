import { Laugh, Smile, Meh, Frown, Mic } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import SosBtn from '../components/SosBtn';

const emotions = [
  { icon: <Laugh size={34} color="#1a5fa8" />, label: '매우 좋아요', bg: '#e8f1fa', target: 'S06', border: '1.5px solid #e5e7eb', color: '#1f2937', bold: false },
  { icon: <Smile size={34} color="#1a5fa8" />, label: '좋아요', bg: '#e8f1fa', target: 'S06', border: '1.5px solid #e5e7eb', color: '#1f2937', bold: false },
  { icon: <Meh size={34} color="#6b7280" />, label: '보통이에요', bg: '#f3f4f6', target: 'S06', border: '1.5px solid #e5e7eb', color: '#1f2937', bold: false },
  { icon: <Frown size={34} color="#dc2626" />, label: '힘들어요', bg: '#fde8e8', target: 'S07', border: '2.5px solid #dc2626', color: '#dc2626', bold: true },
];

export default function S05_EmotionCheck({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <SosBtn onClick={() => navigate('S08')} dark />
      <StatusBar time="9:58" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '44px 44px 56px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40, paddingRight: 120 }}>
          <div style={{ fontSize: 36, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.03em', lineHeight: 1.3 }}>
            오늘 기분이<br />어땠나요?
          </div>
          <div style={{ fontSize: 18, color: '#6b7280', marginTop: 12 }}>편하게 골라주세요</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, flex: 1, justifyContent: 'center' }}>
          {emotions.map(({ icon, label, bg, target, border, color, bold }) => (
            <div
              key={label}
              onClick={() => navigate(target)}
              style={{
                cursor: 'pointer', height: 84, borderRadius: 18, background: '#fff',
                border, display: 'flex', alignItems: 'center', gap: 20,
                padding: '0 28px', boxShadow: target === 'S07' ? '0 4px 12px rgba(220,38,38,.14)' : '0 3px 10px rgba(0,0,0,.04)',
              }}
            >
              <span style={{ width: 56, height: 56, borderRadius: 14, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {icon}
              </span>
              <span style={{ fontSize: 26, fontWeight: bold ? 800 : 700, color }}>{label}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 24, color: '#6b7280' }}>
          <Mic size={20} color="#6b7280" />
          <span style={{ fontSize: 17, fontWeight: 500 }}>"좋아요"라고 말로 답해도 돼요</span>
        </div>
      </div>
    </div>
  );
}
