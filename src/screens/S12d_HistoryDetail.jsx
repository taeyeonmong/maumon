import { Smile, Utensils, MapPin, Activity, Volume2 } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

export default function S12d_HistoryDetail({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <BackBtn onClick={() => navigate('S12')} />
            <div>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#1f2937' }}>오늘 · 외출 후 안부</div>
              <div style={{ fontSize: 15, color: '#9ca3af', fontWeight: 600, marginTop: 2 }}>2026. 7. 14 · 14:30 · 8분 48초</div>
            </div>
          </div>
          <span style={{ width: 48, height: 48, borderRadius: 14, background: '#e8f1fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Smile size={28} color="#1a5fa8" />
          </span>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ background: '#e8f1fa', color: '#1a5fa8', fontSize: 14, fontWeight: 700, padding: '5px 14px', borderRadius: 999 }}>외출 복귀 트리거</span>
          <span style={{ background: '#f3f4f6', color: '#6b7280', fontSize: 14, fontWeight: 700, padding: '5px 14px', borderRadius: 999 }}>Lv.1 · 관찰</span>
        </div>

        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 20, padding: 24, flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#1f2937', paddingBottom: 14, borderBottom: '1px solid #f3f4f6' }}>대화 요약</div>
          <div style={{ fontSize: 21, color: '#374151', lineHeight: 1.65, fontWeight: 500 }}>
            병원에 다녀오셨고, 검진 결과가 괜찮아 마음이 놓인다고 하셨어요. 날이 더워 조금 지치셨지만 기분은 좋다고 하셨습니다. 저녁엔 팥죽을 드실 계획이라고 하셨어요.
          </div>

          <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: 16 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#6b7280', marginBottom: 12 }}>감정 분석</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {[
                { label: '긍정적 😊', bg: '#e8f1fa', color: '#1a5fa8' },
                { label: '안심 💛', bg: '#f0fdf4', color: '#2f9e6b' },
                { label: '더위에 지침 🥵', bg: '#fef9c3', color: '#b45309' },
              ].map(({ label, bg, color }) => (
                <span key={label} style={{ background: bg, color, fontSize: 15, fontWeight: 700, padding: '6px 14px', borderRadius: 999 }}>{label}</span>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: 16 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#6b7280', marginBottom: 12 }}>주요 언급</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: <MapPin size={18} color="#1a5fa8" />, text: '외출: 병원 검진' },
                { icon: <Activity size={18} color="#2f9e6b" />, text: '건강: 검진 결과 양호' },
                { icon: <Utensils size={18} color="#1a5fa8" />, text: '식사 예정: 저녁 팥죽' },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ flex: 'none', marginTop: 3 }}>{icon}</span>
                  <span style={{ fontSize: 18, color: '#374151', fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: 72, borderRadius: 18, background: '#e8f1fa', border: '1.5px solid #cfe2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, cursor: 'pointer' }}>
          <Volume2 size={26} color="#1a5fa8" />
          <span style={{ fontSize: 21, fontWeight: 800, color: '#1a5fa8' }}>음성으로 읽어주기</span>
        </div>
      </div>
    </div>
  );
}
