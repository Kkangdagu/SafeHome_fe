import instance from '@/utils/intercepter';

import { url } from '../Service';

export async function getReview(id: number) {
  const response = await instance.get(`${url.review}/${id}`);

  return response;
}
