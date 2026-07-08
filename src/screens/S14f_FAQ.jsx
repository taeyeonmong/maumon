import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

const faqs = [
  {
    q: '안부콜은 언제 오나요?',
    a: '담당 복지사가 설정한 시간에 하루 2~3회 전화 드려요. 시간이 궁금하시면 설정에서 확인하실 수 있어요.',
  },
  {
    q: '상담 예약은 어떻게 하나요?',
    a: '홈 화면의 [상담 예약] 카드를 눌러 예약하실 수 있어요. 안부콜 후 상담사가 연결을 제안하기도 해요.',
  },
  {
    q: '글씨 크기를 바꿀 수 있나요?',
    a: '홈 화면 오른쪽 위의 [가 가 가] 버튼으로 글씨 크기를 조절할 수 있어요.',
  },
];

export default function S14f_FAQ({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 32px 32px', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S14l')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>공지사항</span>
        </div>

        <div style={{ display: 'flex', gap: 0, background: '#e5e7eb', borderRadius: 14, padding: 4 }}>
          <div onClick={() => navigate('S14l')} style={{ cursor: 'pointer', flex: 1, height: 52, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 19, fontWeight: 600, color: '#9ca3af' }}>공지사항</span>
          </div>
          <div style={{ flex: 1, height: 52, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 4px rgba(0,0,0,.08)' }}>
            <span style={{ fontSize: 19, fontWeight: 800, color: '#1f2937' }}>FAQ</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
          {faqs.map(({ q, a }) => (
            <div key={q} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 18, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ background: '#1a5fa8', color: '#fff', fontSize: 14, fontWeight: 800, padding: '4px 10px', borderRadius: 8, flex: 'none', marginTop: 2 }}>Q</span>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#1f2937', lineHeight: 1.4 }}>{q}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginTop: 14 }}>
                <span style={{ background: '#e8f1fa', color: '#1a5fa8', fontSize: 14, fontWeight: 800, padding: '4px 10px', borderRadius: 8, flex: 'none', marginTop: 2 }}>A</span>
                <div style={{ fontSize: 19, color: '#374151', lineHeight: 1.55, fontWeight: 500 }}>{a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
