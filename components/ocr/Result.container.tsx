'use client';

import { useState } from 'react';

import { IResultContainer } from './OCR.types';
import OCRResultUI from './Result.presenter';

export default function ResultContainer({
  setImg,
  analyzeResult,
  setAnalyzeResult,
}: IResultContainer) {
  const [selected, setSelected] = useState(0);
  const [category1, setCategory1] = useState(0);
  const [category2, setCategory2] = useState(0);
  return (
    <OCRResultUI
      selected={selected}
      setSelected={setSelected}
      category1={category1}
      setCategory1={setCategory1}
      category2={category2}
      setCategory2={setCategory2}
      setImg={setImg}
      analyzeResult={analyzeResult}
      setAnalyzeResult={setAnalyzeResult}
    />
  );
}
