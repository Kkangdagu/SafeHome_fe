import {
  getLatestPolicy,
  getOnBoarding,
  getPolicyLetter,
} from '@/components/home/Home.api';
import HomeContainer from '@/components/home/Home.container';

export default async function Home() {
  const onBoarding = await getOnBoarding();
  const onPolicyLetter = await getPolicyLetter();
  const onLatestPolicy = await getLatestPolicy();

  return (
    <HomeContainer onBoarding={onBoarding} onLatestPolicy={onLatestPolicy} />
  );
}
