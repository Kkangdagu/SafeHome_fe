'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

import { isLogin } from '@/utils/isLogin';

import MyPageUI from './MyPage.presenter';

export default function MyPageContainer() {
  // 로그인 확인
  useEffect(() => {
    if (!isLogin()) {
      redirect('/');
    }
  }, []);

  return <MyPageUI />;
}
