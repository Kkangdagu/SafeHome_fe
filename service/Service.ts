import instance from '@/utils/intercepter';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const url = {
  latest: `${baseUrl}/re/real-estate-latest-policy/selectPaging`,
  onboarding: `${baseUrl}/re/real-estate-notice/selectAll`,
  letter: `${baseUrl}/re/real-estate-policy-letter/selectAll`,
  review: `${baseUrl}/member/contract/selectOne`,
  contract: (email: string) =>
    instance.get('/member/contract/seleteAll', {
      params: { email },
    }),
};

export { url };
