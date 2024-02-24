import { PiDotOutlineFill } from 'react-icons/pi';

import { SubContainer } from '../Layout';

export default function Analyzing() {
  return (
    <SubContainer>
      <p>분석중</p>
      <div className="flex items-center justify-center">
        <PiDotOutlineFill className="dot" />
        <PiDotOutlineFill className="dot dot1" />
        <PiDotOutlineFill className="dot dot2" />
        <PiDotOutlineFill className="dot dot2" />
      </div>
    </SubContainer>
  );
}
