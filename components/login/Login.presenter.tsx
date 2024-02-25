import Image from 'next/image';

import { ILoginUIProps } from './Login.types';

export default function LoginUI({ onClickMoveToRegister }: ILoginUIProps) {
  return (
    <div className="h-full grid place-items-center text-white">
      <div className="w-[690px] h-full bg-[#007dff] text-center">
        <div className="relative w-[476px] h-[206px] rounded-[86px] border-[9px] border-solid border-white bg-[#007dff] mx-auto my-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] my-20">
          <div className="text-[50px] font-semibold text-left text-white absolute top-[55%] left-[10%]">
            세로운 집
          </div>
          <Image
            className="absolute top-[19%] left-[55%]"
            src="/images/home_logo_white.svg"
            alt=""
            width={151}
            height={122.75}
          />
        </div>
        <div>
          <div>
            <input
              className="w-[439px] h-[61px] rounded-[25px] bg-white border border-white outline-none text-black p-5 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
              placeholder="이메일"
            />
            <div className="relative mb-[8px] text-left ml-[150px]">
              <Image
                src="/images/alert.svg"
                alt=""
                width={15}
                height={15}
                className="inline-block absolute top-[29%]"
              />
              <div className="text-[14px] inline-block ml-[20px]">
                이메일이 올바르지 않습니다
              </div>
            </div>
          </div>
          <div className="mb-8 ">
            <input
              type="password"
              className="w-[439px] h-[61px] rounded-[25px] text-black bg-white border border-white outline-none p-5 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
              placeholder="비밀번호"
            />
            <div className="relative mb-[5px] text-left ml-[150px]">
              <Image
                src="/images/alert.svg"
                alt=""
                width={15}
                height={15}
                className="inline-block absolute top-[29%]"
              />
              <div className="text-[14px] inline-block ml-[20px]">
                비밀번호가 올바르지 않습니다
              </div>
            </div>
          </div>
          <button
            type="button"
            className="w-[446px] h-[61px] rounded-[25px] bg-[#1B35BB] text-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mb-4">
            로그인
          </button>
          <div className="text-lg flex flex-row justify-center mb-16">
            <div className="relative">
              <Image
                src="/images/lock.svg"
                alt=""
                width={15}
                height={20}
                className="inline-block absolute left-[-15%] top-[7%]"
              />
              <button type="button" className="inline-block">
                이메일 / 비밀번호 찾기
              </button>
            </div>
            <div className="mx-12">|</div>
            <button type="button" onClick={onClickMoveToRegister}>
              회원가입
            </button>
          </div>
          <div>
            <div
              className="flex items-center basis-full text-white text-lg mb-8 
            before:content-[''] before:grow before:h-px before:bg-[#ffffff] before:ml-32 before:mr-8
            after:content-[''] after:grow after:h-px after:bg-[#ffffff] after:mr-32 after:ml-8">
              간편 로그인
            </div>
            <div className="flex flex-row justify-center">
              <button
                type="button"
                className="relative w-[65px] h-[65px] rounded-[10px] bg-[#FEE500] mr-8 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <Image
                  className="absolute top-1/4 left-[22%]"
                  src="/images/kakao_logo.svg"
                  width={38}
                  height={35}
                  alt=""
                />
              </button>
              <button
                type="button"
                className="relative w-[65px] h-[65px] rounded-[10px] bg-white ml-8 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <Image
                  className="absolute top-[18%] left-[18%]"
                  src="/images/google_logo.svg"
                  width={43}
                  height={43}
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
