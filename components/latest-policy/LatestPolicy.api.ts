'use server';

export const getLatestPolicy = async (page: number) => {
  const response = await fetch(
    `http://43.200.250.18:8000/re/real-estate-latest-policy/selectPaging?page=${page}`,
  );
  return response.json();
};
