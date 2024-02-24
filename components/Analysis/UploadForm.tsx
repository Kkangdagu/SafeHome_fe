'use client';

import Image from 'next/image';
import { ChangeEvent, FormEvent, useId, useState } from 'react';
import { IoDownloadOutline } from 'react-icons/io5';

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

  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result.split(',')[1]);
        } else {
          reject(new Error('Invalid image format'));
        }
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const imageUploadHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImg(imgUrl);

      const ex = file.name.split('.')[1];
      setFileExtension(ex);

      const base64 = await getBase64(file);
      setBase64Image(base64);
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
