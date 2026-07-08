import { CalendarCheck, UserRound, Calendar, Clock, CheckCircle, Home } from 'lucide-react';
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
          <CalendarCheck size={80} color="#fff" />
        </span>
        <div>
          <div style={{ fontSize: 34, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.03em', lineHeight: 1.3 }}>예약이 확정되었습니다!</div>
          <div style={{ fontSize: 19, color: '#6b7280', marginTop: 10, fontWeight: 500 }}>선생님께 알림이 전달되었어요</div>
        </div>
        <div style={{
          width: '100%', background: '#fff', border: '1px solid #cfe7da',
          borderRadius: 22, padding: 24,
          display: 'flex', flexDirection: 'column', gap: 14,
          boxShadow: '0 4px 14px rgba(0,0,0,.06)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingBottom: 14, borderBottom: '1px solid #f0f1f3' }}>
            <span style={{ width: 52, height: 52, borderRadius: 999, background: '#eef1f5', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
              <UserRound size={28} color="#6b7280" />
            </span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: '#1f2937' }}>김민정 상담사</div>
              <div style={{ fontSize: 15, color: '#6b7280', marginTop: 2 }}>이닛케어 심리상담팀</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left' }}>
            <Calendar size={24} color="#1a5fa8" style={{ flex: 'none' }} />
            <span style={{ fontSize: 20, fontWeight: 600, color: '#1f2937' }}>7월 10일 (목)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left' }}>
            <Clock size={24} color="#1a5fa8" style={{ flex: 'none' }} />
            <span style={{ fontSize: 20, fontWeight: 600, color: '#1f2937' }}>오전 10시 00분</span>
          </div>
        </div>
        <div style={{
          width: '100%', background: 'rgba(255,255,255,.7)', border: '1px solid #cfe7da',
          borderRadius: 16, padding: '16px 20px',
          display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          {['담당 복지사 박정희님께 알림 발송', '관리자에게 예약 접수 완료', '10분 전 알림 예약됨'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <CheckCircle size={20} color="#2f9e6b" style={{ flex: 'none' }} />
              <span style={{ fontSize: 17, color: '#374151', fontWeight: 600 }}>{t}</span>
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
