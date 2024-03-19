import 'swiper/css';

import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineXMark } from 'react-icons/hi2';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';

import { isLogin } from '@/utils/isLogin';

import Banner from '../Common/Banner';
import Footer from '../Common/Footer';
import Modal from '../Common/Modal';
import LatestPolicySkeleton from '../Common/Skeleton/LatestPolicy';
import OnboardingSkeleton from '../Common/Skeleton/Onboarding';
import PaginationSkeleton from '../Common/Skeleton/Pagination';
import { IHomePresenter } from './Home.types';

export default function HomeUI({
  policyLetter,
  currentPage,
  prevBtn,
  nextBtn,
  isModal,
  openModal,
  closeModal,
  modalRef,
  date,
  onPageClick,
  data,
}: IHomePresenter) {
  return (
    <div className="w-[390px] h-full bg-white p-4 relative">
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
          <div className="text-end mt-3">
            <button onClick={closeModal} className="w-[17px] h-[17px]">
              <HiOutlineXMark />
            </button>
          </div>
          <div className="h-[30px] text-center">
            <Link href="/commission" onClick={closeModal}>
              <span className="underline-effect">중개수수료 계산기</span>
            </Link>
          </div>
          <div className="h-[30px] text-center">
            <Link href="/inquiry" onClick={closeModal}>
              <span className="underline-effect">조회 및 열람</span>
            </Link>
          </div>
          <div className="h-[30px] text-center">
            <Link href="/analysis" onClick={closeModal}>
              <span className="underline-effect">계약서 업로드</span>
            </Link>
          </div>
          <div className="h-[30px] text-center">
            <Link href="/myPage" onClick={closeModal}>
              <span className="underline-effect">마이페이지</span>
            </Link>
          </div>
          {isLogin() ? (
            <Link
              href="/login"
              className="text-[#B7B7B7] text-[13px] underline text-center"
              onClick={() => {
                localStorage.clear();
              }}>
              로그아웃
            </Link>
          ) : (
            <Link
              href="/login"
              className="text-[#B7B7B7] text-[13px] underline text-center">
              로그인
            </Link>
          )}
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
      {!data ? <OnboardingSkeleton /> : <Banner />}
      <div className="-mx-4 h-[12px] bg-[#f7f7f7]" />
      <div className="flex flex-col justify-between mt-6">
        <section className="ml-3 mb-1 flex items-center gap-2">
          <Image
            src="/images/letter_icon.svg"
            alt="레터 아이콘"
            width={24}
            height={16}
          />
          <p className="text-2xl font-bold">부동산 정책 레터</p>
        </section>
        <section className="-ml-1 flex justify-between items-center">
          <Image
            src="/images/letter_text.svg"
            alt="레터 텍스트"
            width={255}
            height={23}
          />
          <Link
            href="/policy-letter"
            className="text-sm underline text-slate-400">
            전체보기
          </Link>
        </section>
      </div>
      <div className="h-[140px] mt-[30px]">
        <Swiper slidesPerView={3.5}>
          {policyLetter?.body.map((v: any) => (
            <SwiperSlide key={v.thumbnailImgUrl}>
              <Link key={v.id} href={`/policy-letter/${v.id}`}>
                <div className="w-[85px] h-[85px] rounded-[50%]">
                  <Image
                    src={v.thumbnailImgUrl}
                    alt="정책 이미지"
                    width={85}
                    height={85}
                    className="w-[85px] h-[85px] rounded-[50%]"
                  />
                </div>
                <div className="w-[90px] font-extrabold text-[15px] text-[#0E298D] mt-[11px]">
                  {v.title}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="-mx-4 h-[12px] bg-[#f7f7f7]" />
      <div className="flex items-center gap-2 m-[20px_0px_10px_8px]">
        <Image
          src="/images/latest_icon.svg"
          alt="최신 정책 아이콘"
          width={33}
          height={34}
        />
        <p className="text-2xl font-bold">최신 부동산 정책</p>
      </div>
      <div className="-ml-1">
        <Image
          src="/images/latest_text.svg"
          alt="최신 텍스트"
          width={155}
          height={23}
        />
      </div>
      <div className="h-full mt-5 border-t-2 border-b-2 border-slate-400">
        {!data && <LatestPolicySkeleton />}
        {data?.body.list.map((v, idx) => (
          <Link
            href={v.enterUrl}
            target="_blank"
            key={v.enterTitle}
            className={`w-full bg-[#f7f9ff] h-[80px] p-[5px_10px] flex relative ${idx !== 4 ? 'border-b-[1px] border-slate-300' : ''}`}>
            <div className="text-[15px] text-[#343434] flex flex-col justify-center font-bold w-[320px] pr-5">
              <div className="flex items-center">
                <div className="truncate">{v.enterTitle}</div>
                {date === v.regDate && (
                  <Image
                    src="/images/new_icon.svg"
                    alt="뉴 아이콘"
                    width={16}
                    height={16}
                    className="ml-1"
                  />
                )}
              </div>
              <p className="mt-3 text-[14px] text-[#696E83]">{v.regDate}</p>
            </div>
            <div className="mt-5 absolute right-5 top-0">
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
      {!data ? (
        <PaginationSkeleton />
      ) : (
        <div className="mt-3 mb-[120px] flex justify-between items-center text-[16px]">
          <button
            onClick={prevBtn}
            disabled={currentPage === 1}
            className="flex justify-center items-center">
            <IoChevronBack />
          </button>
          {data?.body.startPage &&
            data?.body.endPage &&
            currentPage &&
            Array.from(
              {
                length: Math.min(
                  5,
                  parseInt(data.body.endPage, 10) -
                    parseInt(data.body.startPage, 10) +
                    1,
                ),
              },
              (_, i) =>
                Math.max(
                  parseInt(data.body.startPage, 10),
                  Math.min(
                    parseInt(data.body.endPage, 10) - 4,
                    currentPage - 2,
                  ),
                ) + i,
            ).map((pageNumber) => (
              <button
                key={pageNumber}
                className={`${currentPage === pageNumber ? 'font-bold text-blue-500' : null}`}
                onClick={() => onPageClick && onPageClick(pageNumber)}>
                {pageNumber}
              </button>
            ))}
          <button
            onClick={nextBtn}
            disabled={currentPage === parseInt(data?.body.endPage, 10)}
            className="flex justify-center items-center">
            <IoChevronForward />
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
}
