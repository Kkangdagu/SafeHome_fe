import { useQuery } from '@tanstack/react-query';

import { getLatestPolicy, getOnboarding } from './HomeService';
import { queryKeys } from './queries';

export const onGetLatestPolicy = (page: number) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery({
    queryKey: [queryKeys.latest, page],
    queryFn: () => getLatestPolicy(page),
  });
};

export const onGetOnboarding = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery({
    queryKey: [queryKeys.onboarding],
    queryFn: getOnboarding,
  });
};
