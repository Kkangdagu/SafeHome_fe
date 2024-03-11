import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import LatestPolicyContainer from '@/components/latest-policy/Latest.container';
import { queryKeys } from '@/service/home/queries';
import { onGetLatestPolicy } from '@/service/home/useHomeService';

export default async function test(page: number) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [queryKeys.latest, page],
    queryFn: () => onGetLatestPolicy(page),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LatestPolicyContainer />
    </HydrationBoundary>
  );
}
