'use client';

import Image from 'next/image';
import { ChangeEvent, FormEvent, useId, useState } from 'react';
import { IoDownloadOutline } from 'react-icons/io5';
import Resizer from 'react-image-file-resizer';

import { requestWithBase64 } from '@/utils/base64';

import Button from '../Common/Button';
import { Preview } from '.';
import Analyzing from './Analyzing';
import AnalyzingResult from './AnalyzingResult';

export default function UploadForm() {
  const [img, setImg] = useState<string | null>(null);
  const [tableData, setTableData] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const id = useId();

  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [fileExtension, setFileExtension] = useState<string | null>(null);

  const resizerFile = (file: File): Promise<string> =>
    new Promise((res) => {
      Resizer.imageFileResizer(
        file,
        1500,
        1500,
        'JPEG',
        80,
        0,
        (uri) => {
          if (typeof uri === 'string') {
            res(uri);
          } else {
            throw new Error('이미지 형식이 올바르지 않습니다.');
          }
        },
        'base64',
      );
    });

  const imageUploadHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImg(imgUrl);

      const ex = file.name.split('.')[1];
      setFileExtension(ex);

      const base64 = await resizerFile(file);
      const base64Str = base64.split(',')[1];
      setBase64Image(base64Str);
    }
  };

  const imageAnalyzingHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (base64Image && fileExtension) {
      try {
        setIsProcessing(true);
        const data = await requestWithBase64(base64Image, fileExtension);
        setTableData(data);
      } catch (error) {
        return error;
      } finally {
        setIsProcessing(false);
        setImg(null);
      }
    } else {
      return null;
    }
    return null;
  };

  if (img && !isProcessing) {
    return (
      <form
        className="w-3/5 flex flex-col items-center justify-center gap-5"
        onSubmit={imageAnalyzingHandler}>
        <Image src={img} alt="계약서 미리보기" width={500} height={1000} />
        <div className="w-full flex justify-between">
          <Button
            variant="primary"
            className="bg-gray-500"
            onClick={() => setImg(null)}>
            초기화
          </Button>
          <Button variant="primary" type="submit">
            분석하기
          </Button>
        </div>
      </form>
    );
  }
  if (isProcessing) {
    return <Analyzing />;
  }
  if (tableData.length > 0) {
    return <AnalyzingResult tableData={tableData} />;
  }
  return (
    <form className="w-3/5 flex flex-col items-center justify-center gap-5">
      <Preview />
      <label
        htmlFor={id}
        className="w-full flex justify-center items-center gap-2 border py-4 px-5 rounded-2xl cursor-pointer mt-[2rem]">
        부동산 계약서 업로드
        <IoDownloadOutline />
        <input
          type="file"
          accept="image/*, .pdf"
          id={id}
          className="hidden"
          onChange={imageUploadHandler}
        />
      </label>
    </form>
  );
}
