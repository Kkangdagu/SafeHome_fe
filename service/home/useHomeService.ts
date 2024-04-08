import { useQuery } from '@tanstack/react-query';

import { getLatestPolicy, getOnboarding, getPolicyLetter } from './HomeService';
import { queryKeys } from './queries';

export const onGetLatestPolicy = (page: number) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery({
    queryKey: [queryKeys.latest],
    queryFn: () => getLatestPolicy(page),
  });
};

export const onGetOnboarding = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery({
    queryKey: [queryKeys.onboarding],
    queryFn: getOnboarding,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });
};

export const onGetPolicyLetter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery({
    queryKey: [queryKeys.letter],
    queryFn: getPolicyLetter,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
