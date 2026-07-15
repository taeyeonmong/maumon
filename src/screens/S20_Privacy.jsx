import { Volume2 } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

const sections = [
  {
    title: '1. 수집하는 개인정보 항목',
    body: `서비스 이용 과정에서 아래와 같은 개인정보를 수집합니다.\n\n• 필수항목: 이름, 생년월일, 성별, 아이디, 비밀번호, 휴대폰 번호\n• 자동수집: 통화 기록, 감정·심리 분석 결과, 서비스 이용 기록, 접속 로그`,
  },
  {
    title: '2. 개인정보의 수집 및 이용 목적',
    body: `수집된 개인정보는 다음 목적으로만 이용됩니다.\n\n• 안부콜 및 AI 대화 서비스 제공\n• 심리·정서 상태 분석 및 복지 연계\n• 위기 상황 감지 및 긴급 대응\n• 서비스 품질 개선 및 통계 분석`,
  },
];

export default function S20_Privacy({ goBack }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={goBack} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>개인정보처리방침</div>
            <div style={{ fontSize: 14, color: '#9ca3af', fontWeight: 500, marginTop: 2 }}>시행일: 2025년 1월 1일 · v1.0</div>
          </div>
          <div
            style={{ width: 52, height: 52, borderRadius: 14, background: '#e8f1fa', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <Volume2 size={24} color="#1a5fa8" />
          </div>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {sections.map(({ title, body }) => (
            <div key={title} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 18, padding: '22px 24px' }}>
              <div style={{ fontSize: 19, fontWeight: 800, color: '#1f2937', marginBottom: 12 }}>{title}</div>
              <div style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, fontWeight: 500, whiteSpace: 'pre-line' }}>{body}</div>
            </div>
          ))}

          <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 18, padding: '22px 24px' }}>
            <div style={{ fontSize: 19, fontWeight: 800, color: '#1f2937', marginBottom: 12 }}>3. 개인정보의 보유 및 이용 기간</div>
            <div style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, fontWeight: 500 }}>
              서비스 이용 기간 동안 보유하며, 탈퇴 즉시 파기합니다. 단, 관련 법령에 따라 일정 기간 보관이 필요한 경우 해당 기간 동안 보유합니다.
            </div>
          </div>

          <div style={{ fontSize: 15, color: '#9ca3af', fontWeight: 500, lineHeight: 1.6, padding: '0 4px' }}>
            개인정보 관련 문의: privacy@maeumon.kr · 1588-0000
          </div>
        </div>

        <div
          onClick={goBack}
          className="mo-btn-primary"
          style={{ fontSize: 23 }}
        >
          닫기
        </div>
      </div>
    </div>
  );
}
