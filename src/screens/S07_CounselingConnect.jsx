import { UserRound, CalendarPlus } from 'lucide-react';
import StatusBar from '../components/StatusBar';

export default function S07_CounselingConnect({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#fbe7d6', border: '1px solid #f0cba3' }}>
      <StatusBar time="10:01" />
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: 40, gap: 32, textAlign: 'center',
      }}>
        <span style={{
          width: 150, height: 150, borderRadius: 999, background: '#fff',
          border: '3px solid #e07b2a', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 6px 18px rgba(224,123,42,.25)',
        }}>
          <UserRound size={84} color="#e07b2a" />
        </span>
        <div style={{ fontSize: 34, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.03em', lineHeight: 1.35 }}>
          상담사 선생님과<br />이야기 나눠보시겠어요?
        </div>
        <div style={{ fontSize: 20, color: '#8a5a2b', fontWeight: 600, lineHeight: 1.5, marginTop: -12 }}>
          신청하시면 이닛케어 상담사가<br />전화로 연락드려 일정을 잡아드려요
        </div>
        <div style={{ width: 480, display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}>
          <div
            onClick={() => navigate('S09n')}
            style={{
              cursor: 'pointer', height: 84, borderRadius: 18, background: '#e07b2a',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
              boxShadow: '0 6px 16px rgba(224,123,42,.35)',
            }}
          >
            <CalendarPlus size={30} color="#fff" />
            <span style={{ fontSize: 25, fontWeight: 800, color: '#fff' }}>상담 신청하기</span>
          </div>
        </div>
        <span
          onClick={() => navigate('S01')}
          style={{ cursor: 'pointer', fontSize: 19, color: '#6b7280', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 4, marginTop: 8 }}
        >
          건너뛰기
        </span>
      </div>
    </div>
  );
}
