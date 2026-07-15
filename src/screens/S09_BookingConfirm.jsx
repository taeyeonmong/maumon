import { useState } from 'react';
import { PhoneCall, Clock, Calendar, UserRound, CalendarPlus, MessageCircleHeart, BellRing } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

// 상담 신청 현황 — 세 가지 상태를 와이어프레임에 모두 담는다.
const STATES = [
  { key: 'before', label: '신청 전' },
  { key: 'waiting', label: '대기 중' },
  { key: 'scheduled', label: '상담 예정' },
];

export default function S09_BookingConfirm({ navigate }) {
  const [state, setState] = useState('waiting');

  return (
    <div className="mo-screen" style={{ height: 1024, background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 22 }}>
        <div style={{ flex: 'none', display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S01')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>상담 신청 현황</span>
        </div>

        {/* 상태 미리보기 전환 (프로토타입용) */}
        <div style={{ flex: 'none', display: 'flex', gap: 0, background: '#e5e7eb', borderRadius: 14, padding: 4 }}>
          {STATES.map(({ key, label }) => (
            <div
              key={key}
              onClick={() => setState(key)}
              style={{
                flex: 1, height: 48, borderRadius: 10, cursor: 'pointer',
                background: state === key ? '#fff' : 'transparent',
                boxShadow: state === key ? '0 1px 4px rgba(0,0,0,.08)' : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 17, fontWeight: state === key ? 800 : 600, color: state === key ? '#1f2937' : '#9ca3af' }}>{label}</span>
            </div>
          ))}
        </div>

        {state === 'before' && <BeforeState navigate={navigate} />}
        {state === 'waiting' && <WaitingState navigate={navigate} />}
        {state === 'scheduled' && <ScheduledState />}
      </div>
    </div>
  );
}

/* 1) 상담 신청 전 — 아직 신청 내역이 없는 상태 */
function BeforeState({ navigate }) {
  return (
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 24 }}>
      <span style={{ width: 128, height: 128, borderRadius: 999, background: '#e8f1fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <MessageCircleHeart size={68} color="#1a5fa8" />
      </span>
      <div>
        <div style={{ fontSize: 28, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>아직 신청한 상담이 없어요</div>
        <div style={{ fontSize: 20, color: '#6b7280', fontWeight: 500, marginTop: 12, lineHeight: 1.5 }}>
          마음온 상담사와 이야기 나누고 싶으시면<br />언제든 신청해 주세요
        </div>
      </div>
      <div
        onClick={() => navigate('S09n')}
        style={{
          marginTop: 8, cursor: 'pointer', width: '100%', maxWidth: 460, height: 88, borderRadius: 18,
          background: '#e07b2a', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          boxShadow: '0 6px 16px rgba(224,123,42,.35)',
        }}
      >
        <CalendarPlus size={30} color="#fff" />
        <span style={{ fontSize: 25, fontWeight: 800, color: '#fff' }}>상담 신청하기</span>
      </div>
    </div>
  );
}

/* 2) 전화 대기 중 — 신청 접수, 상담사 전화 대기 */
function WaitingState({ navigate }) {
  return (
    <>
      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 24, padding: 28, boxShadow: '0 4px 14px rgba(26,95,168,.07)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#fef3e6', color: '#e07b2a', fontSize: 16, fontWeight: 800, padding: '7px 16px', borderRadius: 999 }}>
            <Clock size={20} color="#e07b2a" />전화 대기 중
          </span>
          <span style={{ fontSize: 15, color: '#9ca3af', fontWeight: 600 }}>7/13 신청</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 24 }}>
          <span style={{ width: 76, height: 76, borderRadius: 999, background: '#e8f1fa', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <PhoneCall size={40} color="#1a5fa8" />
          </span>
          <div style={{ fontSize: 24, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
            마음온 상담사가 곧<br />휴대폰으로 전화드려요
          </div>
        </div>

        <div style={{ marginTop: 22, borderTop: '1px solid #f0f1f3', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontSize: 20, color: '#6b7280', fontWeight: 600, width: 120 }}>휴대폰번호</span>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#1f2937' }}>010-1234-5678</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontSize: 20, color: '#6b7280', fontWeight: 600, width: 120 }}>희망 시간대</span>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#1f2937' }}>오후</span>
          </div>
        </div>
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
    </>
  );
}

/* 3) 상담 예정 — 통화로 일정이 잡힌 뒤 */
function ScheduledState() {
  return (
    <>
      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 24, padding: 28, boxShadow: '0 4px 14px rgba(26,95,168,.07)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#e3f4ec', color: '#2f9e6b', fontSize: 16, fontWeight: 800, padding: '7px 16px', borderRadius: 999 }}>
            <Calendar size={20} color="#2f9e6b" />상담 예정
          </span>
          <span style={{ background: '#1a5fa8', color: '#fff', fontSize: 16, fontWeight: 800, padding: '6px 14px', borderRadius: 999 }}>D-2</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 24 }}>
          <span style={{ width: 76, height: 76, borderRadius: 999, background: '#eef1f5', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <UserRound size={42} color="#6b7280" />
          </span>
          <div>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>김민정 상담사</div>
            <div style={{ fontSize: 18, color: '#6b7280', marginTop: 2 }}>마음온 상담사</div>
          </div>
        </div>

        <div style={{ marginTop: 22, borderTop: '1px solid #f0f1f3', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Calendar size={26} color="#1a5fa8" style={{ flex: 'none' }} />
            <span style={{ fontSize: 22, fontWeight: 700, color: '#1f2937' }}>7월 16일 (목)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Clock size={26} color="#1a5fa8" style={{ flex: 'none' }} />
            <span style={{ fontSize: 22, fontWeight: 700, color: '#1f2937' }}>오후 2시 00분</span>
          </div>
        </div>
      </div>

      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 18, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <BellRing size={26} color="#6b7280" style={{ flex: 'none' }} />
        <span style={{ flex: 1, fontSize: 19, fontWeight: 600, color: '#1f2937' }}>상담 10분 전 알림</span>
        <span className="mo-toggle on" />
      </div>

      <div style={{ marginTop: 'auto', textAlign: 'center', fontSize: 17, color: '#9ca3af', fontWeight: 500, lineHeight: 1.5 }}>
        약속한 시간에 마음온 상담사가<br />휴대폰으로 전화드려요
      </div>
    </>
  );
}
