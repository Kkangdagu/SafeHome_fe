'use client';

import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

import { isLogin } from '@/utils/isLogin';

import MyPageUI from './MyPage.presenter';

export default function MyPageContainer() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  // 로그인 확인
  useEffect(() => {
    if (!isLogin()) {
      redirect('/login');
    }
    setName(localStorage.getItem('name')!);
    setEmail(localStorage.getItem('userId')!);
  }, []);

  return <MyPageUI email={email} name={name} />;
}
