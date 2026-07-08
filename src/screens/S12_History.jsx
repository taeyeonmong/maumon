import { Smile, Meh, Volume2 } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

export default function S12_History({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S01')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>대화 기록</span>
        </div>

        {/* Today's record */}
        <div
          onClick={() => navigate('S12d')}
          style={{ cursor: 'pointer', background: '#fff', border: '1px solid #e5e7eb', borderRadius: 20, padding: 24 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: '#1f2937' }}>오늘 · 점심 안부</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#1a5fa8', background: '#e8f1fa', padding: '4px 10px', borderRadius: 999 }}>식사 트리거</span>
            </span>
            <span style={{ width: 40, height: 40, borderRadius: 12, background: '#e8f1fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Smile size={24} color="#1a5fa8" />
            </span>
          </div>
          <div style={{ fontSize: 21, color: '#374151', lineHeight: 1.5, marginTop: 14, fontWeight: 500 }}>
            점심으로 된장찌개를 드셨고, 기분이 좋다고 하셨어요.
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
            <span style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: '#eef1f5', border: '1px solid #e5e7eb',
              color: '#1f2937', fontSize: 17, fontWeight: 700,
              padding: '10px 18px', borderRadius: 999,
            }}>
              <Volume2 size={22} color="#1a5fa8" />음성으로 읽어주기
            </span>
          </div>
        </div>

        {/* Yesterday's record */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 20, padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 20, fontWeight: 800, color: '#1f2937' }}>어제 · 저녁 안부</span>
            <span style={{ width: 40, height: 40, borderRadius: 12, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Meh size={24} color="#6b7280" />
            </span>
          </div>
          <div style={{ fontSize: 21, color: '#374151', lineHeight: 1.5, marginTop: 14, fontWeight: 500 }}>
            잠을 잘 못 주무셨다고 하셨어요.
          </div>
        </div>
      </div>
    </div>
  );
}
