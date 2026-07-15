import { useState } from 'react';

import S00_Push from './screens/S00_Push';
import S01_Home from './screens/S01_Home';
import S02_CallEntry from './screens/S02_CallEntry';
import S03_AITalking from './screens/S03_AITalking';
import S04_UserTalking from './screens/S04_UserTalking';
import S05_EmotionCheck from './screens/S05_EmotionCheck';
import S06_Complete from './screens/S06_Complete';
import S07_CounselingConnect from './screens/S07_CounselingConnect';
import S08_Emergency from './screens/S08_Emergency';
import S08b_Emergency4 from './screens/S08b_Emergency4';
import S09_BookingConfirm from './screens/S09_BookingConfirm';
import S09n_BookingForm from './screens/S09n_BookingForm';
import S09c_BookingComplete from './screens/S09c_BookingComplete';
import S10_Chat from './screens/S10_Chat';
import S11_Activity from './screens/S11_Activity';
import S12_History from './screens/S12_History';
import S12d_HistoryDetail from './screens/S12d_HistoryDetail';
import S13_Settings from './screens/S13_Settings';
import S13i_MyInfo from './screens/S13i_MyInfo';
import S13n_NotifSettings from './screens/S13n_NotifSettings';
import S13v_VoiceSettings from './screens/S13v_VoiceSettings';
import S14l_NoticeList from './screens/S14l_NoticeList';
import S14_Notice from './screens/S14_Notice';
import S14f_FAQ from './screens/S14f_FAQ';
import S15_Offline from './screens/S15_Offline';
import S16_Login from './screens/S16_Login';
import S17_SignUp from './screens/S17_SignUp';
import S18_Terms from './screens/S18_Terms';
import S19_Notifications from './screens/S19_Notifications';
import S20_Privacy from './screens/S20_Privacy';

export default function App() {
  // 방문 이력을 스택으로 유지해, 진입 경로가 여러 곳인 화면도 올바르게 뒤로 갈 수 있게 한다.
  const [history, setHistory] = useState(['S01']);
  const [fontMode, setFontMode] = useState('보통');

  const currentScreen = history[history.length - 1];
  const navigate = (id) =>
    setHistory(h => {
      if (id === h[h.length - 1]) return h;   // 같은 화면 중복 push 방지
      if (id === 'S01') return ['S01'];       // 홈은 루트 — 스택 리셋
      return [...h, id];
    });
  const goBack = () => setHistory(h => (h.length > 1 ? h.slice(0, -1) : ['S01']));

  const props = { navigate, goBack, fontMode, setFontMode, active: true };

  const screens = {
    S00: <S00_Push {...props} />,
    S01: <S01_Home {...props} />,
    S02: <S02_CallEntry {...props} />,
    S03: <S03_AITalking {...props} />,
    S04: <S04_UserTalking {...props} />,
    S05: <S05_EmotionCheck {...props} />,
    S06: <S06_Complete {...props} />,
    S07: <S07_CounselingConnect {...props} />,
    S08: <S08_Emergency {...props} />,
    S08b: <S08b_Emergency4 {...props} />,
    S09: <S09_BookingConfirm {...props} />,
    S09n: <S09n_BookingForm {...props} />,
    S09c: <S09c_BookingComplete {...props} />,
    S10: <S10_Chat {...props} />,
    S11: <S11_Activity {...props} />,
    S12: <S12_History {...props} />,
    S12d: <S12d_HistoryDetail {...props} />,
    S13: <S13_Settings {...props} />,
    S13i: <S13i_MyInfo {...props} />,
    S13n: <S13n_NotifSettings {...props} />,
    S13v: <S13v_VoiceSettings {...props} />,
    S14l: <S14l_NoticeList {...props} />,
    S14: <S14_Notice {...props} />,
    S14f: <S14f_FAQ {...props} />,
    S15: <S15_Offline {...props} />,
    S16: <S16_Login {...props} />,
    S17: <S17_SignUp {...props} />,
    S18: <S18_Terms {...props} />,
    S19: <S19_Notifications {...props} />,
    S20: <S20_Privacy {...props} />,
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh', background: '#e8eaed', padding: '40px 0' }}>
      {screens[currentScreen] ?? <div style={{ color: '#dc2626', padding: 40 }}>Screen not found: {currentScreen}</div>}
    </div>
  );
}
