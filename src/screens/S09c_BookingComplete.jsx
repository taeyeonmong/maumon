import { CheckCircle, Home } from 'lucide-react';
import StatusBar from '../components/StatusBar';

export default function S09c_BookingComplete({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#e3f4ec', border: '1px solid #bfe3d0' }}>
      <StatusBar time="10:05" />
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: 40, gap: 32, textAlign: 'center',
      }}>
        <span style={{
          width: 150, height: 150, borderRadius: 999, background: '#2f9e6b',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(47,158,107,.35)',
        }}>
          <CheckCircle size={90} color="#fff" />
        </span>
        <div style={{ fontSize: 36, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.03em', lineHeight: 1.3 }}>
          상담 신청이<br />접수되었어요
        </div>
        <div style={{ fontSize: 23, color: '#3f7d5f', fontWeight: 600, lineHeight: 1.55, maxWidth: 540 }}>
          마음온 상담사가 전화를 드려서<br />편하신 시간으로 일정을 잡아드려요
        </div>
      </div>
      <div style={{ padding: '0 40px 56px' }}>
        <div
          onClick={() => navigate('S01')}
          className="mo-btn-primary"
          style={{ height: 80, fontSize: 25 }}
        >
          <Home size={28} color="#fff" />홈으로
        </div>
      </div>
    </div>
  );
}
