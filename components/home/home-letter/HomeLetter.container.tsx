import { onGetPolicyLetter } from '@/service/home/useHomeService';

import HomeLetterPresenter from './HomeLetter.presenter';

export default function HomeLetterContainer() {
  const { data, isError } = onGetPolicyLetter();

  if (isError) {
    // eslint-disable-next-line no-alert
    alert(data.head.resultMsg);
  }
  return <HomeLetterPresenter data={data} />;
}
