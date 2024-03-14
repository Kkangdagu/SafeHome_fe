import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import HomeContainer from '@/components/home/Home.container';
import { queryKeys } from '@/service/home/queries';
import { onGetOnboarding } from '@/service/home/useHomeService';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [queryKeys.onboarding],
    queryFn: onGetOnboarding,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeContainer />
    </HydrationBoundary>
  );
}
