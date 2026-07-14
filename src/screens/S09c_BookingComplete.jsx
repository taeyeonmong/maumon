import { CheckCircle, PhoneCall, Phone, Clock, Home } from 'lucide-react';
import StatusBar from '../components/StatusBar';

export default function S09c_BookingComplete({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#e3f4ec', border: '1px solid #bfe3d0' }}>
      <StatusBar time="10:05" />
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: 40, gap: 28, textAlign: 'center',
      }}>
        <span style={{
          width: 140, height: 140, borderRadius: 999, background: '#2f9e6b',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(47,158,107,.35)',
        }}>
          <CheckCircle size={82} color="#fff" />
        </span>
        <div>
          <div style={{ fontSize: 34, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.03em', lineHeight: 1.3 }}>상담 신청이 접수되었어요</div>
          <div style={{ fontSize: 21, color: '#3f7d5f', marginTop: 12, fontWeight: 600, lineHeight: 1.5 }}>
            이닛케어 상담사가 <b>전화로 연락</b>드려<br />편하신 시간으로 일정을 잡아드려요
          </div>
        </div>

        {/* 전화 연락 안내 카드 */}
        <div style={{
          width: '100%', background: '#fff', border: '1px solid #cfe7da',
          borderRadius: 22, padding: 24,
          display: 'flex', alignItems: 'center', gap: 18,
          boxShadow: '0 4px 14px rgba(0,0,0,.06)',
        }}>
          <span style={{ width: 64, height: 64, borderRadius: 999, background: '#e8f1fa', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <PhoneCall size={34} color="#1a5fa8" />
          </span>
          <div style={{ textAlign: 'left', flex: 1 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#1f2937' }}>곧 전화가 올 거예요</div>
            <div style={{ fontSize: 17, color: '#6b7280', marginTop: 4, fontWeight: 500 }}>010-1234-5678 로 연락드려요</div>
          </div>
        </div>

        {/* 진행 상태 */}
        <div style={{
          width: '100%', background: 'rgba(255,255,255,.7)', border: '1px solid #cfe7da',
          borderRadius: 16, padding: '18px 22px',
          display: 'flex', flexDirection: 'column', gap: 12,
        }}>
          {[
            { icon: <CheckCircle size={22} color="#2f9e6b" />, text: '신청서 접수 완료', done: true },
            { icon: <CheckCircle size={22} color="#2f9e6b" />, text: '이닛케어 상담 시스템에 전달됨', done: true },
            { icon: <Clock size={22} color="#e07b2a" />, text: '상담사 전화 연락 예정 (보통 1~2일 이내)', done: false },
          ].map(({ icon, text, done }) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ flex: 'none' }}>{icon}</span>
              <span style={{ fontSize: 18, color: done ? '#374151' : '#8a5a2b', fontWeight: done ? 600 : 700, textAlign: 'left' }}>{text}</span>
            </div>
          ))}
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
