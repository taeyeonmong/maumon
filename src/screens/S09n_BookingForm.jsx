import { UserRound, CalendarCheck } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

const dates = [
  { label: '7월 10일', day: '목', selected: true },
  { label: '7월 11일', day: '금' },
  { label: '7월 14일', day: '월' },
  { label: '7월 15일', day: '화' },
  { label: '7월 16일', day: '불가', disabled: true },
  { label: '7월 17일', day: '목' },
];
const times = ['오전 10시', '오후 2시', '오후 4시'];

export default function S09n_BookingForm({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar time="10:03" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S01')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>상담 예약 신청</span>
        </div>

        {/* Counselor card */}
        <div style={{ background: '#e07b2a', borderRadius: 20, padding: '22px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ width: 64, height: 64, borderRadius: 999, background: 'rgba(255,255,255,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <UserRound size={36} color="#fff" />
          </span>
          <div>
            <div style={{ fontSize: 15, color: 'rgba(255,255,255,.85)', fontWeight: 600 }}>담당 상담사</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginTop: 2 }}>김민정 상담사</div>
            <div style={{ fontSize: 15, color: 'rgba(255,255,255,.8)', marginTop: 2 }}>이닛케어 심리상담팀</div>
          </div>
        </div>

        {/* Date picker */}
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#1f2937', marginBottom: 14 }}>날짜 선택</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
            {dates.map(({ label, day, selected, disabled }) => (
              <div
                key={label}
                style={{
                  height: 72, borderRadius: 16,
                  background: disabled ? '#f9fafb' : '#fff',
                  border: selected
                    ? '2px solid #e07b2a'
                    : disabled
                    ? '1.5px dashed #d1d5db'
                    : '1.5px solid #e5e7eb',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  cursor: disabled ? 'default' : 'pointer',
                }}
              >
                <div style={{ fontSize: 14, color: selected ? '#e07b2a' : disabled ? '#9ca3af' : '#6b7280', fontWeight: selected ? 700 : 600 }}>{label}</div>
                <div style={{ fontSize: 16, fontWeight: selected ? 800 : disabled ? 600 : 700, color: selected ? '#e07b2a' : disabled ? '#9ca3af' : '#1f2937' }}>{day}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Time picker */}
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#1f2937', marginBottom: 14 }}>시간 선택</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
            {times.map((t, i) => (
              <div
                key={t}
                style={{
                  height: 60, borderRadius: 14, background: '#fff',
                  border: i === 0 ? '2px solid #e07b2a' : '1.5px solid #e5e7eb',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                }}
              >
                <span style={{ fontSize: 18, fontWeight: i === 0 ? 800 : 700, color: i === 0 ? '#e07b2a' : '#6b7280' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          onClick={() => navigate('S09c')}
          style={{
            cursor: 'pointer', marginTop: 'auto', height: 84, borderRadius: 18,
            background: '#e07b2a', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
            boxShadow: '0 6px 16px rgba(224,123,42,.35)',
          }}
        >
          <CalendarCheck size={30} color="#fff" />
          <span style={{ fontSize: 25, fontWeight: 800, color: '#fff' }}>예약 신청하기</span>
        </div>
      </div>
    </div>
  );
}
