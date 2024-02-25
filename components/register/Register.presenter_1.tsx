import Image from 'next/image';

import alert_red from '../../public/images/alert_red.svg';
import { IRegisterUIProps } from './Register.types';

export default function RegisterOneUI({
  setVisible,
  onChangeEmail,
  isEmail,
}: IRegisterUIProps) {
  const nextPage = () => {
    setVisible(false);
  };
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-[690px] h-full bg-[#FAFAFA] text-center">
        <div className="relative mt-[60px]  ml-[50px]">
          <Image
            src="/images/right_arrow.svg"
            width={16}
            height={27}
            alt=""
            className="absolute top-[10%]"
          />
          <div className="text-[#686868] text-[40px] text-left font-semibold ml-[33px]">
            회원 가입
          </div>
          <Image
            src="/images/home_logo_blue.svg"
            width={73}
            height={55}
            alt=""
            className="absolute top-[-40%] left-[32%]"
          />
        </div>
        <div className="text-center mt-24 mb-[10px]">
          <div className="relative mb-[2px]">
            <div className="absolute text-[#B7B7B7] text-[24px] left-[12%] top-[31%]">
              이메일
            </div>
            <input
              type="email"
              className="w-[560px] h-[75px] pl-[100px] text-[#686868] outline-none rounded-[25px] border-[#b7b7b7] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] placeholder-gray-300"
              onChange={onChangeEmail}
            />
            <button
              type="button"
              className="absolute top-[19%] left-[74%] left-5 w-[100px] height-[30px] rounded-[50px] bg-[#B7B7B7] text-[#ffffff] text-[15px] py-[14px] px-[2px] border-[#ffffff] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
              인증 받기
            </button>
            <div
              className={`relative h-[10px] mb-[5px] text-left ml-[150px] mb-[50px] ${isEmail ? 'invisible' : 'block'}`}>
              <Image
                src={alert_red}
                alt=""
                width={15}
                height={15}
                className="inline-block absolute top-[140%] left-[-10%]"
              />
              <div className="text-[15px] text-[#940000] inline-block absolute top-[150%] left-[-6%]">
                이메일 형식이 올바르지 않습니다
              </div>
            </div>
          </div>
          <div className="relative text-left ml-[65px]">
            <div className="absolute text-[#B7B7B7] text-[24px] left-[3%] top-[31%]">
              인증번호
            </div>
            <input
              type="email"
              className="w-[378px] h-[75px] text-[20px] pl-[120px] pt-[1px] text-[#686868] placeholder-gray-300 outline-none rounded-[25px] border-solid border-[#b7b7b7] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
              placeholder="6자리"
            />
            <button
              type="button"
              className="absolute top-[19%] left-[42%] left-5 w-[100px] height-[30px] rounded-[50px] bg-[#B7B7B7] text-[#ffffff] text-[15px] py-[14px] px-[2px] border-[#ffffff] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
              재인증
            </button>
            <div className="relative h-[10px] mb-[5px] text-left ml-[150px] mb-[50px]">
              <Image
                src="/images/alert_red.svg"
                alt=""
                width={15}
                height={15}
                className="inline-block absolute top-[140%] left-[-25%]"
              />
              <div className="text-[15px] text-[#940000] inline-block absolute top-[150%] left-[-20%]">
                인증번호가 일치하지 않습니다
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute text-[#B7B7B7] text-[24px] left-[12%] top-[12%] ">
              비밀번호
            </div>
            <input
              type="password"
              className="w-[560px] h-[75px] text-[24px] pl-[120px] text-[#686868] placeholder:text-[16px] placeholder-gray-300 outline-none rounded-[25px] border-solid border-[#b7b7b7] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] "
              placeholder="비밀번호는 8~16자의 숫자, 영문, 특수문자가 포함되어야 합니다"
            />
            <div className="relative h-[10px] mb-[5px] text-left ml-[150px] mb-[50px]">
              <Image
                src="/images/alert_red.svg"
                alt=""
                width={15}
                height={15}
                className="inline-block absolute top-[140%] left-[-10%]"
              />
              <div className="text-[15px] text-[#940000] inline-block absolute top-[150%] left-[-6%]">
                비밀번호는 8~16자의 숫자, 영문, 특수문자가 포함되어야 합니다
              </div>
            </div>
            <div className="absolute text-[#B7B7B7] text-[24px] left-[12%] top-[73%] ">
              비밀번호 확인
            </div>
            <input
              type="password"
              className="w-[560px] h-[75px] pl-[160px] outline-none rounded-[25px] text-[#686868] border-solid border-[#b7b7b7] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
            <div className="relative h-[10px] mb-[5px] text-left ml-[150px] mb-[50px]">
              <Image
                src="/images/alert_red.svg"
                alt=""
                width={15}
                height={15}
                className="inline-block absolute top-[140%] left-[-10%]"
              />
              <div className="text-[15px] text-[#940000] inline-block absolute top-[150%] left-[-6%]">
                비밀번호가 일치하지 않습니다
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="w-[195px] h-[60px] rounded-[25px] bg-[#1B35BB] text-2xl text-[#ffffff] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[26px]"
          onClick={nextPage}>
          다음
        </button>
      </div>
    </div>
  );
}
