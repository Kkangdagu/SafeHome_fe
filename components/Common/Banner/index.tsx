'use client';

import 'swiper/css';
import './banner.styles.css';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IOnBoarding } from '@/components/home/Home.types';
import { getOnBoarding } from '@/utils/home';

export default function Banner() {
  const [onBoarding, setOnBoarding] = useState<IOnBoarding | null>(null);

  const GetOnBoarding = async () => {
    const res = await getOnBoarding();
    setOnBoarding(res);
  };

  useEffect(() => {
    GetOnBoarding();
  }, []);

  return (
    <Swiper
      pagination={{ type: 'fraction' }}
      modules={[Pagination]}
      loop
      className="h-[160px] rounded-md my-12">
      {onBoarding?.body.map((v) => (
        <SwiperSlide key={v.lastChngRegDttm}>
          <Link href="/onboarding">
            <Image
              src={v.thumbnailImgUrl}
              alt="정책 이미지"
              width={358}
              height={160}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
