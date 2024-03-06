import Link from 'next/link';
import { IoChevronBack } from 'react-icons/io5';

import Button from '../Common/Button';
import { ICommission } from './Commission.types';
import CommissionResult1 from './Result1.presenter';
import CommissionResult2 from './Result2.presenter';

export default function CommissionUI({
  selectedProperty,
  setSelectedProperty,
  selectedTransaction,
  setSelectedTransaction,
  salesOfferTypes,
  transactionTypes,
  amount,
  persent,
  monthPrice,
  onAmountInput,
  onPersentInput,
  displayAmount,
  onResetButton,
  displayMonthPrice,
  onMonthPrice,
  result,
  onCalculatorCommission,
  showResult1,
  setShowResult1,
  showResult2,
  setShowResult2,
  onCalculatorMonth,
}: ICommission) {
  if (showResult1) {
    return (
      <CommissionResult1
        amount={amount}
        result={result}
        setShowResult1={setShowResult1}
      />
    );
  }

  if (showResult2) {
    return (
      <CommissionResult2
        amount={amount}
        monthPrice={monthPrice}
        setShowResult2={setShowResult2}
      />
    );
  }

  return (
    <div
      className={`w-[390px] bg-layout-primary p-4 ${selectedProperty === '월세' ? 'h-full' : 'h-screen'}`}>
      <header className="h-[106px] flex items-end px-3 pb-5 justify-between border-b-2 bg-white-0 border-b-slate-300 -mx-4 -mt-4 mb-5">
        <Link
          href="/"
          className="w-[28px] h-[28px] flex justify-center items-center">
          <IoChevronBack />
        </Link>
        <p className="text-[28px] font-bold">중개수수료 계산기</p>
        <div className="w-[28px] h-[28px]" />
      </header>
      <div className="h-[172px] rounded-md bg-[#E9EBF8]" />
      <div className="w-full flex flex-col gap-5 mt-10">
        <section>
          <span className="text-[18px]">매물 종류</span>
          <div className="w-full text-[18px] mt-3">
            {transactionTypes.map((type, idx) => (
              <button
                key={type}
                className={`${
                  selectedTransaction === type
                    ? 'selected bg-[#B6C3F3]'
                    : ' bg-white-0'
                } ${idx === 0 ? 'w-[158px] h-[54px]' : 'w-[99px] h-[54px]'} ${idx === 1 ? 'border-x-[1px]' : ''}`}
                onClick={() => setSelectedTransaction(type)}>
                {type}
              </button>
            ))}
          </div>
          <span className="text-[13px] text-[#9CA0B2]">
            주택의 부속토지, 주택분양권 포함
          </span>
        </section>
        <section>
          <span className="text-[18px]">거래 종류</span>
          <div className="w-full text-[18px] mt-3">
            {salesOfferTypes.map((type, idx) => (
              <button
                key={type}
                className={`
									${
                    selectedProperty === type
                      ? 'selected bg-[#B6C3F3]'
                      : ' bg-white-0'
                  } ${idx === 0 ? 'w-[158px] h-[54px]' : 'w-[99px] h-[54px]'} ${idx === 1 ? 'border-x-[1px]' : ''}`}
                onClick={() => setSelectedProperty(type)}>
                {type}
              </button>
            ))}
          </div>
        </section>
      </div>
      {selectedProperty !== '월세' ? (
        <form
          className="w-full mt-5 text-[18px]"
          onSubmit={onCalculatorCommission}>
          <span>거래 금액</span>
          <div className="w-full flex items-center relative mt-3 mb-5">
            <input
              value={displayAmount}
              onChange={onAmountInput}
              maxLength={15}
              className="w-full h-[54px] p-[3px_35px_3px_4px] text-right"
            />
            <span className="absolute right-2 text-slate-400">원</span>
          </div>
          <span>협의보수율</span>
          <div className="w-full flex items-center relative mt-3">
            <input
              value={persent !== null ? persent : ''}
              onChange={onPersentInput}
              maxLength={3}
              className="w-full h-[54px] p-[3px_35px_3px_4px] text-right"
            />
            <span className="absolute right-2 text-slate-400">%</span>
          </div>
          <span className="text-[13px] text-[#9CA0B2]">
            협의보수율을 입력하지 않거나, 상한요율보다 높으면 상한요율이
            적용됩니다.
          </span>
          <div className="w-full flex justify-around mt-6">
            <Button variant="reset" type="button" onClick={onResetButton}>
              초기화
            </Button>
            <Button variant="result" type="submit">
              계산하기
            </Button>
          </div>
        </form>
      ) : (
        <form className="w-full mt-5 text-[18px]" onSubmit={onCalculatorMonth}>
          <span>보증금</span>
          <div className="w-full flex items-center relative mt-3 mb-5">
            <input
              value={displayAmount}
              onChange={onAmountInput}
              maxLength={15}
              className="w-full h-[54px] p-[3px_35px_3px_4px] text-right"
            />
            <span className="absolute right-2 text-slate-400">원</span>
          </div>
          <span>월세</span>
          <div className="w-full flex items-center relative mt-3 mb-5">
            <input
              value={displayMonthPrice}
              onChange={onMonthPrice}
              maxLength={15}
              className="w-full h-[54px] p-[3px_35px_3px_4px] text-right"
            />
            <span className="absolute right-2 text-slate-400">원</span>
          </div>
          <span>협의보수율</span>
          <div className="w-full flex items-center relative mt-3">
            <input
              value={persent !== null ? persent : ''}
              onChange={onPersentInput}
              maxLength={3}
              className="w-full h-[54px] p-[3px_35px_3px_4px] text-right"
            />
            <span className="absolute right-2 text-slate-400">%</span>
          </div>
          <span className="text-[13px] text-[#9CA0B2]">
            협의보수율을 입력하지 않거나, 상한요율보다 높으면 상한요율이
            적용됩니다.
          </span>
          <div className="w-full flex justify-around mt-6">
            <Button variant="reset" type="button" onClick={onResetButton}>
              초기화
            </Button>
            <Button variant="result" type="submit">
              계산하기
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
