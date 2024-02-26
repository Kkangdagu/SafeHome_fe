import Image from 'next/image';

import alert_red from '../../public/images/alert_red.svg';
import { IRegisterUIProps } from './Register.types';

export default function RegisterOneUI({
  setVisible,
  onChangeEmail,
  onChangePassword,
  onChangePasswordConfirm,
  isEmail,
  isPassword,
  isPasswordConfirm,
  isVeriCode,
}: IRegisterUIProps) {
  const nextPage = () => {
    setVisible(false);
  };
  return (
    <div className="grid h-screen place-items-center">
      <div className="w-[390px] h-[100vh] bg-[#FAFAFA] text-center">
        <div className="relative h-[40px]">
          <Image
            src="/images/right_arrow.svg"
            width={14}
            height={27}
            alt=""
            className="absolute top-[90%] left-[10%]"
          />
          <div className="text-[#686868] text-[30px] text-left font-semibold absolute top-[88%] left-[18%]">
            회원 가입
          </div>
          <Image
            src="/images/home_logo_blue.svg"
            width={50}
            height={55}
            alt=""
            className="absolute left-[50%] top-[65%]"
          />
        </div>
        <div className="text-center mt-24">
          <div className="relative">
            <div className="absolute text-[#B7B7B7] text-[20px] left-[11%] top-[30%]">
              이메일
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className="w-[340px] h-[60px] pl-[80px] text-[15px] text-[#686868] outline-none rounded-[25px] border-[#b7b7b7] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] placeholder-gray-300"
              onChange={onChangeEmail}
            />
            <button
              type="button"
              className="absolute top-[14%] left-[72%] left-5 w-[75px] height-[20px] rounded-[50px] bg-[#B7B7B7] text-[#ffffff] text-[12px] py-[12px] border-[#ffffff] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
              인증 받기
            </button>
            <div
              className={`relative h-[10px] mb-[40px] text-left ml-[150px] ${isEmail ? 'invisible' : 'block'}`}>
              <Image
                src={alert_red}
                alt=""
                width={13}
                height={13}
                className="inline-block absolute top-[140%] left-[-40%]"
              />
              <div className="text-[13px] text-[#940000] inline-block absolute top-[150%] left-[-33%]">
                이메일 형식이 올바르지 않습니다
              </div>
            </div>
          </div>
          <div className="relative text-left ml-[27px]">
            <div className="absolute text-[#B7B7B7] text-[20px] left-[5%] top-[30%]">
              인증번호
            </div>
            <input
              type="text"
              id="veriCode"
              name="veriCode"
              className="w-[300px] h-[60px] text-[15px] pl-[100px] pt-[1px] text-[#686868] placeholder-gray-300 outline-none rounded-[25px] border-solid border-[#b7b7b7] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
              placeholder="6자리"
              maxLength={6}
            />
            <button
              type="button"
              className="absolute top-[15%] left-[59%] w-[75px] height-[20px] rounded-[50px] bg-[#B7B7B7] text-[#ffffff] text-[12px] py-[12px] border-[#ffffff] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
              재인증
            </button>
            <div
              className={`relative h-[10px] mb-[40px] text-left ml-[150px] ${isVeriCode ? 'invisible' : 'block'}`}>
              <Image
                src={alert_red}
                alt=""
                width={13}
                height={13}
                className="inline-block absolute top-[140%] left-[-58%]"
              />
              <div className="text-[13px] text-[#940000] inline-block absolute top-[150%] left-[-50%]">
                인증번호가 일치하지 않습니다
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute text-[#B7B7B7] text-[20px] left-[12%] top-[30%] ">
              비밀번호
            </div>
            <input
              type="password"
              id="password"
              name="password"
              className="w-[340px] h-[60px] pl-[100px] text-[15px] text-[#686868] outline-none rounded-[25px] border-[#b7b7b7] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] placeholder-gray-300 placeholder-[10px]"
              placeholder="8~16자의 숫자, 영문, 특수문자 포함"
              maxLength={16}
              onChange={onChangePassword}
            />
            <div
              className={`relative h-[10px] mb-[40px] text-left ml-[150px] ${isPassword ? 'invisible' : 'block'}`}>
              <Image
                src="/images/alert_red.svg"
                alt=""
                width={13}
                height={13}
                className="inline-block absolute top-[140%] left-[-40%]"
              />
              <div className="text-[13px] text-[#940000] inline-block absolute top-[150%] left-[-33%] whitespace-pre-wrap">
                비밀번호는 8~16자의 숫자, 영문, 특수문자가 <br />
                포함되어야 합니다
              </div>
            </div>
          </div>
          <div className="relative mb-[50px]">
            <div className="absolute text-[#B7B7B7] text-[20px] left-[12%] top-[31%] ">
              비밀번호 확인
            </div>
            <input
              type="password"
              onChange={onChangePasswordConfirm}
              className="w-[340px] h-[60px] pl-[140px] outline-none rounded-[25px] text-[#686868] text-[15px] border-solid border-[#b7b7b7] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
            <div
              className={`relative h-[10px] mb-[5px] text-left ml-[150px] ${isPasswordConfirm ? 'invisible' : 'block'}`}>
              <Image
                src="/images/alert_red.svg"
                alt=""
                width={13}
                height={13}
                className="inline-block absolute top-[140%] left-[-40%]"
              />
              <div className="text-[13px] text-[#940000] inline-block absolute top-[150%] left-[-32%]">
                비밀번호가 일치하지 않습니다
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="w-[180px] h-[60px] rounded-[25px] bg-[#1B35BB] text-[23px] text-[#ffffff] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[26px]"
          onClick={nextPage}>
          다음
        </button>
      </div>
    </div>
  );
}
