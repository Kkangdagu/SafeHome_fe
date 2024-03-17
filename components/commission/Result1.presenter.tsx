import Image from 'next/image';
import { IoChevronBack } from 'react-icons/io5';

import { ICommissionResult1 } from './Commission.types';

export default function CommissionResult1({
  amount,
  result,
  setShowResult1,
  persent,
}: ICommissionResult1) {
  return (
    <div className="w-[390px] bg-layout-primary p-4 h-full">
      <header className="h-[106px] flex items-end px-3 pb-5 justify-between border-b-2 bg-white-0 border-b-slate-300 -mx-4 -mt-4 mb-5">
        <button
          className="w-[28px] h-[28px] flex justify-center items-center"
          onClick={() => setShowResult1(false)}>
          <IoChevronBack />
        </button>
        <p className="text-[28px] font-bold">중개수수료 계산기</p>
        <div className="w-[28px] h-[28px]" />
      </header>
      <div className="flex justify-between items-end mt-10 mb-5">
        <h1 className="text-[24px] font-bold">계산서</h1>
        <span className="text-[13px] font-bold">(단위 : 원)</span>
      </div>
      <div className="h-[397px] border-[2px]">
        <section className="w-full h-[36px] flex items-center justify-between border-b-[1px] px-2 bg-[#e9ebf8]">
          <span className="text-[13px] font-bold">상세 내용</span>
          <span className="text-[13px] font-bold">금액</span>
        </section>
        <section className="h-[74px] flex items-center justify-between border-b-[1px] px-2 bg-white">
          <span className="text-[18px] text-[#696E83] font-bold">
            거래 금액
          </span>
          <span className="text-[18px] font-bold">
            {amount && amount.toLocaleString()}
            <span className="text-[#696E83] ml-1">원</span>
          </span>
        </section>
        <section className="h-[232px] flex flex-col justify-center gap-10 px-2 py-10 border-b-2">
          <article className="flex justify-between">
            <span className="text-[18px] text-[#696E83] font-bold">
              최대 중개보수
              <span className="text-[10px] text-[#696E83] ml-1">(VAT별도)</span>
            </span>
            <span className="text-[18px] font-bold">
              {Math.floor(result).toLocaleString()}
              <span className="text-[#696E83] ml-1">원</span>
            </span>
          </article>
          <article className="flex justify-between">
            <span className="text-[18px] text-[#696E83] font-bold">
              협의/상한요율
            </span>
            <span className="text-[18px] font-bold">
              {amount < 50000000 && persent > 0 && persent <= 0.6
                ? persent
                : (amount < 50000000 && persent > 0.6) ||
                    (amount < 50000000 && persent === 0)
                  ? '0.6'
                  : null}
              {amount >= 50000000 &&
              amount < 200000000 &&
              persent > 0 &&
              persent <= 0.5
                ? persent
                : (amount >= 50000000 && amount < 200000000 && persent > 0.5) ||
                    (amount >= 50000000 && amount < 200000000 && persent === 0)
                  ? '0.5'
                  : null}
              {amount >= 200000000 &&
              amount < 900000000 &&
              persent > 0 &&
              persent <= 0.4
                ? persent
                : (amount >= 200000000 &&
                      amount < 900000000 &&
                      persent > 0.4) ||
                    (amount >= 200000000 && amount < 900000000 && persent === 0)
                  ? '0.4'
                  : null}
              {amount >= 900000000 &&
              amount < 1200000000 &&
              persent > 0 &&
              persent <= 0.5
                ? persent
                : (amount >= 900000000 &&
                      amount < 1200000000 &&
                      persent > 0.5) ||
                    (amount >= 900000000 &&
                      amount < 1200000000 &&
                      persent === 0)
                  ? '0.5'
                  : null}
              {amount >= 1200000000 &&
              amount < 1500000000 &&
              persent > 0 &&
              persent <= 0.6
                ? persent
                : (amount >= 1200000000 &&
                      amount < 1500000000 &&
                      persent > 0.6) ||
                    (amount >= 1200000000 &&
                      amount < 1500000000 &&
                      persent === 0)
                  ? '0.6'
                  : null}
              {amount >= 1500000000 && persent > 0 && persent <= 0.7
                ? persent
                : (amount >= 1500000000 && persent > 0.7) ||
                    (amount >= 1500000000 && persent === 0)
                  ? '0.7'
                  : null}
              <span className="text-[#696E83] ml-1">%</span>
            </span>
          </article>
          <article className="flex justify-between">
            <span className="text-[18px] text-[#696E83] font-bold">
              거래 금액
            </span>
            <span className="text-[18px] font-bold">
              {amount && amount.toLocaleString()}
              <span className="text-[#696E83] ml-1">원</span>
            </span>
          </article>
        </section>
        <section className="h-[55px] text-[13px] text-[#696E83] font-bold px-2 flex flex-col justify-center gap-1">
          <p>중개보수는 [거래금액 X 상한요율] 범위 내에서 협의</p>
          <p>(단, 계산된 금액은 한도액을 초과할 수 없습니다.)</p>
        </section>
      </div>
      <hr className="-mx-4 my-10 border-[1px]" />
      <h1 className="text-[24px] font-bold flex items-center gap-2">
        추가 설명
        <Image src="images/info_icon.svg" alt="아이콘" width={16} height={16} />
      </h1>
      <p className="text-[18px] font-bold flex items-center gap-1 text-[#696E83] my-10">
        중개보수요율표
        <span className="text-[13px]">( 서울시, 주택, 매매/교환 )</span>
      </p>
      <table className="table-auto border-collapse border border-gray-500">
        <thead className="w-full text-[15px] text-[#6C9BF2] font-bold bg-[#E9EBF8]">
          <tr>
            <th className="p-2 border-2 border-gray-400">거래금액</th>
            <th className="p-2 border-2 border-gray-400">상한요율</th>
            <th className="p-2 border-2 border-gray-400">한도액</th>
          </tr>
        </thead>
        <tbody className="text-[12px] text-[#696E83] font-bold">
          <tr>
            <td className="p-2 border-2 border-gray-400">5천만원 미만</td>
            <td className="p-2 text-center border-2 border-gray-400">0.6%</td>
            <td className="p-2 text-center border-2 border-gray-400">25만원</td>
          </tr>
          <tr>
            <td className="p-2 border-2 border-gray-400">
              5천만원 이상~2억 원 미만
            </td>
            <td className="p-2 text-center border-2 border-gray-400">0.5%</td>
            <td className="p-2 text-center border-2 border-gray-400">80만원</td>
          </tr>
          <tr>
            <td className="p-2 border-2 border-gray-400">
              2억 원 이상~9억 원 미만
            </td>
            <td className="p-2 text-center border-2 border-gray-400">0.4%</td>
            <td className="p-2 text-center border-2 border-gray-400">-</td>
          </tr>
          <tr>
            <td className="p-2 border-2 border-gray-400">
              9억 원 이상~12억 원 미만
            </td>
            <td className="p-2 text-center border-2 border-gray-400">0.5%</td>
            <td className="p-2 text-center border-2 border-gray-400">-</td>
          </tr>
          <tr>
            <td className="p-2 border-2 border-gray-400">
              12억 원 이상~15억 원 미만
            </td>
            <td className="p-2 text-center border-2 border-gray-400">0.6%</td>
            <td className="p-2 text-center border-2 border-gray-400">-</td>
          </tr>
          <tr>
            <td className="p-2 border-2 border-gray-400">15억 원 이상</td>
            <td className="p-2 text-center border-2 border-gray-400">0.7%</td>
            <td className="p-2 text-center border-2 border-gray-400">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
