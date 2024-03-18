import Image from 'next/image';
import Link from 'next/link';
import { FaMinus } from 'react-icons/fa6';
import { IoChevronBack } from 'react-icons/io5';

import { IFooterShow } from './Onboarding.types';

export default function OnboardingUI({ show, onFooterShow }: IFooterShow) {
  return (
    <div className="w-[390px] h-screen bg-[#6C9BF2] p-4 flex flex-col min-h-screen relative overflow-hidden">
      <Link href="/" className="w-[28px] h-[28px] text-white mt-3">
        <IoChevronBack />
      </Link>
      <p className="text-[40px] text-white font-extrabold m-[4rem_0px_2.5rem_0px]">
        안전하게 집 구하기!
      </p>
      <div className="flex justify-center items-center gap-2">
        <Image
          src="/images/logo_slogan.svg"
          alt="로고"
          width={150}
          height={60}
        />
        <p className="text-white text-[36px] font-extrabold">와 함께</p>
      </div>
      <div className="text-[21px] font-bold text-white flex flex-col items-center gap-2 mt-10">
        <p>매물 확인, 중개수수료 확인을</p>
        <p>똑똑한 소비자가 되어 직접해 봐요!</p>
      </div>
      <footer className="w-full flex-grow -mb-4 -mt-[95px]">
        <Image
          src="/images/onboarding_icon.svg"
          alt="로고"
          width={358}
          height={300}
          className="object-fill"
        />
        {show ? (
          <div className="w-[390px] h-[560px] rounded-t-[20px] bg-white block items-center pt-3 gap-2 absolute bottom-0 -mx-4 transition-all ease-in-out duration-200">
            <button
              className="w-full flex justify-center items-center"
              onClick={onFooterShow}>
              <FaMinus />
            </button>
            <div className="w-full flex flex-col items-center gap-10 px-1 mt-10">
              <Link
                href="/commission"
                className="w-[320px] h-[110px] flex items-center justify-between px-3 bg-[#E9EBF8]">
                <div className="flex flex-col gap-2">
                  <h1 className="text-[#1B35BB] font-semibold text-[20px]">
                    중개수수료 계산기
                  </h1>
                  <p className="text-[12px]">집 조건에 맞는 중개 수수료를</p>
                  <p className="text-[12px]">
                    내가 직접 계산해 중개수수료 눈탱이 방지!
                  </p>
                </div>
                <Image
                  src="/images/calcu_icon.svg"
                  alt="로고"
                  width={78}
                  height={78}
                />
              </Link>
              <Link
                href="/inquiry"
                className="w-[320px] h-[110px] flex items-center justify-between px-3 bg-[#E9EBF8]">
                <div className="flex flex-col gap-2">
                  <h1 className="text-[#1B35BB] font-semibold text-[20px]">
                    정보 조회 및 열람
                  </h1>
                  <p className="text-[12px]">
                    안전한 부동산과 공인중개사인지를 직접
                  </p>
                  <p className="text-[12px]">
                    조회, 매물의 등기부등본을 직접 확인!
                  </p>
                </div>
                <Image
                  src="/images/info_check_icon.svg"
                  alt="로고"
                  width={78}
                  height={78}
                />
              </Link>
              <Link
                href="/analysis"
                className="w-[320px] h-[110px] flex items-center justify-between px-3 bg-[#E9EBF8]">
                <div className="flex flex-col gap-2">
                  <h1 className="text-[#1B35BB] font-semibold text-[20px]">
                    계약서 업로드
                  </h1>
                  <p className="text-[12px]">
                    계약하는 계약서의 이미지를 업로드해
                  </p>
                  <p className="text-[12px]">
                    사인하기 전 미리 주의해야할 점을 인지!
                  </p>
                </div>
                <Image
                  src="/images/upload_icon.svg"
                  alt="로고"
                  width={78}
                  height={78}
                />
              </Link>
            </div>
          </div>
        ) : (
          <div className="w-[390px] h-[80px] rounded-t-[20px] bg-white block justify-center items-center pt-3 gap-2 absolute bottom-0 -mx-4 transition-all ease-in-out duration-200">
            <button
              className="w-full flex justify-center items-center"
              onClick={onFooterShow}>
              <FaMinus />
            </button>
            <p className="text-center text-base font-bold">위로 올려주세요</p>
          </div>
        )}
      </footer>
    </div>
  );
}
