'use client';

import OCRContainer from '@/components/ocr/OCR.container';
import useAccessRestriction from '@/hooks/useAccessRestriction';

export default function Analysis() {
  useAccessRestriction();
  return <OCRContainer />;
}
