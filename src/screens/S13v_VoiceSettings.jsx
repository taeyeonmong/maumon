import { Volume1, Volume2, UserRound, Play } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackBtn from '../components/BackBtn';

const speeds = ['느리게', '보통', '빠르게'];
const voices = ['여성·중년', '남성·중년', '여성·젊음'];

export default function S13v_VoiceSettings({ navigate }) {
  return (
    <div className="mo-screen" style={{ background: '#f4f5f7', border: '1px solid #cdd2d8' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px 32px 28px', gap: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BackBtn onClick={() => navigate('S13')} />
          <span style={{ fontSize: 26, fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>음성 설정</span>
        </div>

        {/* Volume */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: '#1f2937' }}>음량</span>
            <span style={{ fontSize: 22, fontWeight: 800, color: '#1a5fa8' }}>7</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 14 }}>
            <Volume1 size={26} color="#6b7280" style={{ flex: 'none' }} />
            <div style={{ flex: 1, height: 14, borderRadius: 999, background: '#e5e7eb', position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '70%', borderRadius: 999, background: '#1a5fa8' }} />
              <span style={{ position: 'absolute', left: '70%', top: '50%', transform: 'translate(-50%,-50%)', width: 34, height: 34, borderRadius: 999, background: '#fff', border: '3px solid #1a5fa8', boxShadow: '0 2px 6px rgba(0,0,0,.2)' }} />
            </div>
            <Volume2 size={26} color="#6b7280" style={{ flex: 'none' }} />
          </div>
        </div>

        {/* Speed */}
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, color: '#1f2937' }}>말 속도</div>
          <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
            {speeds.map((s, i) => (
              <div
                key={s}
                style={{
                  cursor: 'pointer', flex: 1, height: 72, borderRadius: 16,
                  background: i === 1 ? '#1a5fa8' : '#fff',
                  border: i === 1 ? 'none' : '1.5px solid #e5e7eb',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 21, fontWeight: i === 1 ? 800 : 700,
                  color: i === 1 ? '#fff' : '#6b7280',
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Voice tone */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: '#1f2937' }}>음색</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 17, fontWeight: 700, color: '#1a5fa8', cursor: 'pointer' }}>
              <Play size={20} color="#1a5fa8" />미리 듣기
            </span>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
            {voices.map((v, i) => (
              <div
                key={v}
                style={{
                  cursor: 'pointer', flex: 1, height: 108, borderRadius: 18,
                  background: i === 0 ? '#e8f1fa' : '#fff',
                  border: i === 0 ? '2.5px solid #1a5fa8' : '1.5px solid #e5e7eb',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8,
                }}
              >
                <UserRound size={34} color={i === 0 ? '#1a5fa8' : '#6b7280'} />
                <span style={{ fontSize: 18, fontWeight: i === 0 ? 800 : 700, color: i === 0 ? '#1a5fa8' : '#6b7280' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          onClick={() => navigate('S13')}
          className="mo-btn-primary"
          style={{ marginTop: 'auto' }}
        >
          저장하기
        </div>
      </div>
    </div>
  );
}
