import { url } from '../Service';

export async function getContract(email: string) {
  const response = await url.contract(email);

  return response.data;
}
