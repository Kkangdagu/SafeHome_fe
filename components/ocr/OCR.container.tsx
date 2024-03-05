'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Resizer from 'react-image-file-resizer';

import { requestWithBase64 } from '@/utils/base64';

import OCRUI from './OCR.presenter';

export default function OCRContainer() {
  const [img, setImg] = useState<string | null>(null);
  const [analyzeResult, setAnalyzeResult] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
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

  const onImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
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

  const onImageAnalyzing = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (base64Image && fileExtension) {
      try {
        setIsProcessing(true);
        const data = await requestWithBase64(base64Image, fileExtension);
        setAnalyzeResult(data);
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

  const onRestImg = () => {
    setImg(null);
  };

  return (
    <OCRUI
      img={img}
      isProcessing={isProcessing}
      onImageUpload={onImageUpload}
      onImageAnalyzing={onImageAnalyzing}
      onRestImg={onRestImg}
    />
  );
}
