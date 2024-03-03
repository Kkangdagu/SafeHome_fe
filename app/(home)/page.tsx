import { getLatestPolicy, getOnBoarding } from '@/components/home/Home.api';
import HomeContainer from '@/components/home/Home.container';

export default async function Home() {
  const onBoarding = await getOnBoarding();
  const onLatestPolicy = await getLatestPolicy();

  return (
    <HomeContainer onBoarding={onBoarding} onLatestPolicy={onLatestPolicy} />
  );
}
