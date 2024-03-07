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
        localStorage.setItem('refresh-token', res.data.token.refreshToken);
        localStorage.setItem('access-token', res.data.token.accessToken);
        localStorage.setItem('userId', res.data.email);
        router.push('/');
        return res;
      })
      .catch((err) => {
        return err;
      });
  }, [router]);

  return <div>카카오 로그인</div>;
}
