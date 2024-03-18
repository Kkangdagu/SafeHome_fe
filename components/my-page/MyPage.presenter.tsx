'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import instance from '@/utils/intercepter';

import { IMyPageUIProps } from './MyPage.types';

export default function MyPageUI({
  email,
  name,
  visible,
  uploadItem,
}: IMyPageUIProps) {
  const router = useRouter();
  const [deleteBtn, setDeleteBtn] = useState(false);

  return (
    <div className="w-[390px] h-full bg-[#F2F3F6] flex flex-col min-h-screen">
      <div className="relative w-[390px] h-[106px] bg-white-0">
        <button onClick={() => router.push('/')}>
          <Image
            src="/images/left_arrow.svg"
            width={14}
            height={26}
            alt=""
            className="absolute top-[55%] left-[5%]"
          />
        </button>
        <div className="text-black text-[24px] font-semibold absolute top-[52%] left-[35%]">
          마이페이지
        </div>
      </div>
      <div className="border-b-[2px] border-[#A6B3CD]" />
      <div className="w-[340px] h-[100px] mx-auto mt-[83px] relative">
        <div className="inline-block">
          <div className="mx-auto">
            <div className="inline-block text-[28px] font-semibold">{name}</div>
            <button
              className="ml-[10px]"
              onClick={() => {
                router.push('/myPage/edit');
              }}>
              <Image
                src="/images/edit_icon.svg"
                width={22.5}
                height={24.75}
                alt=""
              />
            </button>
          </div>
          <div className="mt-[20px] text-[15px] text-[#696E83]">{email}</div>
        </div>
        <div className="w-[75px] h-[75px] rounded-[70%] overflow-hidden absolute top-[-9%] left-[75%] ">
          <Image
            src="images/profile.svg"
            width={75}
            height={75}
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </div>
      <div className="mx-auto w-[348px] h-[113px] rounded-[10px] bg-[#E9EBF8] relative mb-[42px]">
        <button
          className="absolute top-[20%] left-[15%]"
          onClick={() => {
            router.push('/myPage/bookmark');
          }}>
          <Image
            src="images/bookmark_icon.svg"
            width={28.33}
            height={44.16}
            alt=""
          />
        </button>
        <div className="text-[15px] text-[#696E83] absolute top-[67%] left-[13%]">
          북마크
        </div>
        <button className="absolute top-[25%] right-[20%]">
          <Image
            src="images/call_icon.svg"
            width={33.68}
            height={33.68}
            alt=""
          />
        </button>
        <div className="text-[15px] text-[#696E83] absolute top-[67%] right-[17%]">
          고객문의
        </div>
      </div>
      <div className=" mx-auto w-[348px] h-[auto] rounded-[10px] bg-[#E9EBF8] mb-[30px] relative">
        <div className="text-[23px] pl-[16px] pt-[22px] relative">
          계약서 업로드 내역
          <button
            onClick={() => {
              setDeleteBtn(!deleteBtn);
            }}
            className={`text-[#2551F4] text-[13px] absolute underline left-[85%] top-[55%] ${visible ? 'invisible' : 'block'}`}>
            삭제
          </button>
        </div>

        {visible ? (
          <div>
            <Image
              src="images/contract_icon.svg"
              width={76}
              height={106}
              alt=""
              className="mx-auto mt-[44px]"
            />
            <div className="w-[220px] mx-auto mt-[24px] pb-[42px] text-[#696E83] text-[16px]">
              계약서 업로드 내역이 없습니다.
            </div>
          </div>
        ) : (
          <div className="mt-[20px] mb-[28px]">
            {uploadItem?.data.map((v) => {
              const parsing = JSON.parse(v.json);

              return (
                <Link
                  href={`/review/${v.id}`}
                  key={v.id}
                  className="w-[315px] h-[135px]">
                  <div className="bg-white-0 w-[315px] h-[135px] rounded-[6px] mx-auto relative mb-[30px]">
                    <div className="absolute top-[17%] left-[5%] text-[#696E83] text-[13px]">
                      <div className="text-[18px] mb-[20px]">
                        {parsing[0]?.cells?.map((a: any) => (
                          <span key={a.columSpan}>
                            {a.cellTextLines.map((b: any) => (
                              <span key={b.columSpan}>
                                {b.cellWords.map((c: any) => (
                                  <span key={c.inferText}>
                                    {c.inferText.includes('강남구')
                                      ? '강남구'
                                      : c.inferText.includes('강서구')
                                        ? '강서구'
                                        : c.inferText.includes('강동구')
                                          ? '강동구'
                                          : c.inferText.includes('강북구')
                                            ? '강북구'
                                            : c.inferText.includes('관악구')
                                              ? '관악구'
                                              : c.inferText.includes('광진구')
                                                ? '광진구'
                                                : c.inferText.includes('구로구')
                                                  ? '구로구'
                                                  : c.inferText.includes(
                                                        '금천구',
                                                      )
                                                    ? '금천구'
                                                    : c.inferText.includes(
                                                          '노원구',
                                                        )
                                                      ? '도봉구'
                                                      : c.inferText.includes(
                                                            '동대문구',
                                                          )
                                                        ? '동대문구'
                                                        : c.inferText.includes(
                                                              '동작구',
                                                            )
                                                          ? '동작구'
                                                          : c.inferText.includes(
                                                                '마포구',
                                                              )
                                                            ? '마포구'
                                                            : c.inferText.includes(
                                                                  '서대문구',
                                                                )
                                                              ? '서대문구'
                                                              : c.inferText.includes(
                                                                    '서초구',
                                                                  )
                                                                ? '서초구'
                                                                : c.inferText.includes(
                                                                      '성동구',
                                                                    )
                                                                  ? '성동구'
                                                                  : c.inferText.includes(
                                                                        '성북구',
                                                                      )
                                                                    ? '성북구'
                                                                    : c.inferText.includes(
                                                                          '송파구',
                                                                        )
                                                                      ? '송파구'
                                                                      : c.inferText.includes(
                                                                            '양천구',
                                                                          )
                                                                        ? '양천구'
                                                                        : c.inferText.includes(
                                                                              '영등포구',
                                                                            )
                                                                          ? '영등포구'
                                                                          : c.inferText.includes(
                                                                                '용산구',
                                                                              )
                                                                            ? '용산구'
                                                                            : c.inferText.includes(
                                                                                  '은평구',
                                                                                )
                                                                              ? '은평구'
                                                                              : c.inferText.includes(
                                                                                    '종로구',
                                                                                  )
                                                                                ? '종로구'
                                                                                : c.inferText.includes(
                                                                                      '중구',
                                                                                    )
                                                                                  ? '중구'
                                                                                  : c.inferText.includes(
                                                                                        '중랑구',
                                                                                      )
                                                                                    ? '중랑구'
                                                                                    : null}
                                  </span>
                                ))}
                              </span>
                            ))}
                          </span>
                        ))}
                      </div>
                      <div className="mb-[20px]">
                        {v.frstRegDttm.substr(0, 10)}
                      </div>
                      <div>내용</div>
                    </div>
                    <div
                      className="w-[85px] h-[100px] border-solid border-2 bg-cover absolute top-[10%] left-[67%] "
                      style={{ backgroundImage: `url(${v.imageUrl})` }}
                    />
                    <button
                      className={`${deleteBtn ? 'block' : 'invisible'}`}
                      onClick={() => {
                        instance.delete(`/member/contract/delectOne/${v.id}`);
                        setDeleteBtn(false);
                        window.location.reload();
                      }}>
                      <Image
                        src="images/upload_delete.svg"
                        alt=""
                        width={26}
                        height={26}
                        className="absolute left-[95%] top-[-5%]"
                      />
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
