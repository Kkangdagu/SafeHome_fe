import Image from 'next/image';
import Link from 'next/link';
import { BsDot } from 'react-icons/bs';

export default function ResultData2() {
  return (
    <div className="bg-white-0 -mx-4 py-10">
      <div className="text-center text-[18px] font-bold">
        <p>건축물관리대장과 부동산 임대차계약서,</p>
        <p>등기부등본 주소가 동일한지 반드시 확인</p>
      </div>
      <Link
        href="https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=&CappBizCD=15000000098"
        target="_blank"
        className="flex justify-center p-3">
        <Image
          src="/images/gov24_img.svg"
          alt="정부24"
          width={308}
          height={133}
        />
      </Link>
      <p className="text-[20px] font-bold flex items-center ml-5 my-3">
        <BsDot />
        건축물대장
      </p>
      <div className="flex justify-center">
        <Image
          src="/images/doc3_img.svg"
          alt="건축물대장"
          width={312}
          height={180}
        />
      </div>
      <p className="text-[20px] font-bold flex items-center ml-5 mt-10 mb-3">
        <BsDot />
        표준임대차계약서
      </p>
      <div className="flex justify-center">
        <Image
          src="/images/doc1_img.svg"
          alt="건축물대장"
          width={309}
          height={154}
        />
      </div>
      <p className="text-[20px] font-bold flex items-center ml-5 mt-10 mb-3">
        <BsDot />
        등기부등본
      </p>
      <div className="flex justify-center">
        <Image
          src="/images/doc2_img.svg"
          alt="건축물대장"
          width={309}
          height={154}
        />
      </div>
      <div className="p-[20px_30px]">
        <div className="w-full border border-[#B6C3F3] p-4 mt-10">
          <h1 className="text-base font-bold text-[#2451F4] mb-3">추가 설명</h1>
          <p className="text-[13px] font-bold">
            건축물대장이나 등기부등본이 하나가 없는 집이있는
          </p>
          <p className="text-[13px] font-bold my-1">
            데, 둘 중 하나만 봤을 때 법률적으로 문제가 생기면
          </p>
          <p className="text-[13px] font-bold">권리 주장이 어려워짐.</p>
          <p className="text-[13px] font-bold my-1">
            이런 경우, 특얄을 활용하거나 분양계약서를 포함한
          </p>
          <p className="text-[13px] font-bold">
            다른 서류를 검토해 계약하는 방법이 있음
          </p>
        </div>
      </div>
    </div>
  );
}
