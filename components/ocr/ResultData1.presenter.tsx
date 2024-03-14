import Image from 'next/image';
import Link from 'next/link';
import { BsDot } from 'react-icons/bs';

export default function ResultData1() {
  return (
    <div className="bg-white-0 -mx-4 p-4">
      <h1 className="text-[32px] font-extrabold my-10">1. 전세</h1>
      <p className="text-[20px] font-bold flex items-center">
        <BsDot />
        전세가율 확인하기
      </p>
      <div className="flex items-center gap-3 my-5">
        <div className="border border-[#B6C3F3] w-[232px] h-[42px] text-base font-bold flex items-center justify-center px-2">
          전세가율 = 전세가격/매매가격
        </div>
        <span className="text-[12px] font-bold text-[#2451F4]">
          80% 초과시 위험
        </span>
      </div>
      <p className="text-[20px] font-bold flex items-center">
        <BsDot />
        적정 전세가 확인
      </p>
      <div className="w-full h-[151px] flex flex-col justify-center border border-[#B6C3F3] my-5">
        <h1 className="text-[#2451F4] text-[20px] font-bold ml-3">
          서울시 전세가격 상담센터
        </h1>
        <p className="text-[16px] font-bold flex items-center my-2">
          <BsDot />
          대상자 : 서울시 소재 전세 계약 대상자
        </p>
        <p className="text-[16px] font-bold flex items-center">
          <BsDot />
          신청방법 : 서울부동산정보광장에서 온라인 신청
        </p>
        <p className="text-[16px] font-bold flex items-center my-2">
          <BsDot />
          상담내용 : 상담 신청 후 접수 결과 문자 통보,
        </p>
        <p className="text-[16px] font-bold ml-4">
          2일내(공휴일 제외) 감정평가사 유선상담
        </p>
      </div>
      <Link
        href="https://land.seoul.go.kr:444/land/broker/rentProprtCounsel.do"
        target="_blank"
        className="flex justify-center mt-1">
        <Image
          src="/images/seoul_estate_info.svg"
          alt=""
          width={308}
          height={133}
        />
      </Link>
    </div>
  );
}
