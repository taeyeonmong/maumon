import { Phone, Info, Pencil, Send } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

// 앱에서는 '상담 신청'만 접수한다. 실제 일정은 마음온 상담사가 전화로 잡는다.
const timePrefs = ['언제든 좋아요', '오전', '오후', '저녁'];
const reasons = ['요즘 마음이 힘들어요', '자꾸 외롭고 우울해요', '건강이 걱정돼요', '그냥 이야기하고 싶어요'];

export default function S09n_BookingForm({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar time="10:03" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S07')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>상담 신청</span>
        </div>

        {/* 안내 배너 */}
        <div style={{ background: '#fbe7d6', border: '1.5px solid #f0cba3', borderRadius: 16, padding: '18px 20px', display: 'flex', gap: 12 }}>
          <Info size={24} color="#e07b2a" style={{ flex: 'none', marginTop: 2 }} />
          <span style={{ fontSize: 19, color: '#8a5a2b', fontWeight: 600, lineHeight: 1.5 }}>
            아래 상담 신청서를 제출해주시면 <b>마음온 상담사</b>가 직접 전화를 드려서 편하신 시간으로 일정을 잡아드릴게요.
          </span>
        </div>

        {/* 연락받을 휴대폰번호 (필수) */}
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#1f2937', marginBottom: 12 }}>
            연락받을 휴대폰번호 <span style={{ color: '#dc2626' }}>(필수)</span>
          </div>
          <div style={{ background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 16, height: 72, padding: '0 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
            <Phone size={26} color="#e07b2a" style={{ flex: 'none' }} />
            <span style={{ flex: 1, fontSize: 24, fontWeight: 700, color: '#1f2937' }}>010-1234-5678</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 17, color: '#e07b2a', fontWeight: 700, cursor: 'pointer' }}>
              <Pencil size={18} color="#e07b2a" />수정
            </span>
          </div>
        </div>

        {/* 희망하는 상담 시간대 (선택) */}
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#1f2937', marginBottom: 12 }}>
            희망하는 상담 시간대 <span style={{ color: '#9ca3af', fontWeight: 700 }}>(선택)</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
            {timePrefs.map((t, i) => (
              <div key={t} style={{
                height: 60, borderRadius: 14, background: i === 0 ? '#fbe7d6' : '#fff',
                border: i === 0 ? '2px solid #e07b2a' : '1.5px solid #e5e7eb',
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '0 4px', textAlign: 'center',
              }}>
                <span style={{ fontSize: 17, fontWeight: i === 0 ? 800 : 700, color: i === 0 ? '#e07b2a' : '#6b7280' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 나누고 싶은 이야기 (선택) */}
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#1f2937', marginBottom: 12 }}>
            나누고 싶은 이야기 <span style={{ color: '#9ca3af', fontWeight: 700 }}>(선택)</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {reasons.map((r, i) => (
              <div key={r} style={{
                height: 56, paddingInline: 20, borderRadius: 999, background: i === 0 ? '#fbe7d6' : '#fff',
                border: i === 0 ? '2px solid #e07b2a' : '1.5px solid #e5e7eb',
                display: 'flex', alignItems: 'center', cursor: 'pointer',
              }}>
                <span style={{ fontSize: 18, fontWeight: 700, color: i === 0 ? '#e07b2a' : '#6b7280' }}>{r}</span>
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
          <Send size={28} color="#fff" />
          <span style={{ fontSize: 25, fontWeight: 800, color: '#fff' }}>상담 신청하기</span>
        </div>
      </div>
    </div>
  );
}
