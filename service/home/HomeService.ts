import { url } from '../Service';

export async function getLatestPolicy(page: number) {
  const response = await fetch(`${url.latest}?page=${page}`);

  return response.json();
}

export async function getOnboarding() {
  const response = await fetch(url.onboarding);

  return response.json();
}

export async function getPolicyLetter() {
  const response = await fetch(url.letter);

  return response.json();
}
