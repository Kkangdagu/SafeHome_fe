import Image from 'next/image';

import { ILoginUIProps } from './Login.types';

export default function LoginUI({
  onClickMoveToRegister,
  isEmail,
  isPassword,
  onClickKakao,
}: ILoginUIProps) {
  return (
    <div className="grid h-screen place-items-center bg-[#fffff] text-white">
      <div className="w-[390px] h-screen bg-[#007dff] text-center">
        <div className="relative w-[300px] h-[150px] rounded-[86px] border-[9px] border-solid border-white bg-[#007dff] mx-auto my-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] my-20">
          <div className="text-[35px] font-semibold text-left text-white absolute top-[50%] left-[10%]">
            세로운 집
          </div>
          <Image
            className="absolute top-[22%] left-[60%]"
            src="/images/home_logo_white.svg"
            alt=""
            width={95}
            height={122.75}
          />
        </div>
        <div>
          <div>
            <input
              className="w-[358px] h-[55px] text-[20px] rounded-[25px] bg-white border border-white outline-none text-black p-5 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
              placeholder="이메일"
            />
            <div
              className={`relative mb-[8px] text-left ml-[70px] ${isEmail ? 'visible' : 'block'}`}>
              <Image
                src="/images/alert.svg"
                alt=""
                width={13}
                height={13}
                className="inline-block absolute top-[35%]"
              />
              <div className="text-[13px] inline-block ml-[18px]">
                이메일이 올바르지 않습니다
              </div>
            </div>
          </div>
          <div className="mb-8 ">
            <input
              type="password"
              className="w-[358px] h-[55px] text-[20px] rounded-[25px] text-black bg-white border border-white outline-none p-5 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
              placeholder="비밀번호"
            />
            <div
              className={`relative mb-[5px] text-left ml-[70px] ${isPassword ? 'visible' : 'block'}`}>
              <Image
                src="/images/alert.svg"
                alt=""
                width={13}
                height={13}
                className="inline-block absolute top-[35%]"
              />
              <div className="text-[13px] inline-block ml-[18px]">
                비밀번호가 올바르지 않습니다
              </div>
            </div>
          </div>
          <button
            type="button"
            className="w-[300px] h-[55px] text-[20px] rounded-[25px] bg-[#1B35BB] text-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mb-4">
            로그인
          </button>
          <div className="text-[13px] flex flex-row justify-center mb-16">
            <div className="relative">
              <Image
                src="/images/lock.svg"
                alt=""
                width={10}
                height={20}
                className="inline-block absolute left-[-15%] top-[-18%]"
              />
              <button type="button" className="inline-block">
                이메일 / 비밀번호 찾기
              </button>
            </div>
            <div className="mx-8">|</div>
            <button type="button" onClick={onClickMoveToRegister}>
              회원가입
            </button>
          </div>
          <div>
            <div
              className="flex items-center basis-full text-white text-[15px] mb-12
            before:content-[''] before:grow before:h-px before:bg-[#ffffff] before:ml-12 before:mr-8
            after:content-[''] after:grow after:h-px after:bg-[#ffffff] after:mr-12 after:ml-8">
              간편 로그인
            </div>
            <div className="flex flex-row justify-center">
              <button
                type="button"
                className="relative w-[55px] h-[55px] rounded-[10px] bg-[#FEE500] mr-[20px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                onClick={onClickKakao}>
                <Image
                  className="absolute top-[24%] left-[21%]"
                  src="/images/kakao_logo.svg"
                  width={33}
                  height={35}
                  alt=""
                />
              </button>
              <button
                type="button"
                className="relative w-[55px] h-[55px] rounded-[10px] bg-white ml-[20px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <Image
                  className="absolute top-[20%] left-[20%]"
                  src="/images/google_logo.svg"
                  width={35}
                  height={35}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
