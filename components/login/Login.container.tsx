'use client';

import { useRouter } from 'next/navigation';

import MainUI from './Login.presenter';

export default function LoginDetail() {
  const router = useRouter();
  const onClickMoveToRegister = () => {
    router.push('/register');
  };

  return <MainUI onClickMoveToRegister={onClickMoveToRegister} />;
}
