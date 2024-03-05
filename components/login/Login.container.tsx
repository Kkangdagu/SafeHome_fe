'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

import LoginUI from './Login.presenter';

export default function LoginDetail() {
  const router = useRouter();

  // 초기값
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 로그인 버튼 활성화
  const [active, setActive] = useState(false);

  const activeLoginBtn = () => {
    if (!email) {
      setActive(false);
    }
    if (email && password) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
  };

  const handlePw = (e: ChangeEvent<HTMLInputElement>) => {
    const currentPw = e.target.value;
    setPassword(currentPw);
  };

  // 카카오 로그인
  const CLIENT_ID = `${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`;
  const REDIRECT_URI = `${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const onClickKakao = () => {
    window.location.replace(`${kakaoURL}`);
  };

  // 구글 로그인
  const onClickGoogle = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
		&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}
		&response_type=code
		&scope=email profile`;
  };

  const onClickEmailLogin = () => {
    const body = {
      email,
      password,
    };
    axios({
      method: 'post',
      url: 'http://43.200.250.18:8000/login',
      data: body,
    })
      .then((res) => {
        localStorage.setItem('refresh-token', res.data.body.refreshToken);
        localStorage.setItem('access-token', res.data.body.accessToken);
        localStorage.setItem('userId', email);
        router.push('/');
        return res;
      })
      .catch((err) => {
        return err;
      });
  };
  return (
    <LoginUI
      onClickKakao={onClickKakao}
      onClickEmailLogin={onClickEmailLogin}
      onClickGoogle={onClickGoogle}
      handleEmail={handleEmail}
      handlePw={handlePw}
      activeLoginBtn={activeLoginBtn}
      active={active}
    />
  );
}
