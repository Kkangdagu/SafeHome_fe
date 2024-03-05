'use client';

import Image from 'next/image';
import Link from 'next/link';

import Banner from '../Common/Banner';
import Modal from '../Common/Modal';
import { IHomePresenter } from './Home.types';

export default function HomeUI({
  onBoarding,
  onLatestPolicy,
  isModal,
  openModal,
  closeModal,
  modalRef,
}: IHomePresenter) {
  return (
    <div className="w-[390px] h-screen bg-layout-primary p-4 relative">
      <header className="w-full flex justify-end mt-4">
        <Image
          src="/images/menu_icon.svg"
          alt="메뉴 아이콘"
          width={27}
          height={21}
          className="cursor-pointer"
          onClick={openModal}
        />
      </header>
      <div id="modal" />
      {isModal && (
        <Modal
          type="menu"
          isOverlay
          className="z-[999] right-0 top-0 text-base text-[18px]"
          ref={modalRef}>
          <button onClick={closeModal}>닫기</button>
          <div className="h-[30px] relative">
            <Link href="/" onClick={closeModal}>
              <Image
                src="/images/modal/calculator.svg"
                width={14}
                height={20}
                alt=""
                className="inline-block absolute top-[10%]"
              />
              <div className="absolute left-[15%]">중개수수료 계산기</div>
            </Link>
          </div>
          <div className="h-[30px] relative">
            <Link href="/inquiry" onClick={closeModal}>
              <Image
                src="/images/modal/search_icon.svg"
                width={20}
                height={18}
                alt=""
                className="inline-block absolute top-[10%]"
              />
              <div className="absolute left-[15%]">조회 및 열람</div>
            </Link>
          </div>
          <div className="h-[30px] relative">
            <Link href="/analysis" onClick={closeModal}>
              <Image
                src="/images/modal/upload_icon.svg"
                width={15}
                height={18}
                alt=""
                className="inline-block absolute top-[10%]"
              />
              <div className="absolute left-[15%]">계약서 업로드</div>
            </Link>
          </div>
          <div className="h-[30px] relative">
            <Link href="/myPage" onClick={closeModal}>
              <Image
                src="/images/modal/myPage_icon.svg"
                width={16}
                height={18}
                alt=""
                className="inline-block absolute top-[10%]"
              />
              <div className="absolute left-[15%]">마이페이지</div>
            </Link>
          </div>
        </Modal>
      )}
      <div className="flex mt-4">
        <Image
          src="/images/logo_slogan.svg"
          alt="메인화면 로고 및 슬로건"
          width={136}
          height={47}
        />
        <p className="text-sm ml-1 mt-8">세이프하게 집 구하는 방법, 세집!</p>
      </div>
      <Banner onBoarding={onBoarding} />
      <div className="flex justify-between mt-5">
        <section className="flex gap-2">
          <p className="text-2xl font-semibold">부동산 정책 레터</p>
          <Image
            src="/images/letter_icon.svg"
            alt="레터 아이콘"
            width={28}
            height={19}
            className="mt-1"
          />
        </section>
        <Link
          href="/policy-letter"
          className="text-sm underline mt-2 text-slate-400">
          전체보기
        </Link>
      </div>
      <p className="text-sm font-bold m-[15px_0px_20px_0px]">
        유용한 부동산 정책을 알기 쉽게 전달해 드려요!
      </p>
      <div className="h-[140px] border">데이터</div>
      <div className="flex justify-between m-[50px_0px_20px_0px]">
        <p className="text-2xl font-extrabold">최신 부동산 정책</p>
        <Link
          href="/latest-policy"
          className="text-sm underline text-slate-400 mt-2">
          전체보기
        </Link>
      </div>
      <div className="h-[180px] border-t-2 border-b-2 border-slate-400">
        {onLatestPolicy?.body.list.slice(0, 2).map((v, idx) => (
          <Link
            href={v.enterUrl}
            target="_blank"
            key={v.enterTitle}
            className={`w-full bg-[#EEF2FF] h-1/2 p-[8px_3px] flex ${idx === 0 ? 'border-b-[1px] border-slate-300' : ''}`}>
            <p className="w-[90%] text-base font-bold pr-5">
              {v.enterTitle}
              <Image
                src="/images/new_icon.svg"
                alt="뉴 아이콘"
                width={16}
                height={16}
                className="inline ml-2"
              />
            </p>
            <div className="mt-2">
              <Image
                src="/images/right_arrow_icon.svg"
                alt="화살표"
                width={10}
                height={20}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
