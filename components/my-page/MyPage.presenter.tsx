'use client';

import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';

import instance from '@/utils/intercepter';

import Footer from '../Common/Footer';
import Header from '../Common/Header';
import { IMyPageUIProps } from './MyPage.types';

export default function MyPageUI({
  email,
  name,
  visible,
  uploadItem,
}: IMyPageUIProps) {
  return (
    <div className="w-[390px] h-full bg-white-0 p-4 min-h-screen">
      <Header text="마이페이지" href="/" />
      <div className="flex gap-5 mt-10">
        <Image
          src="/images/profile_icon.svg"
          alt="프사"
          width={86}
          height={88}
        />
        <div className="flex flex-col justify-center gap-3">
          <span className="text-[28px] font-semibold">{name}</span>
          <span className="text-[13px] text-[#696E83]">{email}</span>
        </div>
        <div className="flex items-center mb-5">
          <Link
            href="/myPage/edit"
            className="w-[83px] h-[30px] text-[11px] text-[#696E83] flex justify-center items-center rounded-2xl border-[2px] border-[#E9EBF8]">
            내 정보 수정
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <section className="w-[348px] h-[109px] flex justify-between rounded-md bg-blue-100 mt-10 py-5">
          <Link
            href="/myPage/bookmark"
            className="w-full flex flex-col justify-center items-center gap-3">
            <Image src="/images/star.svg" alt="북마크" width={35} height={35} />
            <span className="text-[15px] text-[#6C9BF3]">즐겨찾기</span>
          </Link>
          <div className="w-[1px] h-full border border-[#6C9BF3]" />
          <Link
            href="/"
            className="w-full flex flex-col justify-center items-center gap-3">
            <Image
              src="/images/phone.svg"
              alt="북마크"
              width={35}
              height={35}
            />
            <span className="text-[15px] text-[#6C9BF3]">고객문의</span>
          </Link>
        </section>
      </div>
      <div className="text-[17px] text-[#696E83] font-semibold mt-10 mb-3 ml-3">
        <span>업로드 내역</span>
      </div>
      {visible ? (
        <div className="flex justify-center">
          <div className="w-[348px] h-[283px] rounded-md bg-blue-100 flex flex-col gap-2 justify-center items-center text-[23px] text-[#BEC0CB] font-semibold">
            <span>계약서 업로드</span>
            <span className="mb-3">내역이 없습니다.</span>
            <Image
              src="/images/my_doc.svg"
              alt="없음"
              width={86}
              height={113}
            />
          </div>
        </div>
      ) : (
        <div className="h-full flex flex-col gap-4 items-center">
          {uploadItem?.data.map((v) => {
            const parsing = JSON.parse(v.json);
            return (
              <div key={v.id}>
                <div className="w-[348px] h-[168px] p-[20px_15px] flex items-center bg-blue-100 rounded-md">
                  <Link href={`/review/${v.id}`} className="w-[82px h-[117px]">
                    <Image
                      src={v.imageUrl}
                      alt="계약서"
                      width={82}
                      height={117}
                      className="h-[117px]"
                    />
                  </Link>
                  <div className="ml-3 h-full relative">
                    {parsing[0]?.cells?.map((a: any) => (
                      <div key={a.columIndex}>
                        {a.cellTextLines.map((b: any) => (
                          <div key={b.rowIndex}>
                            {b.cellWords.map((c: any) => (
                              <div
                                key={c.inferText}
                                className="text-[20px] text-[#696E83] font-semibold mt-5">
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
                                              : c.inferText.includes('금천구')
                                                ? '금천구'
                                                : c.inferText.includes('노원구')
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
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                    <div className="w-[125px] text-[14px] text-[#9EA1AE] absolute bottom-4">
                      {v.frstRegDttm.split('T')[0]}
                    </div>
                  </div>
                  <div className="w-[150px] h-full text-end text-[11px] text-[#2551F4] mt-3">
                    <button
                      onClick={() => {
                        Swal.fire({
                          icon: 'warning',
                          title: '정말 삭제하시겠습니까?',
                          text: '삭제한 내역은 복구할 수 없습니다.',
                          showCancelButton: true,
                          confirmButtonText: '확인',
                          confirmButtonColor: '#429f50',
                          cancelButtonColor: 'red',
                          cancelButtonText: '취소',
                        }).then((res) => {
                          if (res.isConfirmed) {
                            instance.delete(
                              `/member/contract/delectOne/${v.id}`,
                            );
                            window.location.reload();
                          }
                        });
                      }}
                      className="underline">
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
}
