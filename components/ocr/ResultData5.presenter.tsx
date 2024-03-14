import Image from 'next/image';
import Link from 'next/link';
import { BsDot } from 'react-icons/bs';

export default function ResultData5() {
  return (
    <div className="bg-white-0 -mx-4 py-10">
      <div className="text-center text-[18px] font-bold">
        <p>건축물관리대장과 부동산 임대차계약서의</p>
        <p>소유주가 같은지 확인</p>
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
      <p className="text-[20px] font-bold flex items-center ml-5 mt-10 mb-5">
        <BsDot />
        건축물대장
      </p>
      <div className="flex justify-center">
        <Image
          src="/images/doc4_img.svg"
          alt="건축물대장"
          width={312}
          height={180}
        />
      </div>
      <p className="text-[20px] font-bold flex items-center ml-5 mt-10 mb-5">
        <BsDot />
        표준임대차계약서
      </p>
      <div className="flex justify-center">
        <Image
          src="/images/doc5_img.svg"
          alt="표준임대차계약서"
          width={309}
          height={154}
        />
      </div>
      <Link
        href="https://www.iros.go.kr/PMainJ.jsp"
        target="_blank"
        className=" mt-10 mb-5 flex justify-center items-center">
        <Image
          src="/images/iros_link_img.svg"
          alt="등기부등본"
          width={308}
          height={133}
        />
      </Link>
      <p className="text-[20px] font-bold flex items-center ml-5 mt-10 mb-5">
        <BsDot />
        등기부등본
      </p>
      <div className="flex justify-center">
        <Image
          src="/images/doc6_img.svg"
          alt="건축물대장"
          width={309}
          height={154}
        />
      </div>
      <div className="flex justify-center my-5">
        <div className="w-[336px] bg-[#f0f3fd] py-5 text-[12px] text-[#2451F4]">
          <p className="flex items-center my-1">
            <BsDot />
            임대인의 얼굴과 임대인의 신분증에 부착된 사진의 동일성
          </p>
          <p className="flex items-center">
            <BsDot />
            임대인의 신분증에 기재된 인적사항, 부동산등기부 등본에
          </p>
          <p className="my-1 ml-3">
            기재된 소유자의 인적사항, 임대차계약서 기재된 인적사
          </p>
          <p className=" ml-3">항이 모두 일치하는지 여부</p>
          <p className="flex items-center my-1">
            <BsDot />
            임대차계약서에 날인된 도장의 인영과 인감증명서의 인영
          </p>
          <p className=" ml-3">이 일치하는지 여부</p>
        </div>
      </div>
      <div className="p-5 text-[20px] font-bold flex justify-center my-5">
        <div>
          <p>만약 부동산등기부등본의 갑구란에서</p>
          <p>신탁등기가 확인되었다면, 부동산등기</p>
          <p>부등본 이외에 신탁원부 및 신탁계약</p>
          <p>서까지 추가로 발급 받아서 확인해야</p>
          <p>합니다.</p>
        </div>
      </div>
      <Link
        href="https://www.gov.kr/mw/EgovPageLink.do?link=confirm/AA040_confirm_index&Mcode=11167"
        target="_blank"
        className="flex justify-center">
        <Image
          src="/images/gov24_check.svg"
          alt="진위확인"
          width={308}
          height={133}
        />
      </Link>
      <div className="p-[20px_30px]">
        <div className="w-full border border-[#B6C3F3] p-4 mt-10">
          <h1 className="text-base font-bold text-[#2451F4] mb-3">추가 설명</h1>
          <p className="text-[13px] font-bold flex items-center">
            <BsDot />
            건축물대장 - 건물의 주소, 용도, 목적 등 건물에
          </p>
          <p className="text-[13px] font-bold my-1 ml-3">
            대한 정보를 적은 문서
          </p>
          <p className="text-[13px] font-bold flex items-center">
            <BsDot />
            등기부등본 - 부동산의 소유주, 저당 유무 등을 주로
          </p>
          <p className="text-[13px] font-bold my-1 ml-3">보여주는 문서</p>
          <div className="text-[13px] font-bold mt-10">
            <p>두 문서의 정보가 다르다면 등기부등본이 최신화 되지</p>
            <p className="my-1">
              않았을 가능성이 있으니 공인중개사에 등기부등본이
            </p>
            <p>최신화되면 계약하자고 하는게 나음</p>
          </div>
        </div>
      </div>
    </div>
  );
}
