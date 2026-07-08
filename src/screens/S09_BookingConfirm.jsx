import { Video, UserRound, Calendar, Clock, BellRing } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

export default function S09_BookingConfirm({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S01')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>상담 예약</span>
        </div>

        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 24, padding: 28, boxShadow: '0 4px 14px rgba(26,95,168,.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#e8f1fa', color: '#1a5fa8', fontSize: 16, fontWeight: 700, padding: '7px 14px', borderRadius: 999 }}>
              <Video size={20} color="#1a5fa8" />온라인 상담
            </span>
            <span style={{ background: '#1a5fa8', color: '#fff', fontSize: 18, fontWeight: 800, padding: '7px 16px', borderRadius: 999 }}>D-2</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 22 }}>
            <span style={{ width: 76, height: 76, borderRadius: 999, background: '#eef1f5', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
              <UserRound size={42} color="#6b7280" />
            </span>
            <div>
              <div style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>김민정 상담사</div>
              <div style={{ fontSize: 18, color: '#6b7280', marginTop: 2 }}>이닛케어 심리상담팀</div>
            </div>
          </div>
          <div style={{ marginTop: 22, borderTop: '1px solid #f0f1f3', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <Calendar size={26} color="#1a5fa8" />
              <span style={{ fontSize: 22, fontWeight: 600, color: '#1f2937' }}>6월 24일 (수)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <Clock size={26} color="#1a5fa8" />
              <span style={{ fontSize: 22, fontWeight: 600, color: '#1f2937' }}>오후 2시 00분</span>
            </div>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 18, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
          <BellRing size={26} color="#6b7280" />
          <span style={{ flex: 1, fontSize: 19, fontWeight: 600, color: '#1f2937' }}>상담 10분 전 알림</span>
          <span className="mo-toggle on" />
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ height: 84, borderRadius: 18, background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <Video size={30} color="#9ca3af" />
            <span style={{ fontSize: 25, fontWeight: 800, color: '#9ca3af' }}>입장하기</span>
          </div>
          <div style={{ textAlign: 'center', fontSize: 16, color: '#9ca3af', fontWeight: 500 }}>예약 10분 전부터 입장할 수 있어요</div>
        </div>
      </div>
    </div>
  );
}
