import { BsDot } from 'react-icons/bs';

export default function ResultData6() {
  return (
    <div className="bg-white-0 -mx-4 py-10">
      <div className="text-base font-bold flex items-center ml-10">
        <BsDot />
        <p>집 주인 인감증명과 위임장에 날인되어</p>
      </div>
      <p className="text-base font-bold ml-14">
        있는 인감(도장) 일치 여부 확인
      </p>
      <div className="text-base font-bold flex items-center ml-10 mt-4">
        <BsDot />
        <p>위임장의 발급일자가 3개월 이내 인지</p>
      </div>
      <p className="text-base font-bold ml-14">반드시 확인</p>
      <div className="text-base font-bold flex items-center ml-10 mt-4">
        <BsDot />
        <p>대리인의 신분증과 위임장 일치 여부</p>
      </div>
      <p className="text-base font-bold ml-14">확인</p>
    </div>
  );
}
