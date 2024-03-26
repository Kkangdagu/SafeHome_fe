import { useQuery } from '@tanstack/react-query';

import { getContract } from './MyPageService';
import queryKeys from './queries';

export const onGetContract = (email: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery({
    queryKey: [queryKeys.contract],
    queryFn: () => getContract(email),
  });
};
