'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function GoogleLogin() {
  const router = useRouter();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    axios
      .get('http://43.200.250.18:8000/login/oauth2/code/google', {
        params: { code },
      })
      .then((res) => {
        console.log(res);
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
  return <div>구글 로그인</div>;
}
