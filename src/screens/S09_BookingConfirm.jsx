import { PhoneCall, Phone, Clock, CalendarPlus, Info, CheckCircle } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

export default function S09_BookingConfirm({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S01')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>상담 신청 현황</span>
        </div>

        {/* 상태 카드 */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 24, padding: 28, boxShadow: '0 4px 14px rgba(26,95,168,.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#fef3e6', color: '#e07b2a', fontSize: 16, fontWeight: 800, padding: '7px 16px', borderRadius: 999 }}>
              <Clock size={20} color="#e07b2a" />전화 연락 대기 중
            </span>
            <span style={{ fontSize: 15, color: '#9ca3af', fontWeight: 600 }}>7/13 신청</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 24 }}>
            <span style={{ width: 76, height: 76, borderRadius: 999, background: '#e8f1fa', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
              <PhoneCall size={40} color="#1a5fa8" />
            </span>
            <div>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em', lineHeight: 1.3 }}>상담사가 곧<br />전화드릴 예정이에요</div>
            </div>
          </div>

          <div style={{ marginTop: 22, borderTop: '1px solid #f0f1f3', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <Phone size={24} color="#1a5fa8" style={{ flex: 'none' }} />
              <span style={{ fontSize: 20, color: '#6b7280', fontWeight: 600, width: 96 }}>연락처</span>
              <span style={{ fontSize: 20, fontWeight: 700, color: '#1f2937' }}>010-1234-5678</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <Clock size={24} color="#1a5fa8" style={{ flex: 'none' }} />
              <span style={{ fontSize: 20, color: '#6b7280', fontWeight: 600, width: 96 }}>희망 시간</span>
              <span style={{ fontSize: 20, fontWeight: 700, color: '#1f2937' }}>오후</span>
            </div>
          </div>
        </div>

        {/* 진행 안내 */}
        <div style={{ background: '#e8f1fa', border: '1.5px solid #cfe2f5', borderRadius: 16, padding: '18px 20px', display: 'flex', gap: 12 }}>
          <Info size={24} color="#1a5fa8" style={{ flex: 'none', marginTop: 2 }} />
          <span style={{ fontSize: 18, color: '#1a5fa8', fontWeight: 600, lineHeight: 1.5 }}>
            일정은 상담사와 통화로 정해져요. 통화가 어려우실 땐 담당 복지사에게도 함께 알림이 전달돼요.
          </span>
        </div>

        <div style={{ background: 'rgba(255,255,255,.7)', border: '1px solid #e5e7eb', borderRadius: 16, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {['신청서 접수 완료', '이닛케어 상담 시스템에 전달됨'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <CheckCircle size={20} color="#2f9e6b" style={{ flex: 'none' }} />
              <span style={{ fontSize: 17, color: '#374151', fontWeight: 600 }}>{t}</span>
            </div>
          ))}
        </div>

        <div
          onClick={() => navigate('S09n')}
          style={{
            cursor: 'pointer', marginTop: 'auto', height: 76, borderRadius: 18,
            background: '#fff', border: '2px solid #e07b2a',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          }}
        >
          <CalendarPlus size={26} color="#e07b2a" />
          <span style={{ fontSize: 22, fontWeight: 800, color: '#e07b2a' }}>새 상담 신청하기</span>
        </div>
      </div>
    </div>
  );
}
