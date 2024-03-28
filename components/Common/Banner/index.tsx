'use client';

import 'swiper/css';
import './banner.styles.css';

import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { onGetOnboarding } from '@/service/home/useHomeService';

interface IOnboarding {
  lastChngRegDttm: string;
  thumbnailImgUrl: string;
}

export default function Banner() {
  const { data, isError } = onGetOnboarding();

  if (isError) {
    // eslint-disable-next-line no-alert
    alert(data.head.resultMsg);
  }

  return (
    <Swiper
      pagination={{ type: 'fraction' }}
      modules={[Pagination, Autoplay]}
      loop
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      id="onboarding"
      className="rounded-md mt-9 mb-5">
      {data?.body.map((v: IOnboarding, idx: number) => (
        <SwiperSlide key={v.lastChngRegDttm}>
          {idx === 0 ? (
            <Link href="/onboarding">
              <Image
                src={v.thumbnailImgUrl}
                alt="정책 이미지"
                width={362}
                height={189}
              />
            </Link>
          ) : (
            <Image
              src={v.thumbnailImgUrl}
              alt="정책 이미지"
              width={362}
              height={189}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
