import { BsDot } from 'react-icons/bs';

export default function ResultData4() {
  return (
    <div className="bg-white-0 -mx-4 py-10">
      <h1 className="text-center text-[18px] font-bold mb-10">
        잔금 지급전 등기부등본 한 번 더 확인
      </h1>
      <div className="p-[20px_30px]">
        <div className="w-full border border-[#B6C3F3] p-4 mb-5">
          <h1 className="text-base font-bold text-[#2451F4]">추가 설명</h1>
          <p className="flex items-center text-[13px] font-bold my-5">
            <BsDot />
            <p>확정 일자</p>
          </p>
          <p className="text-[13px] font-bold">
            세입자가 주민센터에 임대차계약서 원본을 가져
          </p>
          <p className="text-[13px] font-bold mb-5">
            가서 확정일자를 찍어달라고 하면 됨.
          </p>
          <p className="text-[13px] font-bold">
            세입자는 우선변제권을 확보하기 위해서 임대차
          </p>
          <p className="text-[13px] font-bold">
            계약서에 확정일자를 받아야 하는데, 보통 계약
          </p>
          <p className="text-[13px] font-bold">
            서 아무 곳이나 확정일자를 찍지만 표준임대차
          </p>
          <p className="text-[13px] font-bold">계약서이므로 별도의 칸이 존재</p>
        </div>
        <p className="text-[13px] font-bold text-[#6C9BF2] flex items-center">
          <BsDot />
          확정일자 부여란
        </p>
        <p className="text-[13px] font-bold text-[#6C9BF2] my-1">
          주택임대차계약서를 제출하고 임대차 신고의 접수를 완료한
        </p>
        <p className="text-[13px] font-bold text-[#6C9BF2]">
          경우에는 별도로 확정일자 부여를 신청할 필요가 없습니다.
        </p>
      </div>
    </div>
  );
}
