import { Info, Check } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

const terms = [
  { label: '개인정보 수집·이용 동의', sub: '이름, 연락처, 이용기록 (필수)', subColor: '#6b7280' },
  { label: '민감정보(심리상태) 수집·이용 동의', sub: '감정·심리 상태 정보 (필수)', subColor: '#dc2626' },
  { label: '영상·음성 수집·이용 동의', sub: '대화 음성 녹음·분석 (필수)', subColor: '#dc2626' },
];

export default function S18_Terms({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 44px 40px', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S17')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>이용 동의</span>
        </div>

        <div style={{ background: '#e8f1fa', border: '1.5px solid #cfe2f5', borderRadius: 16, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Info size={22} color="#1a5fa8" style={{ flex: 'none' }} />
          <span style={{ fontSize: 17, color: '#1a5fa8', fontWeight: 600, lineHeight: 1.5 }}>서비스 이용을 위해 아래 항목에 동의해 주세요.</span>
        </div>

        {/* All agree */}
        <div style={{ background: '#fff', border: '2.5px solid #1a5fa8', borderRadius: 18, padding: '22px 24px', display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}>
          <span style={{ width: 36, height: 36, borderRadius: 10, background: '#1a5fa8', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <Check size={22} color="#fff" />
          </span>
          <span style={{ fontSize: 22, fontWeight: 800, color: '#1a5fa8' }}>전체 동의</span>
        </div>

        {/* Individual terms */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 18, overflow: 'hidden', background: '#fff' }}>
          {terms.map(({ label, sub, subColor }, i) => (
            <div
              key={label}
              style={{
                padding: '22px 24px', display: 'flex', alignItems: 'center', gap: 14,
                borderBottom: i < terms.length - 1 ? '1px solid #f0f1f3' : 'none',
              }}
            >
              <span style={{ width: 32, height: 32, borderRadius: 8, background: '#e8f1fa', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                <Check size={18} color="#1a5fa8" />
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#1f2937' }}>{label}</div>
                <div style={{ fontSize: 15, color: subColor, marginTop: 2, fontWeight: 600 }}>{sub}</div>
              </div>
              <span
                onClick={() => navigate('S20')}
                style={{ fontSize: 15, color: '#1a5fa8', fontWeight: 700, textDecoration: 'underline', cursor: 'pointer' }}
              >
                전문 보기
              </span>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 16, color: '#9ca3af', fontWeight: 500, lineHeight: 1.6 }}>
          동의를 거부할 수 있으나, 필수 항목 미동의 시 서비스 이용이 제한됩니다.
        </div>

        <div
          onClick={() => navigate('S01')}
          className="mo-btn-primary"
          style={{ marginTop: 'auto', fontSize: 25 }}
        >
          동의하고 시작하기
        </div>
      </div>
    </div>
  );
}
