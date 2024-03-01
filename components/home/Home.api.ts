'use server';

export const getOnBoarding = async () => {
  const response = await fetch(
    'http://43.200.250.18:8000/re/real-estate-notice/selectAll',
  );
  return response.json();
};

export const getPolicyLetter = async () => {
  const response = await fetch(
    'http://43.200.250.18:8000/re/real-estate-policy-letter/selectAll',
  );
  return response.json();
};

export const getLatestPolicy = async () => {
  const response = await fetch(
    'http://43.200.250.18:8000/re/real-estate-latest-policy/selectPaging?page=1',
  );
  return response.json();
};
