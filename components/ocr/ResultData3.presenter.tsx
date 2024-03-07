import { BsDot } from 'react-icons/bs';

export default function ResultData3() {
  return (
    <div className="bg-white-0 -mx-4 py-10">
      <div className="text-center text-[18px] font-bold mb-10">
        <p>아파트, 오피스텔, 연립, 빌라 등 집합건물</p>
        <p>이나 다세대주택은 지번 이외에 동호수 등</p>
        <p className="">상세주소를 정확히 기재</p>
      </div>
      <div className="text-base font-bold flex items-center ml-10">
        <BsDot />
        <p>동호수 등 상세주소는 대문에 적힌 호수가</p>
      </div>
      <p className="text-base font-bold ml-14">
        아니라 부동산등기부 등본 등 공부상 기재
      </p>
      <p className="text-base font-bold ml-14">가 우선함</p>
      <div className="text-base font-bold flex items-center ml-10 mt-4">
        <BsDot />
        <p>상세주소를 기재하지 않으면 대항력, 우선</p>
      </div>
      <p className="text-base font-bold ml-14">변제권 등을 확보하지 못함</p>
    </div>
  );
}
