import { UserRound, ChevronLeft, Mic } from 'lucide-react';
import StatusBar from '../components/StatusBar';

export default function S10_Chat({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#eef1f5', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ background: '#fff', borderBottom: '1px solid #e5e7eb', padding: '16px 32px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <span onClick={() => navigate('S01')} style={{ cursor: 'pointer' }}>
          <ChevronLeft size={28} color="#1f2937" />
        </span>
        <span style={{
          position: 'relative', width: 52, height: 52, borderRadius: 999,
          background: '#eef1f5', border: '1px solid #e5e7eb',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <UserRound size={30} color="#6b7280" />
          <span style={{ position: 'absolute', bottom: 0, right: 0, width: 15, height: 15, borderRadius: 999, background: '#2f9e6b', border: '2px solid #fff' }} />
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 21, fontWeight: 800, color: '#1f2937' }}>김민정 상담사</div>
          <div style={{ fontSize: 15, color: '#2f9e6b', fontWeight: 600 }}>● 온라인</div>
        </div>
        <span style={{ fontSize: 14, color: '#9ca3af', background: '#f1f3f5', padding: '5px 12px', borderRadius: 999, fontWeight: 600 }}>참고용 화면</span>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18, padding: '26px 32px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end', maxWidth: '78%' }}>
          <span style={{ width: 40, height: 40, borderRadius: 999, background: '#eef1f5', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <UserRound size={24} color="#6b7280" />
          </span>
          <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 22, borderBottomLeftRadius: 6, padding: '18px 22px', fontSize: 22, color: '#1f2937', lineHeight: 1.45, fontWeight: 500 }}>
            안녕하세요 어르신, 오늘 기분은 좀 어떠세요?
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: '#1a5fa8', borderRadius: 22, borderBottomRightRadius: 6, padding: '18px 22px', fontSize: 22, color: '#fff', lineHeight: 1.45, fontWeight: 500, maxWidth: '78%' }}>
            네, 오늘은 좀 외롭네요.
          </div>
        </div>
      </div>
      <div style={{ background: '#fff', borderTop: '1px solid #e5e7eb', padding: '18px 28px 26px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ flex: 1, height: 64, borderRadius: 999, background: '#f1f3f5', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', padding: '0 24px', fontSize: 19, color: '#9ca3af', fontWeight: 500 }}>
          메시지를 입력하세요
        </div>
        <span style={{ cursor: 'pointer', width: 72, height: 72, borderRadius: 999, background: '#2f9e6b', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
          <Mic size={36} color="#fff" />
        </span>
      </div>
    </div>
  );
}
