'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import MainUI from './Login.presenter';

export default function LoginDetail() {
  const router = useRouter();

  // 초기값
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 검사
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);

  const onClickMoveToRegister = () => {
    router.push('/register');
  };

  // 카카오 로그인
  const CLIENT_ID = `${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`;
  const REDIRECT_URI = `${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}`;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const onClickKakao = () => {
    console.log(CLIENT_ID);
    window.location.replace(`${kakaoURL}`);
  };

  // 구글 로그인
  const onClickGoogle = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
		&redirect_uri=${process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI}
		&response_type=code
		&scope=email profile`;
  };

  return (
    <MainUI
      onClickMoveToRegister={onClickMoveToRegister}
      onClickKakao={onClickKakao}
      isEmail={isEmail}
      isPassword={isPassword}
    />
  );
}
