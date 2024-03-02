'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function RegisterTwoUI() {
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
        <div className="text-left mt-24 mb-[50px] ml-[29px]">
          <div className="relative mb-[50px]">
            <div className="absolute text-[#B7B7B7] text-[20px] left-[5%] top-[33%]">
              이름
            </div>
            <input
              type="email"
              id="name"
              name="name"
              className="w-[300px] h-[60px] pl-[65px] text-[#686868] text-[15px] outline-none rounded-[25px] border-[#b7b7b7] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] placeholder-gray-300"
            />
          </div>
          <div className="relative mb-[50px]">
            <div className="absolute text-[#B7B7B7] text-[20px] left-[5%] top-[33%]">
              생년월일
            </div>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              className="w-[300px] h-[60px] pl-[100px] pr-[20px] text-[#686868] text-[15px] outline-none rounded-[25px] border-[#b7b7b7] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] placeholder-gray-300"
            />
          </div>
          <div className="relative">
            <div className="absolute text-[#B7B7B7] text-[20px] left-[5%] top-[33%]">
              전화번호
            </div>
            <input
              type="tel"
              id="phoneNum"
              name="phoneNum"
              className="w-[300px] h-[60px] pl-[100px] text-[#686868] text-[15px] outline-none rounded-[25px] border-[#b7b7b7] border-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] placeholder-gray-300"
              maxLength={11}
            />
          </div>
        </div>
        <div>
          <div className="h-[45px] relative border-solid border-b-2 border-[#00396D] mx-[50px]">
            <input
              type="checkbox"
              className="w-[23px] h-[28px] accent-[#00396D] inline-block absolute left-[3%] top-[-10%]"
            />
            <div className="text-[#00396D] text-[20px] inline-block absolute left-[15%]">
              약관에 모두 동의합니다
            </div>
            <button type="button" className="inline-block absolute right-[7%]">
              {isOpen ? (
                <Image
                  src={arrow_up}
                  height={12}
                  width={23}
                  alt=""
                  onClick={handleToggle}
                />
              ) : (
                <Image
                  src={arrow_down}
                  height={12}
                  width={23}
                  alt=""
                  onClick={handleToggle}
                />
              )}
            </button>
          </div>
          <div
            className={`mt-[30px] text-[20px] ${isOpen ? 'block' : 'hidden'}`}>
            약관 내용
          </div>
        </div>
        <button
          type="button"
          className="w-[180px] h-[60px] rounded-[25px] bg-[#1B35BB] text-[23px] text-[#ffffff] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[50px]">
          가입
        </button>
      </div>
    </div>
  );
}
