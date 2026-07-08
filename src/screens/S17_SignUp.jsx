import { CircleCheck } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

export default function S17_SignUp({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 44px 40px', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S16')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>회원가입</span>
        </div>

        {/* Step indicator */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {[1, 2, 3].map((n, i) => (
            <>
              <span key={n} style={{ width: 36, height: 36, borderRadius: 999, background: i === 0 ? '#1a5fa8' : '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 800, color: i === 0 ? '#fff' : '#9ca3af', flex: 'none' }}>
                {n}
              </span>
              {i < 2 && <div key={`line-${i}`} style={{ flex: 1, height: 5, borderRadius: 999, background: i === 0 ? '#1a5fa8' : '#e5e7eb' }} />}
            </>
          ))}
        </div>
        <div style={{ fontSize: 16, color: '#6b7280', fontWeight: 600, marginTop: -8 }}>1단계 · 기본 정보</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Name */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#374151' }}>이름</div>
            <div style={{ height: 60, borderRadius: 14, background: '#fff', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', padding: '0 20px', fontSize: 20, color: '#9ca3af' }}>홍길동</div>
          </div>

          {/* Birthdate + Gender */}
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#374151' }}>생년월일</div>
              <div style={{ height: 60, borderRadius: 14, background: '#fff', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', padding: '0 20px', fontSize: 20, color: '#9ca3af' }}>YYYY.MM.DD</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#374151' }}>성별</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {[{ label: '남', selected: true }, { label: '여', selected: false }].map(({ label, selected }) => (
                  <div key={label} style={{ height: 60, width: 80, borderRadius: 14, background: selected ? '#1a5fa8' : '#fff', border: selected ? '2px solid #1a5fa8' : '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: selected ? '#fff' : '#9ca3af' }}>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ID */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#374151' }}>아이디</div>
            <div style={{ height: 60, borderRadius: 14, background: '#fff', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', padding: '0 20px', fontSize: 20, color: '#9ca3af' }}>아이디(영문+숫자)</div>
          </div>

          {/* Password */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#374151' }}>비밀번호</div>
            <div style={{ height: 60, borderRadius: 14, background: '#fff', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', padding: '0 20px', fontSize: 20, color: '#9ca3af' }}>비밀번호 (6자리 이상)</div>
          </div>

          {/* Phone */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#374151' }}>휴대폰 본인인증</div>
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ flex: 1, height: 60, borderRadius: 14, background: '#fff', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', padding: '0 20px', fontSize: 20, color: '#9ca3af' }}>010-0000-0000</div>
              <div style={{ width: 120, height: 60, borderRadius: 14, background: '#1a5fa8', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span style={{ fontSize: 17, fontWeight: 800, color: '#fff' }}>인증 발송</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <CircleCheck size={18} color="#2f9e6b" />
              <span style={{ fontSize: 16, color: '#2f9e6b', fontWeight: 600 }}>인증번호가 발송되었습니다</span>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate('S18')}
          className="mo-btn-primary"
          style={{ marginTop: 'auto', height: 80, fontSize: 25 }}
        >
          다음
        </div>
      </div>
    </div>
  );
}
