import { WifiOff, Phone } from 'lucide-react';
import StatusBar from '../components/StatusBar';

export default function S15_Offline({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#eef1f5', border: '1px solid #cdd2d8' }}>
      <StatusBar offline />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, gap: 34, textAlign: 'center' }}>
        <div style={{ width: 200, height: 200, borderRadius: 999, background: '#fff', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <WifiOff size={104} color="#9ca3af" />
        </div>
        <div style={{ fontSize: 38, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.03em', lineHeight: 1.35 }}>
          인터넷 연결이<br />끊겼어요
        </div>
        <div
          onClick={() => navigate('S01')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14 }}
        >
          <span style={{ width: 30, height: 30, borderRadius: 999, border: '4px solid #d1d5db', borderTopColor: '#1a5fa8', animation: 'mo-spin .9s linear infinite' }} />
          <span style={{ fontSize: 19, fontWeight: 600, color: '#6b7280' }}>다시 연결하고 있어요...</span>
        </div>
        <div style={{ width: 520, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 24, padding: 26 }}>
          <div style={{ fontSize: 17, color: '#6b7280', fontWeight: 600, marginBottom: 18 }}>도움이 필요하시면 연락하세요</div>
          <div style={{ height: 88, borderRadius: 18, background: '#1a5fa8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
            <Phone size={32} color="#fff" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 15, color: 'rgba(255,255,255,.8)', fontWeight: 600 }}>담당 복지사 · 박정희</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: '#fff' }}>02-1234-5678</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '0 40px 56px', textAlign: 'center' }}>
        <span style={{ fontSize: 17, color: '#9ca3af', fontWeight: 500 }}>연결되면 자동으로 원래 화면으로 돌아가요</span>
      </div>
    </div>
  );
}
