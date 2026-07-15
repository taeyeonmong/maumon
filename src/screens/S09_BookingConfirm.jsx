import { useState } from 'react';
import { PhoneCall, Clock, Calendar, UserRound, CalendarPlus, MessageCircleHeart, BellRing, CheckCircle } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

// 탭은 두 개: 상담 신청(현재 신청 상태) / 상담 일정(예정·완료 카드)
export default function S09_BookingConfirm({ navigate }) {
  const [tab, setTab] = useState('apply');       // 'apply' | 'schedule'
  const [applied, setApplied] = useState(true);  // 유저 상태: 신청함(대기 중) / 신청 안 함(신청 전)

  return (
    <div className="mo-screen" style={{ height: 1024, background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 20 }}>
        <div style={{ flex: 'none', display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S01')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>상담 신청 현황</span>
        </div>

        {/* 탭: 상담 신청 / 상담 일정 */}
        <div style={{ flex: 'none', display: 'flex', gap: 0, background: '#e5e7eb', borderRadius: 14, padding: 4 }}>
          {[{ k: 'apply', l: '상담 신청' }, { k: 'schedule', l: '상담 일정' }].map(({ k, l }) => (
            <div
              key={k}
              onClick={() => setTab(k)}
              style={{
                flex: 1, height: 52, borderRadius: 10, cursor: 'pointer',
                background: tab === k ? '#fff' : 'transparent',
                boxShadow: tab === k ? '0 1px 4px rgba(0,0,0,.08)' : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 19, fontWeight: tab === k ? 800 : 600, color: tab === k ? '#1f2937' : '#9ca3af' }}>{l}</span>
            </div>
          ))}
        </div>

        {tab === 'apply'
          ? (applied ? <WaitingState navigate={navigate} onPreview={() => setApplied(false)} />
                     : <BeforeState navigate={navigate} onPreview={() => setApplied(true)} />)
          : <ScheduleTab />}
      </div>
    </div>
  );
}

/* 상담 신청 탭 — 신청 전(신청 내역 없음) */
function BeforeState({ navigate, onPreview }) {
  return (
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 22 }}>
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
      <PreviewLink label="대기 중 화면 미리보기" onClick={onPreview} />
    </div>
  );
}

/* 상담 신청 탭 — 대기 중(신청 접수, 전화 대기) */
function WaitingState({ navigate, onPreview }) {
  return (
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
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
          cursor: 'pointer', marginTop: 20, height: 76, borderRadius: 18,
          background: '#fff', border: '2px solid #e07b2a',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        }}
      >
        <CalendarPlus size={26} color="#e07b2a" />
        <span style={{ fontSize: 22, fontWeight: 800, color: '#e07b2a' }}>새 상담 신청하기</span>
      </div>

      <div style={{ flex: 1 }} />
      <PreviewLink label="신청 전 화면 미리보기" onClick={onPreview} />
    </div>
  );
}

/* 상담 일정 탭 — 상담 예정 + 상담 완료 카드 */
function ScheduleTab() {
  return (
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* 상담 예정 */}
      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 22, padding: 24, boxShadow: '0 4px 14px rgba(26,95,168,.07)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#e3f4ec', color: '#2f9e6b', fontSize: 15, fontWeight: 800, padding: '6px 14px', borderRadius: 999 }}>
            <Calendar size={18} color="#2f9e6b" />상담 예정
          </span>
          <span style={{ background: '#1a5fa8', color: '#fff', fontSize: 15, fontWeight: 800, padding: '5px 13px', borderRadius: 999 }}>D-2</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 18 }}>
          <span style={{ width: 60, height: 60, borderRadius: 999, background: '#eef1f5', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <UserRound size={34} color="#6b7280" />
          </span>
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#1f2937' }}>김민정 상담사</div>
            <div style={{ fontSize: 17, color: '#6b7280', marginTop: 2 }}>마음온 상담사</div>
          </div>
        </div>
        <div style={{ marginTop: 18, borderTop: '1px solid #f0f1f3', paddingTop: 16, display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 19, fontWeight: 700, color: '#1f2937' }}>
            <Calendar size={22} color="#1a5fa8" />7월 16일 (목)
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 19, fontWeight: 700, color: '#1f2937' }}>
            <Clock size={22} color="#1a5fa8" />오후 2시
          </span>
        </div>
        <div style={{ marginTop: 16, background: '#f9fafb', borderRadius: 14, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <BellRing size={22} color="#6b7280" style={{ flex: 'none' }} />
          <span style={{ flex: 1, fontSize: 17, fontWeight: 600, color: '#1f2937' }}>상담 10분 전 알림</span>
          <span className="mo-toggle on" />
        </div>
      </div>

      {/* 상담 완료 */}
      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 22, padding: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f1f3f5', color: '#6b7280', fontSize: 15, fontWeight: 800, padding: '6px 14px', borderRadius: 999 }}>
            <CheckCircle size={18} color="#6b7280" />상담 완료
          </span>
          <span style={{ fontSize: 15, color: '#9ca3af', fontWeight: 600 }}>7월 2일 (수)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 18 }}>
          <span style={{ width: 60, height: 60, borderRadius: 999, background: '#eef1f5', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <UserRound size={34} color="#6b7280" />
          </span>
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#1f2937' }}>김민정 상담사</div>
            <div style={{ fontSize: 17, color: '#6b7280', marginTop: 2 }}>마음온 상담사 · 오후 3시</div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1 }} />
    </div>
  );
}

function PreviewLink({ label, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{ flex: 'none', marginTop: 14, textAlign: 'center', cursor: 'pointer', fontSize: 15, color: '#b0b6be', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}
    >
      {label}
    </div>
  );
}
