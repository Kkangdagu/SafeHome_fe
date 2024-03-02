'use client';

import { useEffect } from 'react';
import axios from 'axios';

export default function KakaoLogin() {
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    axios
      .get('', code)
      .then((r) => {
        console.log(r.data);
        localStorage.setItem('name', r.data.user_name);

        console.log('성공');
      })
      .catch((err) => {
        console.log('소셜로그인 에러', err);
        window.alert('로그인에 실패했습니다');
      });
  }, [code]);

  return <>로그인 성공!</>;
}
