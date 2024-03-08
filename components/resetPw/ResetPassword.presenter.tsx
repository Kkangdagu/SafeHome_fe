'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '../Common/Button';
import { IResetPwUIProps } from './ResetPassword.types';

export default function ResetPasswordUI({
  onChangeBirthDate,
  onChangeEmail,
  onChangeName,
  onChangePhone,
  activeBtn,
  activeFindBtn,
  findPwd,
}: IResetPwUIProps) {
  const router = useRouter();
  return (
    <div className="w-[390px] h-screen bg-[#F2F3F6]">
      <div className="relative h-[106px] bg-white-0">
        <button onClick={() => router.push('/login')}>
          <Image
            src="/images/left_arrow.svg"
            width={14}
            height={26}
            alt=""
            className="absolute top-[60%] left-[5%]"
          />
        </button>
        <div className="text-black text-[24px] font-semibold absolute top-[58%] left-[30%]">
          비밀번호 찾기
        </div>
      </div>
      <div className="border-b-[2px] border-[#A6B3CD]" />
      <div className="mt-[70px]">
        <div className="ml-[20px] mb-[90px]">
          <div className="text-left text-[18px] text-[#696E83] mb-[10px]">
            이메일
          </div>
          <div>
            <input
              type="text"
              id="email"
              name="email"
              className="w-[349px] h-[37px] text-[14px] mr-[13px] text-black bg-[#F2F3F6] outline-none border-[#A6B3CD] border-b-[1px] placeholder-gray-300 float-left focus:border-[#2551F4]"
              placeholder="이메일"
              onChange={onChangeEmail}
              onKeyUp={activeFindBtn}
            />
          </div>
        </div>
        <div className="ml-[20px] mb-[90px]">
          <div className="text-left text-[18px] text-[#696E83] mb-[10px]">
            이름
          </div>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              className="w-[349px] h-[37px] text-[14px] mr-[13px] text-black bg-[#F2F3F6] outline-none border-[#A6B3CD] border-b-[1px] placeholder-gray-300 float-left focus:border-[#2551F4]"
              placeholder="이름"
              onChange={onChangeName}
              onKeyUp={activeFindBtn}
            />
          </div>
        </div>
        <div className="ml-[20px] mb-[90px]">
          <div className="text-left text-[18px] text-[#696E83] mb-[10px]">
            생년월일
          </div>
          <div>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              className="w-[349px] h-[37px] text-[14px] pr-[1px] mr-[13px] text-black bg-[#F2F3F6] outline-none border-[#A6B3CD] border-b-[1px] placeholder-gray-300 float-left focus:border-[#2551F4]"
              placeholder="0000-00-00"
              onChange={onChangeBirthDate}
              onKeyUp={activeFindBtn}
            />
          </div>
        </div>
        <div className="ml-[20px] mb-[95px]">
          <div className="text-left text-[18px] text-[#696E83] mb-[10px]">
            전화번호
          </div>
          <div className="float-left">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-[349px] h-[37px] text-[14px] mr-[13px] text-black bg-[#F2F3F6] outline-none border-[#A6B3CD] border-b-[1px] placeholder-gray-300 float-left focus:border-[#2551F4]"
              placeholder="000-0000-0000"
              onChange={onChangePhone}
              onKeyUp={activeFindBtn}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          type="button"
          variant="register"
          id="search_btn"
          disabled={!activeBtn}
          onClick={findPwd}>
          비밀번호 재발급
        </Button>
      </div>
    </div>
  );
}
