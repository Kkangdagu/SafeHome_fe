'use client';

import { useState } from 'react';

import OnboardingUI from './Onboarding.presenter';

export default function OnboardingContainer() {
  const [show, setShow] = useState(false);

  const onFooterShow = () => {
    setShow(!show);
  };
  return <OnboardingUI show={show} onFooterShow={onFooterShow} />;
}
