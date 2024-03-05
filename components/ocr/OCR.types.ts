import { ChangeEvent, FormEvent } from 'react';

export interface IOCRProps {
  img?: string | null;
  analyzeResult?: [];
  isProcessing?: boolean;
  onImageUpload?: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onImageAnalyzing?: (e: FormEvent<HTMLFormElement>) => Promise<unknown>;
  onRestImg?: () => void;
}
