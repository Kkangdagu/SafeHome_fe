import { useQuery } from '@tanstack/react-query';

import { queryKeys } from './queries';
import { getReview } from './ReviewService';

export const onGetReview = (id: number) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery({
    queryKey: [queryKeys.review],
    queryFn: () => getReview(id),
  });
};
