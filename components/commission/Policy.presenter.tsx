import Link from 'next/link';

type Info = {
  moreInfo: boolean;
  setMoreInfo: (value: boolean) => void;
};

export default function PolicyBanner({ moreInfo, setMoreInfo }: Info) {
  return (
    <div>
      {moreInfo ? (
        <div>
          <div className="h-full rounded-md p-4 bg-[#E9EBF8] overflow-hidden leading-normal text-[13px]">
            <h1 className="text-[24px] font-bold">중개보수 정책</h1>
            <section>
              <h2 className="font-bold mt-5">중개보수 개정 반영 안내</h2>
              <p>
                2021년 8월 20일 국민부담 경감을 목표로 발표된 중개보수 및
                중개서비스 개선 방안과 이에 대한 후속조치인 2021년 10월
                공인중개사법 시행규칙 개정이 중개수수료에 미치는 영향을 모두
                계산기에 반영하였습니다. 개정된 중개보수 상한요율 공인중개사법
                시행규칙이 공표·시행되는 2021년 10월 19일 이후 중개의뢰인 간에
                매매 또는 임대차 등의 계약을 체결하는 경우부터 적용되니
                유의하시기 바랍니다.
              </p>
              <p>
                1) 주택 매매 거래 보수요율 6억원 이상 ~ 9억원 미만 구간 요율
                인하 : 0.5% → 0.4% 9억원 이상의 구간 요율 단계적 인하 : 0.9% →
                0.5% ~ 0.7% 2) 주택 임대차 거래 보수요율 3억원 이상 ~ 6억원 미만
                구간 요율 인하 : 0.4% → 0.3% 6억원 이상의 구간 요율 단계적 인하
                : 0.8% → 0.4% ~ 0.6%
              </p>
            </section>
            <section>
              <h2 className="font-bold mt-10">중개수수료 또는 중개보수란?</h2>
              <p>
                중개수수료 또는 중개보수는 공인중개사를 통해 부동산의
                매매계약이나 전세 및 월세 임대차 계약 등을 체결하는 경우
                중개의뢰인이 공인중개사의 중개행위에 대하여 지급하는 대가를
                말합니다. 지난 2014년 공인중개사법 개정과 함께 중개수수료에서
                중개보수로 용어가 변경되었지만 아직은 중개수수료라는 용어가 더
                널리 사용되고 있습니다.
              </p>
            </section>
            <section>
              <h2 className="font-bold mt-10">중개수수료의 지급과 지급시기</h2>
              <p>
                일반적인 계약에서는 계약 당사자인 중개의뢰인 — 매매 계약이면
                매도인과 매수인, 임대차 계약이면 임대인과 임차인 — 모두가
                공인중개사에게 중개수수료를 지급하여야 합니다. 중개수수료는 보통
                거래대금의 지급이 완료되는 잔금일에 지급하지만 중개의뢰인과
                공인중개사가 약정으로 지급시기를 달리 정할 수 있습니다. -
                <Link
                  href="https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B3%B5%EC%9D%B8%EC%A4%91%EA%B0%9C%EC%82%AC%EB%B2%95/%EC%A0%9C32%EC%A1%B0"
                  target="_blank"
                  className="underline">
                  공인중개사법 제32조
                </Link>
              </p>
            </section>
            <section>
              <h2 className="font-bold mt-10">
                중개수수료의 상한요율과 한도액
              </h2>
              <p>
                주택 중개수수료의 상한요율과 한도액은 공인중개사법 시행규칙에서
                정한 범위 내에서 특별시·광역시·도 또는 특별자치도가 각 지역의
                상황에 맞게 달리 정할 수 있습니다. 현재는 전국의 상한요율과
                한도액이 같지만 향후 시·도별 조례가 개정되는 경우에는 지역별
                차이가 발생할 수 있습니다. 반면 오피스텔 및 토지, 상가 등 기타
                부동산 중개수수료의 상한요율은 공인중개사법 시행규칙에서
                일률적으로 정하고 있어 주택의 경우와 달리 지역별 차이가
                없습니다. -
                <Link
                  href="https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B3%B5%EC%9D%B8%EC%A4%91%EA%B0%9C%EC%82%AC%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99/%EC%A0%9C20%EC%A1%B0"
                  target="_blank"
                  className="underline">
                  공인중개사법 시행규칙 제20조
                </Link>
              </p>
            </section>
            <section>
              <h2 className="font-bold mt-10">중개수수료의 결정</h2>
              <p>
                중개수수료는 공인중개사법 시행규칙과 특별시·광역시·도 또는
                특별자치도가 조례에서 정하고 있는 상한요율과 한도액에 따라
                결정되는 최대 중개수수료 내에서 중개의뢰인과 공인중개사가
                협의하여 결정하게 됩니다. 공인중개사는 자신의 사업 규모에 따라
                일반과세자면 중개수수료의 10%를, 그리고 간이과세자면
                중개수수료의 4%를 부가가치세로 하여 중개의뢰인에게 청구할 수
                있습니다. 공인중개사는 중개대상물의 권리관계 등의 확인 또는
                반환채무이행 보장에 소요되는 실비를 중개수수료와 함께 청구할 수
                있습니다.
              </p>
            </section>
            <p>
              <Link
                href="https://www.kar.or.kr/pinfo/brokerfee.asp"
                target="_blank"
                className="underline mt-10">
                중개수수료 요율표
              </Link>
              <span>- 한국공인중개사협회</span>
            </p>
            <button
              onClick={() => setMoreInfo(!moreInfo)}
              className="w-full mt-5 text-[16px] text-[#2551F4] text-center">
              {moreInfo ? '접기' : '더보기'}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="h-[244px] rounded-md p-4 bg-[#E9EBF8] overflow-hidden leading-normal">
            <h1 className="text-[24px] font-bold">중개보수 정책</h1>
            <section className="text-[13px]">
              <h2 className="font-bold mt-5">중개보수 개정 반영 안내</h2>
              <p>
                2021년 8월 20일 국민부담 경감을 목표로 발표된 중개보수 및
                중개서비스 개선 방안과 이에 대한 후속조치인 2021년 10월
                공인중개사법 시행규칙 개정이 중개수수료에 미치는 영향을 모두
                계산기에 반영하였습니다.
              </p>
            </section>
            <button
              onClick={() => setMoreInfo(!moreInfo)}
              className="w-full mt-5 text-[16px] text-[#2551F4] text-center">
              {moreInfo ? '접기' : '더보기'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
