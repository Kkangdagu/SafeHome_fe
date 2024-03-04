'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Input from '@/components/Common/Input';

import Button from '../Common/Button';
import { ILoginUIProps } from './Login.types';

export default function LoginUI({
  onClickKakao,
  onClickGoogle,
  handleEmail,
  handlePw,
  activeLoginBtn,
  onClickEmailLogin,
  active,
}: ILoginUIProps) {
  const router = useRouter();

  return (
    <div className="w-[390px] h-screen bg-[#F2F3F6]">
      <Image
        src="/images/login_logo.svg"
        alt=""
        width={200}
        height={120}
        className="mx-auto mb-[127px] mt-[171px]"
      />
      <Input
        type="email"
        placeholder="이메일"
        id="input_email"
        className="border-0 w-[356px] h-[50px] text-[15px] rounded-[6px] mx-auto my-0 mb-[16px] focus:border focus:border-[#2551F4]"
        onChange={handleEmail}
        onKeyDown={activeLoginBtn}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        id="input_password"
        className="border-0 w-[356px] h-[50px] text-[15px] rounded-[6px] mx-auto my-0 mb-[27px] focus:border focus:border-[#2551F4]"
        onKeyDown={activeLoginBtn}
        onChange={handlePw}
      />
      <Button
        type="button"
        variant="login"
        id="login_btn"
        className="mx-auto my-0 mb-[15px]"
        onClick={onClickEmailLogin}
        disabled={!active}>
        로그인
      </Button>
      <div className="text-[13px] flex flex-row justify-center mb-[50px] text-[#B7B7B7]">
        <div className="relative">
          <button
            onClick={() => {
              router.push('/reset-pw');
            }}
            type="button"
            className="inline-block">
            비밀번호 찾기
          </button>
        </div>
        <div className="mx-[45px]">|</div>
        <button
          type="button"
          onClick={() => {
            router.push('/register');
          }}>
          회원가입
        </button>
      </div>
      <div
        className="flex items-center basis-full text-[#888888] text-[13px] mb-[32px]
            before:content-[''] before:grow before:h-px before:bg-[#888888] before:ml-[10px] before:mr-[9px]
            after:content-[''] after:grow after:h-px after:bg-[#888888] after:mr-[10px] after:ml-[9px]">
        또는
      </div>
      <Button
        type="button"
        variant="kakao"
        className="mx-auto my-0 text-[14px] font-semibold mb-[16px]"
        onClick={onClickKakao}>
        <div className="relative">
          <Image
            src="/images/login_kakao.svg"
            alt=""
            width={15}
            height={15}
            className="absolute top-[25%]"
          />
          <div className="ml-[23px]">카카오로 시작하기</div>
        </div>
      </Button>
      <Button
        type="button"
        variant="google"
        className="text-black mx-auto my-0 text-[14px] font-semibold"
        onClick={onClickGoogle}>
        <div className="relative">
          <Image
            src="/images/login_google.svg"
            alt=""
            width={15}
            height={15}
            className="absolute top-[25%]"
          />
          <div className="ml-[23px]">Google로 시작하기</div>
        </div>
      </Button>
    </div>
  );
}
