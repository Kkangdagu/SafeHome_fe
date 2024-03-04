'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '../Common/Button';
import { IRegisterOneUIProps } from './RegisterOne.types';

export default function RegisterOneUI({
  onChangeEmail,
  onChangePassword,
  onChangePasswordConfirm,
  onChangeVeriCode,
  onReset,
  activePassedRegisterOne,
  onValidMail,
  nextRegister,
  activeOne,
  email,
  passwordConfirm,
  isEmail,
  isVeriCode,
  errorEmail,
  errorPassword,
  errorPasswordConfirm,
}: IRegisterOneUIProps) {
  const router = useRouter();

  return (
    <div className="w-[390px] h-screen bg-[#F2F3F6]">
      <div className="relative h-[106px] bg-white-0">
        <button onClick={() => router.push('/')}>
          <Image
            src="/images/left_arrow.svg"
            width={14}
            height={26}
            alt=""
            className="absolute top-[60%] left-[5%]"
          />
        </button>

        <div className="text-black text-[24px] font-semibold absolute top-[58%] left-[37%]">
          회원가입
        </div>
      </div>
      <div className="border-b-[2px] border-[#A6B3CD]" />
      <div className="mt-[70px]">
        <div className="ml-[20px] mb-[90px]">
          <div className="text-left text-[18px] text-[#696E83] mb-[10px]">
            이메일
          </div>
          <div className="float-left relative">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="w-[247px] h-[37px] text-[14px] mr-[13px] text-black bg-[#F2F3F6] outline-none border-[#A6B3CD] border-b-[1px] placeholder-gray-300 float-left focus:border-[#2551F4]"
              onChange={onChangeEmail}
              onKeyUp={activePassedRegisterOne}
              placeholder="이메일 주소"
            />
            <button>
              <Image
                src="/images/delete_btn.svg"
                width={18}
                height={18}
                alt=""
                onClick={onReset}
                className="absolute top-[29%] left-[87.5%]"
              />
            </button>
          </div>
          <Button
            type="button"
            variant="veri"
            id="login_btn"
            className="float-left pt-[2px]"
            onClick={onValidMail}
            disabled={!isEmail}>
            인증받기
          </Button>
          <div
            className={`relative h-[10px] mb-[40px] text-left ${errorEmail ? 'block' : 'invisible'}`}>
            <div className="text-[11px] text-[#940000] inline-block">
              * 이메일 형식이 올바르지 않습니다
            </div>
          </div>
        </div>
        <div className="ml-[20px] mb-[90px]">
          <div className="text-left text-[18px] text-[#696E83] mb-[10px]">
            인증번호
          </div>
          <div className="float-left">
            <input
              type="password"
              id="veriCode"
              name="veriCode"
              className="w-[247px] h-[37px] text-[14px] mr-[13px] text-black bg-[#F2F3F6] outline-none border-[#A6B3CD] border-b-[1px] placeholder-gray-300 float-left focus:border-[#2551F4]"
              onChange={onChangeVeriCode}
              onKeyUp={activePassedRegisterOne}
              maxLength={6}
              placeholder="인증번호"
            />
          </div>
          <Button
            type="button"
            variant="veri"
            id="login_btn"
            className="float-left pt-[2px]"
            disabled={!isVeriCode}>
            재전송
          </Button>
          <div
            className={`relative h-[10px] mb-[40px] text-left ${isVeriCode ? 'invisible' : 'block'}`}>
            <div className="text-[11px] text-[#940000] inline-block">
              * 인증번호가 일치하지 않습니다.
            </div>
          </div>
        </div>
        <div className="ml-[20px] mb-[90px]">
          <div className="text-left text-[18px] text-[#696E83] mb-[10px]">
            비밀번호
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              className="w-[349px] h-[37px] text-[11px] mr-[13px] text-black bg-[#F2F3F6] outline-none border-[#A6B3CD] border-b-[1px] placeholder-gray-300 float-left focus:border-[#2551F4]"
              onChange={onChangePassword}
              onKeyUp={activePassedRegisterOne}
              placeholder="비밀번호는 8~16자의 숫자, 영문, 특수문자가 포함되어야 합니다."
            />
          </div>
          <div
            className={`relative h-[10px] mb-[40px] text-left ${errorPassword ? 'block' : 'invisible'}`}>
            <div className="text-[11px] text-[#940000] inline-block">
              * 비밀번호는 8~16자의 숫자, 영문, 특수문자가 포함되어야 합니다.
            </div>
          </div>
        </div>
        <div className="ml-[20px] mb-[95px]">
          <div className="text-left text-[18px] text-[#696E83] mb-[10px]">
            비밀번호 확인
          </div>
          <div className="float-left">
            <input
              type="password"
              id="passwordConfirm"
              name="passswordConfirm"
              className="w-[349px] h-[37px] text-[11px] mr-[13px] text-black bg-[#F2F3F6] outline-none border-[#A6B3CD] border-b-[1px] placeholder-gray-300 float-left focus:border-[#2551F4]"
              onChange={onChangePasswordConfirm}
              onKeyUp={activePassedRegisterOne}
              placeholder="비밀번호는 8~16자의 숫자, 영문, 특수문자가 포함되어야 합니다."
            />
          </div>
          <div
            className={`relative h-[10px] text-left ${passwordConfirm ? 'block' : 'invisible'}`}>
            <div
              className={`text-[11px] inline-block ${errorPasswordConfirm ? 'text-[#940000]' : 'text-[#007AFF]'}`}>
              {errorPasswordConfirm
                ? '* 비밀번호가 일치하지 않습니다.'
                : '* 비밀번호가 일치합니다.'}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            type="button"
            variant="register"
            id="login_btn"
            disabled={!activeOne}
            onClick={nextRegister}>
            다음
          </Button>
        </div>
      </div>
    </div>
  );
}
