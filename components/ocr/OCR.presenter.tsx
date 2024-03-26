import Image from 'next/image';
import { CgSpinner } from 'react-icons/cg';

import Button from '../Common/Button';
import Header from '../Common/Header';
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
    <div className="w-[390px] h-screen bg-white-0 p-4 relative">
      <Header text="계약서 업로드" href="/" />
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
            className="mb-20 border"
          />
        )}
        {img && !isProcessing && (
          <form
            className="w-full h-full flex flex-col justify-center items-center"
            onSubmit={onImageAnalyzing}>
            <div className="flex flex-col gap-10">
              <Image
                src={img}
                width={321}
                height={486}
                alt="미리보기"
                className="border"
              />
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
          <form className="w-full h-full justify-center items-center">
            <p className="text-[24px] text-center mb-16 mt-[170px]">
              이곳에 이미지를 업로드 하세요
            </p>
            <label
              htmlFor="upload"
              className="w-full h-[223px] flex justify-center items-center cursor-pointer">
              <Image
                src="/images/upload_photo.svg"
                alt="사진"
                width={342}
                height={250}
              />
              <input
                type="file"
                accept="image/*, .pdf"
                id="upload"
                className="hidden"
                onChange={onImageUpload}
              />
            </label>
            <div className="mt-5 text-[13px] flex flex-col text-[#696E83]">
              <span>* 계약서의 화질에 따라 결과가 달라질 수 있습니다.</span>
              <span>
                * 결과에 아무런 내용도 표시되지 않았다면, 해당 정보를 인식하지
                못했거나 누락되었을 가능성이 있습니다.
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
