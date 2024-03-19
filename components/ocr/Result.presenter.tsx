'use client';

import 'swiper/css';

import Link from 'next/link';
import { IoChevronBack } from 'react-icons/io5';
import { PiWarningCircle } from 'react-icons/pi';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Cell, CellWord, IResultProps, Table } from './OCR.types';
import ResultData1 from './ResultData1.presenter';
import ResultData2 from './ResultData2.presenter';
import ResultData3 from './ResultData3.presenter';
import ResultData4 from './ResultData4.presenter';
import ResultData5 from './ResultData5.presenter';
import ResultData6 from './ResultData6.presenter';

export default function OCRResultUI({
  selected,
  setSelected,
  category1,
  setCategory1,
  category2,
  setCategory2,
  setImg,
  setAnalyzeResult,
  analyzeResult,
}: IResultProps) {
  return (
    <div className="w-[390px] h-full bg-white-0 p-4">
      <header className="h-[106px] flex items-end px-3 pb-7 justify-between border-b-2 border-b-slate-300 -mx-4 -mt-4">
        <Link
          href="/"
          className="w-[28px] h-[28px] flex justify-center items-center">
          <IoChevronBack />
        </Link>
        <p className="text-[24px] font-bold">분석 결과</p>
        <div className="w-[28px] h-[28px]" />
      </header>
      <h1 className="text-[20px] font-bold mt-10 my-7">계약서 내용</h1>
      {analyzeResult.map((result: Table, index) =>
        selected === index && index !== undefined ? (
          <div key={result.cells[0].columnSpan} className="text-[12px] mb-5">
            <table className="table-auto">
              <tbody>
                {Array.from(
                  {
                    length:
                      Math.max(...result.cells.map((cell) => cell.rowIndex)) +
                      1,
                  },
                  (_, rowIndex) => (
                    <tr key={rowIndex} className="border">
                      {result.cells
                        .filter((cell) => cell.rowIndex === rowIndex)
                        .sort((a, b) => a.columnIndex - b.columnIndex)
                        .map((cell: Cell) => (
                          <td
                            key={cell.columnIndex}
                            className="border p-2 text-left whitespace-normal overflow-auto"
                            colSpan={cell.columnSpan}>
                            {cell.cellTextLines.length > 0 &&
                              cell.cellTextLines[0].cellWords
                                .map((cellWord: CellWord) => cellWord.inferText)
                                .join(' ')}
                          </td>
                        ))}
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div
            key={result.cells[0].columnIndex}
            className="w-full h-[200px] text-[16px] mb-5 border flex flex-col items-center justify-center gap-2 rounded-md">
            <PiWarningCircle className="text-[22px] text-red-500" />
            <span>계약서에 관련 정보가 누락되었거나</span>
            <span>해당 내용이 인식되지 않았습니다.</span>
          </div>
        ),
      )}
      <div className="h-[37px] bg-white-0 border-y-2 -mx-4 p-4 flex items-center justify-between text-[15px] font-extrabold text-[#A6B3CD]">
        <button
          onClick={() => setSelected(0)}
          className={`${selected === 0 ? 'text-[#696E83]' : ''}`}>
          1. 부동산/계약내용
        </button>
        <button
          onClick={() => setSelected(1)}
          className={`${selected === 1 ? 'text-[#696E83]' : ''}`}>
          2. 특약사항
        </button>
        <button
          onClick={() => setSelected(2)}
          className={`${selected === 2 ? 'text-[#696E83]' : ''}`}>
          3. 인적사항
        </button>
      </div>
      {selected === 0 && (
        <div className="h-[62px] bg-[#eef2ff] flex items-center justify-between gap-5 border-y-[1px] border -mx-4 p-[2px_20px] text-[#2551F4]">
          <Swiper slidesPerView={3.1}>
            <SwiperSlide>
              <button
                className={`w-[90px] h-[38px] rounded-3xl border border-[#2551F4] text-[14px] font-extrabold ${category1 === 0 ? 'bg-[#e6ebfd]' : 'bg-white'}`}
                onClick={() => setCategory1(0)}>
                보증금
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                className={`w-[90px] h-[38px] rounded-3xl border border-[#2551F4] text-[14px] font-extrabold ${category1 === 1 ? 'bg-[#e6ebfd]' : 'bg-white'}`}
                onClick={() => setCategory1(1)}>
                소재지
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                className={`w-[90px] h-[38px] rounded-3xl border border-[#2551F4] text-[14px] font-extrabold ${category1 === 2 ? 'bg-[#e6ebfd]' : 'bg-white'}`}
                onClick={() => setCategory1(2)}>
                임대할 부분
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                className={`w-[90px] h-[38px] rounded-3xl border border-[#2551F4] text-[14px] font-extrabold ${category1 === 3 ? 'bg-[#e6ebfd]' : 'bg-white'}`}
                onClick={() => setCategory1(3)}>
                잔금
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
      {selected === 2 && (
        <div className="h-[62px] bg-[#eef2ff] flex items-center gap-5 border-y-[1px] border -mx-4 p-[2px_20px] text-[#2551F4]">
          <button
            className={`w-[90px] h-[38px] rounded-3xl border border-[#2551F4] text-[14px] font-extrabold bg-white ${category2 === 0 ? 'bg-[#e6ebfd]' : ''}`}
            onClick={() => setCategory2(0)}>
            임대인
          </button>
          <button
            className={`w-[90px] h-[38px] rounded-3xl border border-[#2551F4] text-[14px] font-extrabold bg-white ${category2 === 1 ? 'bg-[#e6ebfd]' : ''}`}
            onClick={() => setCategory2(1)}>
            대리인
          </button>
        </div>
      )}
      {selected === 0 && category1 === 0 && <ResultData1 />}
      {selected === 0 && category1 === 1 && <ResultData2 />}
      {selected === 0 && category1 === 2 && <ResultData3 />}
      {selected === 0 && category1 === 3 && <ResultData4 />}
      {selected === 2 && category2 === 0 && <ResultData5 />}
      {selected === 2 && category2 === 1 && <ResultData6 />}
    </div>
  );
}
