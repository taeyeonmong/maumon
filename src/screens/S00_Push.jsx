import { HeartHandshake, Bot, MessageCircle } from 'lucide-react';

// 푸시 알림 (잠금화면 스타일). 상황에 맞는 안부 메시지를 먼저 건네고,
// 누르면 대화가 시작된다. (트리거 정보는 사용자에게 노출하지 않음 — 어드민 전용)
const push = {
  title: '방금 외출 다녀오셨나요?',
  body: '날씨가 많이 덥죠?\n잠깐 이야기 나눠볼까요?',
};

export default function S00_Push({ navigate }) {
  return (
    <div
      className="mo-screen"
      style={{
        height: 1024, border: '1px solid #0e3157',
        background: 'linear-gradient(165deg, #1a5fa8 0%, #14467a 55%, #0e3157 100%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', padding: '0 40px',
      }}
    >
      {/* 잠금화면 시계 */}
      <div style={{ textAlign: 'center', marginTop: 92 }}>
        <div style={{ fontSize: 22, color: 'rgba(255,255,255,.8)', fontWeight: 600 }}>7월 14일 화요일</div>
        <div style={{ fontSize: 96, fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.05, marginTop: 4 }}>2:30</div>
      </div>

      {/* 푸시 알림 카드 (탭하면 대화 시작) */}
      <div
        onClick={() => navigate('S02')}
        style={{
          cursor: 'pointer', marginTop: 56, width: '100%',
          background: 'rgba(255,255,255,.98)', borderRadius: 32,
          padding: '32px 32px 36px', boxShadow: '0 16px 40px rgba(0,0,0,.28)',
        }}
      >
        {/* 앱 헤더 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <span style={{ width: 44, height: 44, borderRadius: 12, background: '#1a5fa8', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <HeartHandshake size={26} color="#fff" />
          </span>
          <span style={{ flex: 1, fontSize: 19, fontWeight: 800, color: '#1a5fa8' }}>마음온</span>
          <span style={{ fontSize: 15, color: '#9ca3af', fontWeight: 600 }}>지금</span>
        </div>

        {/* 캐릭터 */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <span style={{
            width: 168, height: 168, borderRadius: 999, background: '#e8f1fa',
            border: '3px solid #1a5fa8', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Bot size={100} color="#1a5fa8" />
          </span>
        </div>

        <div style={{ textAlign: 'center', fontSize: 36, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em', lineHeight: 1.3 }}>{push.title}</div>
        <div style={{ textAlign: 'center', fontSize: 26, color: '#374151', fontWeight: 600, lineHeight: 1.45, marginTop: 12, whiteSpace: 'pre-line' }}>{push.body}</div>

        {/* 탭 유도 버튼 */}
        <div style={{
          marginTop: 28, height: 96, borderRadius: 20, background: '#1a5fa8',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14,
          boxShadow: '0 6px 16px rgba(26,95,168,.3)',
        }}>
          <MessageCircle size={36} color="#fff" />
          <span style={{ fontSize: 30, fontWeight: 800, color: '#fff' }}>네, 대화 나눌래요</span>
        </div>
      </div>

      <div
        onClick={() => navigate('S01')}
        style={{ cursor: 'pointer', marginTop: 28, fontSize: 21, color: 'rgba(255,255,255,.85)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 4 }}
      >
        나중에 할게요
      </div>
    </div>
  );
}
