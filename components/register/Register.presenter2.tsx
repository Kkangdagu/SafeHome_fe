import Image from 'next/image';
import { useEffect, useState } from 'react';

import Button from '../Common/Button';
import { IRegisterTwoUIProps } from './RegisterTwo.types';

export default function RegisterTwoUI({
  beforePage,
  activeTwo,
  allAgreed,
  setAllAgreed,
  onChangeBirth,
  onChangeName,
  onChangePhone,
  onClickRegister,
  activePassedRegisterTwo,
}: IRegisterTwoUIProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [infoAgreed, setInfoAgreed] = useState(false);
  const [useAgreed, setUseAgreed] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const allBtnEvent = () => {
    if (allAgreed === false) {
      setAllAgreed(true);
      setInfoAgreed(true);
      setUseAgreed(true);
      activePassedRegisterTwo();
    } else {
      setAllAgreed(false);
      setInfoAgreed(false);
      setUseAgreed(false);
      activePassedRegisterTwo();
    }
  };

  const infoBtnEvent = () => {
    if (infoAgreed === false) {
      setInfoAgreed(true);
      activePassedRegisterTwo();
    } else {
      setInfoAgreed(false);
      activePassedRegisterTwo();
    }
  };

  const useBtnEvent = () => {
    if (useAgreed === false) {
      setUseAgreed(true);
      activePassedRegisterTwo();
    } else {
      setUseAgreed(false);
      activePassedRegisterTwo();
    }
  };

  useEffect(() => {
    if (infoAgreed === true && useAgreed === true) {
      setAllAgreed(true);
      activePassedRegisterTwo();
    } else {
      setAllAgreed(false);
      activePassedRegisterTwo();
    }
  }, [activePassedRegisterTwo, infoAgreed, setAllAgreed, useAgreed]);

  return (
    <div className="w-[390px] h-screen bg-[#F2F3F6]">
      <div className="relative h-[106px] bg-white-0">
        <button onClick={beforePage}>
          <Image
            src="/images/left_arrow.svg"
            width={14}
            height={26}
            alt=""
            className="absolute top-[60%] left-[5%]"
          />
        </button>
        <div className="text-black text-[26px] font-semibold absolute top-[58%] left-[37%]">
          회원가입
        </div>
      </div>
      <div className="border-b-[2px] border-[#A6B3CD]" />
      <div className="mt-[70px]">
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
              onKeyUp={activePassedRegisterTwo}
            />
          </div>
        </div>
        <div className="ml-[20px] mb-[95px]">
          <div className="text-left text-[18px] text-[#696E83] mb-[10px]">
            생년월일
          </div>
          <div className="float-left">
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              className="w-[349px] h-[37px] text-[14px] pr-[1px] mr-[13px] text-black bg-[#F2F3F6] outline-none border-[#A6B3CD] border-b-[1px] placeholder-gray-300 float-left focus:border-[#2551F4]"
              placeholder="0000-00-00"
              onChange={onChangeBirth}
              onKeyUp={activePassedRegisterTwo}
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
              onKeyUp={activePassedRegisterTwo}
            />
          </div>
        </div>
        <div>
          <div className="h-[45px] relative border-solid border-b-[1px] border-[#A6B3CD] mx-[20px]">
            <input
              id="all_agreed"
              checked={allAgreed}
              onChange={allBtnEvent}
              type="checkbox"
              className="w-[20px] h-[20px] accent-[#696E83] inline-block absolute left-[2%] top-[30%]"
            />
            <div className="text-black text-[18px] inline-block absolute left-[11%] top-[30%]">
              약관에 모두 동의합니다
            </div>
            <button
              type="button"
              id="agree_btn"
              className="inline-block absolute top-[37%] right-[2%]">
              {isOpen ? (
                <Image
                  src="/images/arrow_up.svg"
                  height={16}
                  width={16}
                  alt=""
                  onClick={handleToggle}
                />
              ) : (
                <Image
                  src="/images/arrow_down.svg"
                  height={16}
                  width={16}
                  alt=""
                  onClick={handleToggle}
                />
              )}
            </button>
          </div>
          <div className={`mt-[12px] mb-[50px] ${isOpen ? 'block' : 'hidden'}`}>
            <div className="h-[25px] relative">
              <input
                type="checkbox"
                id="info_agreed"
                checked={infoAgreed}
                onChange={infoBtnEvent}
                className="w-[20px] h-[20px] accent-[#696E83] inline-block absolute left-[7%]"
              />
              <div className="text-black text-[14px] inline-block absolute left-[15%] top-[9%]">
                (필수) 개인정보 수집 및 이용 동의
              </div>
            </div>
            <div className="relative h-[25px]">
              <input
                type="checkbox"
                checked={useAgreed}
                onChange={useBtnEvent}
                className="w-[20px] h-[20px] accent-[#696E83] inline-block absolute top-[10%] left-[7%]"
              />
              <div className="text-black text-[14px] inline-block absolute left-[15%] top-[16%]">
                (필수) 서비스 이용약관 동의
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[65px]">
          <Button
            type="button"
            variant="register"
            id="register_btn"
            onClick={onClickRegister}
            disabled={!activeTwo}>
            가입하기
          </Button>
        </div>
      </div>
    </div>
  );
}
