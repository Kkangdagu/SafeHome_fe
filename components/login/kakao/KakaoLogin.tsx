'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function KakaoLogin() {
  const router = useRouter();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/login/oauth2/code/kakao/request`,
        {
          params: { code },
        },
      )
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem(
            'refresh-token',
            res.data.body.token.refreshToken,
          );
          localStorage.setItem('access-token', res.data.body.token.accessToken);
          localStorage.setItem('userId', res.data.body.email);
          router.push('/');
        }
      });
  }, [router, code]);

  return <div>카카오 로그인</div>;
}
