import Link from 'next/link';
import { IoChevronBack } from 'react-icons/io5';

import Button from '../Common/Button';
import { ICommission } from './Commission.types';
import PolicyBanner from './Policy.presenter';
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
  moreInfo,
  setMoreInfo,
  displayPersent,
}: ICommission) {
  if (showResult1) {
    return (
      <CommissionResult1
        amount={amount}
        result={result}
        persent={persent}
        setShowResult1={setShowResult1}
      />
    );
  }

  if (showResult2) {
    return (
      <CommissionResult2
        amount={amount}
        monthPrice={monthPrice}
        persent={persent}
        result={result}
        setShowResult2={setShowResult2}
      />
    );
  }

  return (
    <div className="h-full w-[390px] bg-layout-primary p-4">
      <header className="h-[106px] flex items-end px-3 pb-5 justify-between border-b-2 bg-white-0 border-b-slate-300 -mx-4 -mt-4 mb-5">
        <Link
          href="/"
          className="w-[28px] h-[28px] flex justify-center items-center">
          <IoChevronBack />
        </Link>
        <p className="text-[28px] font-bold">중개수수료 계산기</p>
        <div className="w-[28px] h-[28px]" />
      </header>
      <PolicyBanner moreInfo={moreInfo} setMoreInfo={setMoreInfo} />
      <div className="w-full flex flex-col gap-5 mt-10">
        <section>
          <span className="text-[18px] font-bold">매물 종류</span>
          <div className="w-full text-[18px] mt-3">
            {transactionTypes.map((type, idx) => (
              <button
                key={type}
                className={`text-[18px] font-bold ${
                  selectedTransaction === type
                    ? 'selected bg-[#B6C3F3] text-white-0'
                    : ' bg-white-0'
                } ${idx === 1 ? 'w-[158px] h-[54px]' : 'w-[99px] h-[54px]'} ${idx === 1 ? 'border-x-[1px]' : ''}`}
                onClick={() => setSelectedTransaction(type)}>
                {type}
              </button>
            ))}
          </div>
          {selectedTransaction === '주택' && (
            <span className="text-[13px] text-[#9CA0B2]">
              주택의 부속토지, 주택분양권 포함
            </span>
          )}
          {selectedTransaction === '오피스텔' && (
            <span className="text-[13px] text-[#9CA0B2]">
              부엌, 화장실 등의 시설을 갖춘 전용면적 85m² 이하 오피스텔
            </span>
          )}
          {selectedTransaction === '기타' && (
            <span className="text-[13px] text-[#9CA0B2]">
              오피스텔(주거용 제외), 상가, 토지 등
            </span>
          )}
        </section>
        <section>
          <span className="text-[18px] font-bold">거래 종류</span>
          <div className="w-full text-[18px] mt-3">
            {salesOfferTypes.map((type, idx) => (
              <button
                key={type}
                className={`text-[18px] font-bold
									${
                    selectedProperty === type
                      ? 'selected bg-[#B6C3F3] text-white-0'
                      : 'bg-white-0'
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
          <span className="text-[18px] font-bold">거래 금액</span>
          <div className="w-full flex items-center relative mt-3">
            <input
              value={displayAmount}
              onChange={onAmountInput}
              maxLength={15}
              className="w-full h-[54px] p-[3px_35px_3px_4px] text-right"
            />
            <span className="absolute right-2 text-slate-400">원</span>
          </div>
          <h3 className="text-end text-[14px] text-[#686868] mt-1 mb-5">
            {amount === 0 || Number.isNaN(amount)
              ? null
              : Number(String(amount).length) < 5
                ? `${amount.toLocaleString()} 원`
                : `${
                    String(amount).length <= 8
                      ? `${Number(String(amount).slice(0, -4)).toLocaleString()} 만 ${Number(String(amount).slice(-4) || 0).toLocaleString()} 원`
                      : `${String(amount).length > 8 ? `${Number(String(amount).slice(0, -8)).toLocaleString()} 억 ${Number(String(amount).slice(-8, -4) || 0).toLocaleString()} 만 ${Number(String(amount).slice(-4) || 0).toLocaleString()} 원` : null}`
                  }`
                    .replace(/ 0 만/g, '')
                    .replace(/ 0 원/g, ' 원')}
          </h3>
          <span className="text-[18px] font-bold">협의보수율</span>
          <div className="w-full flex items-center relative mt-3">
            <input
              value={displayPersent}
              onChange={onPersentInput}
              maxLength={10}
              className="w-full h-[54px] p-[3px_35px_3px_4px] text-right"
            />
            <span className="absolute right-2 text-slate-400">%</span>
          </div>
          <span className="text-[13px] text-[#9CA0B2]">
            협의보수율을 입력하지 않거나, 상한요율보다 높으면 상한요율이
            적용됩니다.
          </span>
          <div className="w-full flex justify-around mt-16 mb-5">
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
          <span className="text-[18px] font-bold">보증금</span>
          <div className="w-full flex items-center relative mt-3">
            <input
              value={displayAmount}
              onChange={onAmountInput}
              maxLength={15}
              className="w-full h-[54px] p-[3px_35px_3px_4px] text-right"
            />
            <span className="absolute right-2 text-slate-400">원</span>
          </div>
          <h3 className="text-end text-[14px] text-[#686868] mt-1 mb-5">
            {amount === 0 || Number.isNaN(amount)
              ? null
              : Number(String(amount).length) < 5
                ? `${amount.toLocaleString()} 원`
                : `${
                    String(amount).length <= 8
                      ? `${Number(String(amount).slice(0, -4)).toLocaleString()} 만 ${Number(String(amount).slice(-4) || 0).toLocaleString()} 원`
                      : `${String(amount).length > 8 ? `${Number(String(amount).slice(0, -8)).toLocaleString()} 억 ${Number(String(amount).slice(-8, -4) || 0).toLocaleString()} 만 ${Number(String(amount).slice(-4) || 0).toLocaleString()} 원` : null}`
                  }`
                    .replace(/ 0 만/g, '')
                    .replace(/ 0 원/g, ' 원')}
          </h3>
          <span className="text-[18px] font-bold">월세</span>
          <div className="w-full flex items-center relative mt-3">
            <input
              value={displayMonthPrice}
              onChange={onMonthPrice}
              maxLength={10}
              className="w-full h-[54px] p-[3px_35px_3px_4px] text-right"
            />
            <span className="absolute right-2 text-slate-400">원</span>
          </div>
          <h3 className="text-end text-[14px] text-[#686868] mt-1 mb-5">
            {monthPrice === 0 || Number.isNaN(monthPrice)
              ? null
              : Number(String(monthPrice).length) < 5
                ? `${monthPrice.toLocaleString()} 원`
                : `${
                    String(monthPrice).length <= 8
                      ? `${Number(String(monthPrice).slice(0, -4)).toLocaleString()} 만 ${Number(String(monthPrice).slice(-4) || 0).toLocaleString()} 원`
                      : `${String(monthPrice).length > 8 ? `${Number(String(monthPrice).slice(0, -8)).toLocaleString()} 억 ${Number(String(monthPrice).slice(-8, -4) || 0).toLocaleString()} 만 ${Number(String(monthPrice).slice(-4) || 0).toLocaleString()} 원` : null}`
                  }`
                    .replace(/ 0 만/g, '')
                    .replace(/ 0 원/g, ' 원')}
          </h3>
          <span className="text-[18px] font-bold">협의보수율</span>
          <div className="w-full flex items-center relative mt-3">
            <input
              value={displayPersent}
              onChange={onPersentInput}
              maxLength={10}
              className="w-full h-[54px] p-[3px_35px_3px_4px] text-right"
            />
            <span className="absolute right-2 text-slate-400">%</span>
          </div>
          <span className="text-[13px] text-[#9CA0B2]">
            협의보수율을 입력하지 않거나, 상한요율보다 높으면 상한요율이
            적용됩니다.
          </span>
          <div className="w-full flex justify-around mt-16 mb-5">
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
