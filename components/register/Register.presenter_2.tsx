'use client';

import Image from 'next/image';
import { useState } from 'react';

import arrow_down from '../../public/images/down_arrow.svg';
import arrow_up from '../../public/images/up_arrow.svg';

export default function RegisterTwoUI() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-[690px] h-full bg-[#FAFAFA] text-center">
        <div className="relative mt-[60px] ml-[50px]">
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
        <div className="text-left mt-24 mb-[60px] ml-12">
          <div className="relative mb-[50px]">
            <div className="absolute text-[#B7B7B7] text-[24px] left-[3%] top-[32%]">
              이름
            </div>
            <input
              type="email"
              className="w-[323px] h-[75px] pl-[80px] text-[#686868] outline-none rounded-[25px] border-[#b7b7b7] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] placeholder-gray-300"
            />
          </div>
          <div className="relative mb-[50px]">
            <div className="absolute text-[#B7B7B7] text-[24px] left-[3%] top-[32%]">
              생년월일
            </div>
            <input
              type="date"
              className="w-[406px] h-[75px] pl-[120px] pr-[20px] text-[#686868] outline-none rounded-[25px] border-[#b7b7b7] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] placeholder-gray-300"
            />
          </div>
          <div className="relative mb-[50px]">
            <div className="absolute text-[#B7B7B7] text-[24px] left-[3%] top-[32%]">
              전화번호
            </div>
            <input
              type="tel"
              className="w-[517px] h-[75px] pl-[120px] text-[#686868] outline-none rounded-[25px] border-[#b7b7b7] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] placeholder-gray-300"
              maxLength={11}
            />
          </div>
        </div>
        <div>
          <div className="h-[45px] relative border-solid border-b-2 border-[#00396D] mx-[50px]">
            <input
              type="checkbox"
              className="w-[28px] h-[28px] accent-[#00396D] inline-block absolute left-[7%]"
            />
            <div className="text-[#00396D] inline-block absolute left-[15%]">
              약관에 모두 동의합니다
            </div>
            <button type="button" className="inline-block absolute right-[7%]">
              {isOpen ? (
                <Image
                  src={arrow_up}
                  height={16}
                  width={28}
                  alt=""
                  onClick={handleToggle}
                />
              ) : (
                <Image
                  src={arrow_down}
                  height={16}
                  width={28}
                  alt=""
                  onClick={handleToggle}
                />
              )}
            </button>
          </div>
          <div className={`mt-[30px] ${isOpen ? 'block' : 'hidden'}`}>
            약관 내용
          </div>
        </div>
        <button
          type="button"
          className="w-[195px] h-[60px] rounded-[25px] bg-[#1B35BB] text-2xl text-[#ffffff] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[26px]">
          가입
        </button>
      </div>
    </div>
  );
}
