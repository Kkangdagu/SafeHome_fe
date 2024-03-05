'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function KakaoLogin() {
  const router = useRouter();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    axios
      .get('http://43.200.250.18:8000/login/oauth2/code/kakao', {
        params: { code },
      })
      .then((res) => {
        console.log('fffff');
        return res;
      })
      .catch((err) => {
        return err;
      });
  }, [router]);

  return <div>카카오 로그인</div>;
}
