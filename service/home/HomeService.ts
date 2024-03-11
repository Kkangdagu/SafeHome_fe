import { url } from '../Service';

export async function getLatestPolicy(page: number) {
  const response = await fetch(`${url.latest}?page=${page}`);

  return response.json();
}
