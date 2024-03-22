const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const url = {
  latest: `${baseUrl}/re/real-estate-latest-policy/selectPaging`,
  onboarding: `${baseUrl}/re/real-estate-notice/selectAll`,
  letter: `${baseUrl}/re/real-estate-policy-letter/selectAll`,
  review: `${baseUrl}/member/contract/selectOne`,
};

export { url };
