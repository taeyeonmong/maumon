import { AlertCircle, Volume2 } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

export default function S14_Notice({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S14l')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>공지사항</span>
        </div>

        {/* Tab */}
        <div style={{ display: 'flex', gap: 0, background: '#e5e7eb', borderRadius: 14, padding: 4 }}>
          <div style={{ flex: 1, height: 52, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 4px rgba(0,0,0,.08)' }}>
            <span style={{ fontSize: 19, fontWeight: 800, color: '#1f2937' }}>공지사항</span>
          </div>
          <div onClick={() => navigate('S14f')} style={{ cursor: 'pointer', flex: 1, height: 52, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 19, fontWeight: 600, color: '#9ca3af' }}>FAQ</span>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 24, padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
          <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 7, background: '#fde8e8', color: '#dc2626', fontSize: 15, fontWeight: 800, padding: '6px 14px', borderRadius: 999 }}>
            <AlertCircle size={18} color="#dc2626" />긴급
          </span>
          <div style={{ fontSize: 30, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em', lineHeight: 1.35, marginTop: 18 }}>
            경로당 무더위 쉼터<br />운영 안내
          </div>
          <div style={{ fontSize: 16, color: '#9ca3af', fontWeight: 600, marginTop: 8 }}>2026. 6. 20 · 행복복지관</div>
          <div style={{ fontSize: 23, color: '#374151', lineHeight: 1.65, marginTop: 22, fontWeight: 500 }}>
            연일 무더위가 이어지고 있습니다. 6월 20일부터 경로당을 무더위 쉼터로 운영합니다.<br /><br />
            · 운영 시간: 오전 9시 ~ 오후 6시<br />
            · 장소: 행복경로당 1층
          </div>
          <div style={{ marginTop: 'auto', paddingTop: 22 }}>
            <div style={{ height: 78, borderRadius: 18, background: '#e8f1fa', border: '1.5px solid #cfe2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, cursor: 'pointer' }}>
              <Volume2 size={28} color="#1a5fa8" />
              <span style={{ fontSize: 23, fontWeight: 800, color: '#1a5fa8' }}>음성으로 읽어주기</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
