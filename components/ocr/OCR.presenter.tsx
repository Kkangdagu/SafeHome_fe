import Image from 'next/image';
import Link from 'next/link';
import { CgSpinner } from 'react-icons/cg';
import { IoChevronBack } from 'react-icons/io5';

import Button from '../Common/Button';
import Modal from '../Common/Modal';
import { IOCRProps } from './OCR.types';
import ResultContainer from './Result.container';

export default function OCRUI({
  img,
  setImg,
  isProcessing,
  analyzeResult,
  setAnalyzeResult,
  isModal,
  onImageUpload,
  onImageAnalyzing,
  onRestImg,
}: IOCRProps) {
  if (analyzeResult.length > 0 && setAnalyzeResult) {
    return (
      <ResultContainer
        setImg={setImg}
        analyzeResult={analyzeResult}
        setAnalyzeResult={setAnalyzeResult}
      />
    );
  }

  return (
    <div className="w-[390px] h-screen bg-layout-primary p-4 relative">
      <header className="h-[106px] flex items-end px-3 pb-7 justify-between bg-white border-b-2 border-b-slate-300 -mx-4 -mt-4">
        <Link
          href="/"
          className="w-[28px] h-[28px] flex justify-center items-center">
          <IoChevronBack />
        </Link>
        <p className="text-[24px] font-bold">계약서 업로드</p>
        <div className="w-[28px] h-[28px]" />
      </header>
      <div id="modal" />
      {isModal && isProcessing && (
        <Modal
          type="analysis"
          className="z-[999] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="animate-rotate">
            <CgSpinner />
          </div>
          <div className="text-[20px] font-bold text-white-0">
            <p>분석중입니다.</p>
            <p>잠시만 기다려주세요.</p>
          </div>
        </Modal>
      )}
      <div className="h-[813px] flex flex-col justify-center items-center">
        {img && isProcessing && (
          <Image
            src={img}
            width={321}
            height={486}
            alt="미리보기"
            className="mb-20"
          />
        )}
        {img && !isProcessing && (
          <form
            className="w-full h-full flex flex-col justify-center items-center"
            onSubmit={onImageAnalyzing}>
            <div className="flex flex-col gap-10">
              <Image src={img} width={321} height={486} alt="미리보기" />
              <div className="w-full flex justify-around">
                <Button variant="reset" onClick={onRestImg}>
                  초기화
                </Button>
                <Button variant="result" type="submit">
                  분석하기
                </Button>
              </div>
            </div>
          </form>
        )}
        {!img && (
          <form className="w-full h-full flex flex-col justify-center items-center">
            <p className="text-[24px] mb-10">이곳에 이미지를 업로드 하세요</p>
            <label
              htmlFor="upload"
              className="w-full h-[223px] flex flex-col justify-center items-center gap-5 rounded-md border border-black border-dashed cursor-pointer">
              <Image
                src="/images/upload_img_icon.svg"
                alt="사진"
                width={86}
                height={108}
              />
              <span className="text-[15px]">
                이미지를 jpg/png/pdf 형식으로 올려주세요
              </span>
              <input
                type="file"
                accept="image/*, .pdf"
                id="upload"
                className="hidden"
                onChange={onImageUpload}
              />
            </label>
          </form>
        )}
      </div>
    </div>
  );
}
